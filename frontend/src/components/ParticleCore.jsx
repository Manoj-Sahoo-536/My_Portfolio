import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export default function ParticleCore({
    primaryColor = "#52b383",
    secondaryColor = "#2da868",
    backgroundColor = "transparent",
    shapeType = "icosahedron",
    shapeDetail = 32,
    animationSpeed = 0.5,
    rotationSpeed = 0.1,
    particleSize = 2.0,
    noiseAmplitude = 0.3,
    noiseFrequency = 1.5,
    showWireframe = false,
    wireframeOpacity = 0.1,
    showCore = false,
    coreOpacity = 0.2,
    cameraDistance = 5.5,
    style = {}
}) {
    const canvasNeuroSyncRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const materialRef = useRef(null);
    const wireMaterialRef = useRef(null);
    const wireframeRef = useRef(null);
    const coreRef = useRef(null);
    const coreMaterialRef = useRef(null);
    const meshRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let animationId;
        let resizeObserver = null;
        let renderer = null;
        const container = canvasNeuroSyncRef.current;
        if (!container) return;

        const width = container.clientWidth || 236;
        const height = container.clientHeight || 236;

        // Create renderer
        renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.1,
            100
        );
        camera.position.z = cameraDistance;

        rendererRef.current = renderer;
        cameraRef.current = camera;

        // Create geometry based on shape type
        let geometry;
        switch (shapeType) {
            case "sphere":
                geometry = new THREE.SphereGeometry(1.5, shapeDetail, shapeDetail);
                break;
            case "octahedron":
                geometry = new THREE.OctahedronGeometry(1.5, shapeDetail);
                break;
            case "tetrahedron":
                geometry = new THREE.TetrahedronGeometry(1.5, shapeDetail);
                break;
            case "icosahedron":
            default:
                geometry = mergeVertices(new THREE.IcosahedronGeometry(1.5, shapeDetail));
                break;
        }

        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color1: { value: new THREE.Color(primaryColor) },
                color2: { value: new THREE.Color(secondaryColor) },
                noiseAmp: { value: noiseAmplitude },
                noiseFreq: { value: noiseFrequency },
                particleSize: { value: particleSize },
            },
            vertexShader: `
                uniform float time;
                uniform float noiseAmp;
                uniform float noiseFreq;
                uniform float particleSize;
                varying vec2 vUv;
                varying vec3 vPosition;
                
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
                vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
                float snoise(vec3 v) { 
                    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                    vec3 i = floor(v + dot(v, C.yyy));
                    vec3 x0 = v - i + dot(i, C.xxx);
                    vec3 g = step(x0.yzx, x0.xyz);
                    vec3 l = 1.0 - g;
                    vec3 i1 = min(g.xyz, l.zxy);
                    vec3 i2 = max(g.xyz, l.zxy);
                    vec3 x1 = x0 - i1 + C.xxx;
                    vec3 x2 = x0 - i2 + C.yyy;
                    vec3 x3 = x0 - D.yyy;
                    i = mod289(i);
                    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
                    float n_ = 0.142857142857;
                    vec3 ns = n_ * D.wyz - D.xzx;
                    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                    vec4 x_ = floor(j * ns.z);
                    vec4 y_ = floor(j - 7.0 * x_);
                    vec4 x = x_ * ns.x + ns.yyyy;
                    vec4 y = y_ * ns.x + ns.yyyy;
                    vec4 h = 1.0 - abs(x) - abs(y);
                    vec4 b0 = vec4(x.xy, y.xy);
                    vec4 b1 = vec4(x.zw, y.zw);
                    vec4 s0 = floor(b0) * 2.0 + 1.0;
                    vec4 s1 = floor(b1) * 2.0 + 1.0;
                    vec4 sh = -step(h, vec4(0.0));
                    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
                    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
                    vec3 p0 = vec3(a0.xy, h.x);
                    vec3 p1 = vec3(a0.zw, h.y);
                    vec3 p2 = vec3(a1.xy, h.z);
                    vec3 p3 = vec3(a1.zw, h.w);
                    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
                    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                    m = m * m;
                    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
                }

                void main() {
                    vUv = uv;
                    vec3 pos = position;
                    vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y * noiseFreq + time, pos.z * noiseFreq);
                    float displacement = snoise(noisePos) * noiseAmp;
                    pos += normal * displacement;
                    vPosition = pos;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = max(particleSize + (displacement * 5.0), 0.5);
                }
            `,
            fragmentShader: `
                uniform vec3 color1;
                uniform vec3 color2;
                varying vec3 vPosition;
                
                void main() {
                    vec2 xy = gl_PointCoord.xy - vec2(0.5);
                    float ll = length(xy);
                    if(ll > 0.5) discard;
                    
                    float mixRatio = (vPosition.y + 1.5) / 3.0;
                    vec3 finalColor = mix(color1, color2, mixRatio);
                    
                    float alpha = smoothstep(0.5, 0.15, ll) * 0.55;
                    gl_FragColor = vec4(finalColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const mesh = new THREE.Points(geometry, material);
        const wireMaterial = new THREE.LineBasicMaterial({
            color: new THREE.Color(primaryColor),
            transparent: true,
            opacity: wireframeOpacity,
        });
        const wireframe = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry),
            wireMaterial
        );
        wireframe.visible = showWireframe;

        materialRef.current = material;
        wireMaterialRef.current = wireMaterial;
        wireframeRef.current = wireframe;
        meshRef.current = mesh;

        scene.add(mesh);
        scene.add(wireframe);

        const coreGeom = new THREE.SphereGeometry(0.8, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0xffaacc,
            transparent: true,
            opacity: coreOpacity,
            blending: THREE.AdditiveBlending,
        });
        const core = new THREE.Mesh(coreGeom, coreMat);
        core.visible = showCore;
        scene.add(core);

        coreRef.current = core;
        coreMaterialRef.current = coreMat;

        resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const w = entry.contentRect.width;
                const h = entry.contentRect.height;
                if (w > 0 && h > 0) {
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h);
                }
            }
        });

        resizeObserver.observe(container);

        const clock = new THREE.Clock();

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            material.uniforms.time.value = time * animationSpeed;
            mesh.rotation.y = time * rotationSpeed;
            mesh.rotation.z = time * (rotationSpeed * 0.5);
            wireframe.rotation.y = time * rotationSpeed;
            wireframe.rotation.z = time * (rotationSpeed * 0.5);
            if (showCore && core) {
                const scale = 1 + Math.sin(time * 2) * 0.1;
                core.scale.set(scale, scale, scale);
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            if (renderer) {
                renderer.dispose();
                if (container && renderer.domElement && container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                }
            }
            geometry.dispose();
            material.dispose();
            wireMaterial.dispose();
            coreGeom.dispose();
            coreMat.dispose();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shapeType, shapeDetail, animationSpeed, rotationSpeed, cameraDistance]);

    // Update colors when props change
    useEffect(() => {
        if (materialRef.current && wireMaterialRef.current) {
            materialRef.current.uniforms.color1.value = new THREE.Color(primaryColor);
            materialRef.current.uniforms.color2.value = new THREE.Color(secondaryColor);
            materialRef.current.uniformsNeedUpdate = true;

            wireMaterialRef.current.color = new THREE.Color(primaryColor);
            wireMaterialRef.current.needsUpdate = true;
        }
    }, [primaryColor, secondaryColor]);

    // Update animation parameters
    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.noiseAmp.value = noiseAmplitude;
            materialRef.current.uniforms.noiseFreq.value = noiseFrequency;
            materialRef.current.uniforms.particleSize.value = particleSize;
            materialRef.current.uniformsNeedUpdate = true;
        }
    }, [noiseAmplitude, noiseFrequency, particleSize]);

    // Update wireframe visibility and opacity
    useEffect(() => {
        if (wireframeRef.current && wireMaterialRef.current) {
            wireframeRef.current.visible = showWireframe;
            wireMaterialRef.current.opacity = wireframeOpacity;
            wireMaterialRef.current.needsUpdate = true;
        }
    }, [showWireframe, wireframeOpacity]);

    // Update core visibility and opacity
    useEffect(() => {
        if (coreRef.current && coreMaterialRef.current) {
            coreRef.current.visible = showCore;
            coreMaterialRef.current.opacity = coreOpacity;
            coreMaterialRef.current.needsUpdate = true;
        }
    }, [showCore, coreOpacity]);

    // Update camera distance
    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.position.z = cameraDistance;
        }
    }, [cameraDistance]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                backgroundColor,
                overflow: "hidden",
                position: "relative",
                ...style,
            }}
        >
            {/* WebGL Animated Orb - Full Size with padding */}
            <div
                ref={canvasNeuroSyncRef}
                style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    right: "24px",
                    bottom: "24px",
                    width: "calc(100% - 48px)",
                    height: "calc(100% - 48px)",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
