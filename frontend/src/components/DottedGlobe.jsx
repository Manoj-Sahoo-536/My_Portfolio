import React, { useRef, useEffect } from 'react';

/**
 * DottedGlobe — 1:1 Framer 3D World Earth Map Component
 * Visual features:
 * - Real continent landmasses rendered with high-contrast dotted matrix
 * - 3D vector continental coastline outlines
 * - 15° latitude/longitude graticule spherical wireframe
 * - Glowing Odisha, India location marker pin (lat: 20.9517, lng: 85.0985)
 * - 360° interactive mouse drag with momentum physics & inertia
 * - Auto-rotation with stop-on-hover
 */
// Initial orientation: latitude tilt 0.25 rad, longitude facing Odisha, India directly in front
const INITIAL_ROT_X = 0.25;
const INITIAL_ROT_Y = -(85.0985 + 90) * (Math.PI / 180);

export default function DottedGlobe({ size = 160 }) {
  const canvasRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0.005 });
  const rotationRef = useRef({ x: INITIAL_ROT_X, y: INITIAL_ROT_Y });
  const hasStartedSpinningRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const radius = size * 0.44;
    const cx = size / 2;
    const cy = size / 2;

    // Helper: convert (lat, lng) to 3D Cartesian coordinates on sphere
    const latLngToVec3 = (lat, lng, r = radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);
      return { x, y, z };
    };

    // Pre-calculate 15° Graticule Grid Lines (Latitude rings & Longitude meridians)
    const graticuleLines = [];

    // Latitude rings (-75° to +75° in 15° increments)
    for (let lat = -75; lat <= 75; lat += 15) {
      const ring = [];
      for (let lng = -180; lng <= 180; lng += 5) {
        ring.push(latLngToVec3(lat, lng));
      }
      graticuleLines.push(ring);
    }

    // Longitude meridians (-180° to +180° in 15° increments)
    for (let lng = -180; lng < 180; lng += 15) {
      const meridian = [];
      for (let lat = -85; lat <= 85; lat += 5) {
        meridian.push(latLngToVec3(lat, lng));
      }
      graticuleLines.push(meridian);
    }

    let landDots = [];
    let coastline3D = [];

    // Fetch and process world land data
    fetch('/assets/data/world_coastlines.json')
      .then((res) => res.json())
      .then((loops) => {
        // 1. Build 3D Coastline loops
        coastline3D = loops.map((loop) =>
          loop.map(([lng, lat]) => latLngToVec3(lat, lng))
        );

        // 2. Rasterize land polygons onto offscreen canvas to sample dots
        const mapW = 1024;
        const mapH = 512;
        const offscreen = document.createElement('canvas');
        offscreen.width = mapW;
        offscreen.height = mapH;
        const offCtx = offscreen.getContext('2d', { willReadFrequently: true });

        if (offCtx) {
          offCtx.fillStyle = '#000000';
          offCtx.fillRect(0, 0, mapW, mapH);
          offCtx.fillStyle = '#ffffff';

          loops.forEach((loop) => {
            if (loop.length < 2) return;
            offCtx.beginPath();
            const startX = ((loop[0][0] + 180) / 360) * mapW;
            const startY = ((90 - loop[0][1]) / 180) * mapH;
            offCtx.moveTo(startX, startY);
            for (let i = 1; i < loop.length; i++) {
              const px = ((loop[i][0] + 180) / 360) * mapW;
              const py = ((90 - loop[i][1]) / 180) * mapH;
              offCtx.lineTo(px, py);
            }
            offCtx.closePath();
            offCtx.fill();
          });

          const imgData = offCtx.getImageData(0, 0, mapW, mapH).data;
          const isLand = (lng, lat) => {
            const px = Math.floor(((lng + 180) / 360) * mapW) % mapW;
            const py = Math.floor(((90 - lat) / 180) * mapH);
            const idx = (Math.max(0, Math.min(mapH - 1, py)) * mapW + Math.max(0, Math.min(mapW - 1, px))) * 4;
            return imgData[idx] > 128;
          };

          // Sample dense dot grid over landmasses
          const step = 2.4; // Grid density step in degrees
          const dots = [];

          for (let lat = -80; lat <= 80; lat += step) {
            const cosLat = Math.cos(lat * (Math.PI / 180));
            const lngStep = cosLat > 0.02 ? step / Math.max(0.28, cosLat) : 360;

            for (let lng = -180; lng < 180; lng += lngStep) {
              if (isLand(lng, lat)) {
                const vec = latLngToVec3(lat, lng);
                dots.push({
                  lat,
                  lng,
                  x: vec.x,
                  y: vec.y,
                  z: vec.z
                });
              }
            }
          }

          landDots = dots;
        }
      })
      .catch((err) => {
        console.warn('Globe data fetch fallback:', err);
      });

    // Marker Location: Odisha, India (20.9517° N, 85.0985° E)
    const markerLat = 20.9517;
    const markerLng = 85.0985;
    const markerPos = latLngToVec3(markerLat, markerLng);

    let animId;

    // IntersectionObserver: Ensure globe starts facing India when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasStartedSpinningRef.current) {
              // Lock rotation directly to India in front
              rotationRef.current = { x: INITIAL_ROT_X, y: INITIAL_ROT_Y };
              setTimeout(() => {
                hasStartedSpinningRef.current = true;
              }, 400);
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(canvas);

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Smooth auto-rotation after coming into view
      if (hasStartedSpinningRef.current && !isDraggingRef.current) {
        if (!isHoveredRef.current) {
          rotationRef.current.y += velocityRef.current.y;
          rotationRef.current.x += velocityRef.current.x;
          // Inertia damping back to steady spin
          velocityRef.current.y = velocityRef.current.y * 0.96 + 0.005 * 0.04;
          velocityRef.current.x *= 0.96;
        } else {
          // Hover pause
          velocityRef.current.y *= 0.92;
          velocityRef.current.x *= 0.92;
          rotationRef.current.y += velocityRef.current.y;
          rotationRef.current.x += velocityRef.current.x;
        }
      }

      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);
      const cosX = Math.cos(rotationRef.current.x);
      const sinX = Math.sin(rotationRef.current.x);

      // 3D rotation projection helper
      const project = (p) => {
        // Rotate around Y-axis (longitude)
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = p.z * cosY - p.x * sinY;

        // Rotate around X-axis (latitude)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        return {
          x2d: cx + x1,
          y2d: cy - y2,
          z: z2
        };
      };

      // 1. Draw Globe Sphere Base (Pure dark background)
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#060809';
      ctx.fill();

      // 2. Draw 15° Graticule Wireframe Grid Lines
      ctx.strokeStyle = 'rgba(82, 179, 131, 0.08)';
      ctx.lineWidth = 0.5;

      graticuleLines.forEach((line) => {
        ctx.beginPath();
        let started = false;
        for (let i = 0; i < line.length; i++) {
          const pt = project(line[i]);
          if (pt.z > -radius * 0.1) {
            if (!started) {
              ctx.moveTo(pt.x2d, pt.y2d);
              started = true;
            } else {
              ctx.lineTo(pt.x2d, pt.y2d);
            }
          } else {
            started = false;
          }
        }
        ctx.stroke();
      });

      // 3. Draw Continental Coastline Vector Outlines
      if (coastline3D.length > 0) {
        ctx.strokeStyle = 'rgba(82, 179, 131, 0.38)';
        ctx.lineWidth = 0.7;

        coastline3D.forEach((loop) => {
          ctx.beginPath();
          let started = false;
          for (let i = 0; i < loop.length; i++) {
            const pt = project(loop[i]);
            if (pt.z > -radius * 0.05) {
              if (!started) {
                ctx.moveTo(pt.x2d, pt.y2d);
                started = true;
              } else {
                ctx.lineTo(pt.x2d, pt.y2d);
              }
            } else {
              started = false;
            }
          }
          ctx.stroke();
        });
      }

      // 4. Draw Landmass Matrix Dots
      if (landDots.length > 0) {
        // Project and sort dots
        const projectedDots = [];
        for (let i = 0; i < landDots.length; i++) {
          const pt = project(landDots[i]);
          if (pt.z > -radius * 0.05) {
            projectedDots.push(pt);
          }
        }

        // Render front land dots in elegant, balanced emerald green
        for (let i = 0; i < projectedDots.length; i++) {
          const pt = projectedDots[i];
          const depthNorm = Math.max(0, Math.min(1, (pt.z + radius) / (2 * radius)));
          const alpha = 0.22 + depthNorm * 0.45;
          const dotRadius = 0.55 + depthNorm * 0.4;

          ctx.fillStyle = `rgba(82, 179, 131, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(pt.x2d, pt.y2d, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Draw Outer Atmosphere Rim / Edge Glow
      ctx.strokeStyle = 'rgba(82, 179, 131, 0.22)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // 6. Draw Location Pin (India Marker)
      const markerPt = project(markerPos);
      if (markerPt.z > 0) {
        const pulse = (Math.sin(performance.now() * 0.006) + 1) * 0.5;

        // Outer pulse radar ring
        ctx.strokeStyle = `rgba(82, 179, 131, ${0.2 + pulse * 0.45})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(markerPt.x2d, markerPt.y2d, 3.2 + pulse * 2.5, 0, Math.PI * 2);
        ctx.stroke();

        // Luminous green marker center
        ctx.fillStyle = '#56c596';
        ctx.beginPath();
        ctx.arc(markerPt.x2d, markerPt.y2d, 2.0, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Mouse Drag Event Handlers
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastMousePosRef.current.x;
      const dy = e.clientY - lastMousePosRef.current.y;

      rotationRef.current.y += dx * 0.01;
      rotationRef.current.x += dy * 0.01;
      // Clamp vertical tilt
      rotationRef.current.x = Math.max(-1.4, Math.min(1.4, rotationRef.current.x));

      velocityRef.current = {
        x: dy * 0.002,
        y: dx * 0.002
      };

      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = 'grab';
    };

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      isDraggingRef.current = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'grab',
        touchAction: 'none',
        userSelect: 'none'
      }}
    />
  );
}
