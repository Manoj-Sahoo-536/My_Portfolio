import React, { useMemo, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Segmented Progress Bar Component
 * A retro developer-style segmented progress indicator matching Framer spec
 */
export default function SegmentedProgressBar({
  progress = 75,
  totalSegments = 15,
  segmentGap = 4,
  segmentHeight = 9,
  segmentWidthMode = "auto",
  fixedSegmentWidth = 18,
  progressDirection = "ltr",
  segmentShape = "rectangle",
  segmentRadius = 0,
  progressBarWidth = "100%",
  primaryColor = "#52B383",
  secondaryColor = "rgba(255, 255, 255, 0.15)",
  emptySegmentOpacity = 1,
  activeSegmentOpacity = 1,
  animate = true,
  trigger = "inView",
  animateOnce = true,
  viewportAmount = 0.2,
  initialDelay = 0.1,
  segmentDuration = 0.25,
  segmentStagger = 0.04,
  animationDirection = "ltr",
  segmentAnimationStyle = "fadeScale",
  ariaLabel = "Progress indicator",
  style = {}
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: viewportAmount,
    once: animateOnce,
  });
  const prefersReducedMotion = useReducedMotion();

  // Calculate progress
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const completedSegments = Math.round((clampedProgress / 100) * totalSegments);

  const getSegmentBorderRadius = () => {
    if (segmentShape === "pill") return segmentHeight / 2;
    if (segmentShape === "rounded") return Math.min(4, segmentHeight / 2);
    return segmentRadius;
  };

  const getTransitionConfig = (index) => {
    const baseDelay = initialDelay + index * segmentStagger;
    return {
      duration: segmentDuration,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: baseDelay,
    };
  };

  const getSegmentVariants = (index, isCompleted) => {
    if (!animate || prefersReducedMotion) {
      return {
        initial: {
          opacity: isCompleted ? activeSegmentOpacity : emptySegmentOpacity,
          scale: 1,
          backgroundColor: isCompleted ? primaryColor : secondaryColor,
        },
        animate: {
          opacity: isCompleted ? activeSegmentOpacity : emptySegmentOpacity,
          scale: 1,
          backgroundColor: isCompleted ? primaryColor : secondaryColor,
        },
      };
    }

    const transition = getTransitionConfig(index);

    switch (segmentAnimationStyle) {
      case "fade":
        return {
          initial: { opacity: 0, backgroundColor: secondaryColor },
          animate: {
            opacity: isCompleted ? activeSegmentOpacity : emptySegmentOpacity,
            backgroundColor: isCompleted ? primaryColor : secondaryColor,
            transition,
          },
        };
      case "fadeScale":
      default:
        return {
          initial: { opacity: 0, scale: 0.6, backgroundColor: secondaryColor },
          animate: {
            opacity: isCompleted ? activeSegmentOpacity : emptySegmentOpacity,
            scale: 1,
            backgroundColor: isCompleted ? primaryColor : secondaryColor,
            transition,
          },
        };
    }
  };

  const animationOrder = useMemo(() => {
    const indices = Array.from({ length: totalSegments }, (_, i) => i);
    if (progressDirection === "rtl" || animationDirection === "rtl") {
      return indices.reverse();
    }
    return indices;
  }, [totalSegments, animationDirection, progressDirection]);

  return (
    <div
      ref={containerRef}
      style={{
        width: segmentWidthMode === "fixed" ? "auto" : progressBarWidth,
        display: "flex",
        flexDirection: progressDirection === "rtl" ? "row-reverse" : "row",
        gap: segmentGap,
        height: segmentHeight,
        alignItems: "stretch",
        ...style
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedProgress}
      aria-label={ariaLabel}
    >
      {Array.from({ length: totalSegments }, (_, index) => {
        const isCompleted = index < completedSegments;
        const animationIndex = animationOrder.indexOf(index);
        const variants = getSegmentVariants(animationIndex, isCompleted);

        return (
          <motion.div
            key={index}
            style={{
              flex: segmentWidthMode === "auto" ? 1 : undefined,
              width: segmentWidthMode === "fixed" ? fixedSegmentWidth : undefined,
              height: "100%",
              borderRadius: getSegmentBorderRadius(),
              transformOrigin: progressDirection === "rtl" ? "right center" : "left center",
            }}
            initial={animate && !prefersReducedMotion ? "initial" : false}
            animate={
              !animate || prefersReducedMotion
                ? "animate"
                : trigger === "load" || (trigger === "inView" && isInView)
                ? "animate"
                : "initial"
            }
            variants={variants}
          />
        );
      })}
    </div>
  );
}
