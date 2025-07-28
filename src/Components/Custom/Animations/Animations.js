// src/components/CenteredAnimation.jsx
import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../../Assets/Animations/Animation - 1720461105099.json";

export default function CenteredAnimation() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: { progressiveLoad: true }
    });
    return () => anim.destroy();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div ref={container} style={{ width: 500, height: 500 }} />
    </div>
  );
}
