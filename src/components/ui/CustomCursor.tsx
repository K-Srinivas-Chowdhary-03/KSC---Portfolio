"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"normal" | "link" | "button" | "card" | "logo">("normal");
  const [isClicking, setIsClicking] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for trailing dots
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  
  const dot1X = useSpring(mouseX, { ...smoothOptions, damping: 25, stiffness: 250 });
  const dot1Y = useSpring(mouseY, { ...smoothOptions, damping: 25, stiffness: 250 });
  
  const dot2X = useSpring(mouseX, { ...smoothOptions, damping: 30, stiffness: 200 });
  const dot2Y = useSpring(mouseY, { ...smoothOptions, damping: 30, stiffness: 200 });
  
  const dot3X = useSpring(mouseX, { ...smoothOptions, damping: 35, stiffness: 150 });
  const dot3Y = useSpring(mouseY, { ...smoothOptions, damping: 35, stiffness: 150 });

  useEffect(() => {
    // Check if it's a touch device (mobile)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
      // Determine hover state based on the element
      const target = e.target as HTMLElement;
      if (target.closest('a') && target.closest('header')) {
        setHoverState("logo");
      } else if (target.closest('a')) {
        setHoverState("link");
      } else if (target.closest('button') || target.closest('.group\\/btn')) {
        setHoverState("button");
      } else if (target.closest('#projects .group')) {
        setHoverState("card");
      } else {
        setHoverState("normal");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isMobile) return null;

  // Define variants for the main bubble
  const bubbleVariants = {
    normal: { width: 24, height: 24, border: "1px solid rgba(229,9,20,0.5)", backgroundColor: "rgba(229,9,20,0.05)", boxShadow: "0 0 10px rgba(229,9,20,0.2)" },
    link: { width: 32, height: 32, border: "1px solid rgba(229,9,20,0.7)", backgroundColor: "rgba(229,9,20,0.1)", boxShadow: "0 0 15px rgba(229,9,20,0.4)" },
    button: { width: 40, height: 40, border: "2px solid rgba(229,9,20,0.9)", backgroundColor: "rgba(229,9,20,0.2)", boxShadow: "0 0 25px rgba(229,9,20,0.6)" },
    card: { width: 48, height: 48, border: "1px solid rgba(229,9,20,0.3)", backgroundColor: "rgba(229,9,20,0.05)", boxShadow: "0 0 30px rgba(229,9,20,0.1)" },
    logo: { width: 36, height: 36, border: "1px solid rgba(229,9,20,0.8)", backgroundColor: "rgba(229,9,20,0.15)", boxShadow: "0 0 20px rgba(229,9,20,0.5)" },
  };

  const currentVariant = bubbleVariants[hoverState];

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]" 
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
      {/* Main Cursor Bubble */}
      <motion.div
        className="absolute top-0 left-0 rounded-full backdrop-blur-[2px] flex items-center justify-center"
        animate={{
          width: currentVariant.width,
          height: currentVariant.height,
          border: currentVariant.border,
          backgroundColor: currentVariant.backgroundColor,
          boxShadow: currentVariant.boxShadow,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full border border-accent"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isClicking ? 1.5 : 0, opacity: isClicking ? 0 : 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Trailing Dot 1 */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-accent/60 shadow-[0_0_5px_rgba(229,9,20,0.5)]"
        style={{
          x: dot1X,
          y: dot1Y,
          width: 6,
          height: 6,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Dot 2 */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-accent/40 shadow-[0_0_4px_rgba(229,9,20,0.4)]"
        style={{
          x: dot2X,
          y: dot2Y,
          width: 4,
          height: 4,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Dot 3 */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-accent/20 shadow-[0_0_3px_rgba(229,9,20,0.2)]"
        style={{
          x: dot3X,
          y: dot3Y,
          width: 3,
          height: 3,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
