import { useCallback, useRef } from "react";

const GradientEffect = ({ className, children }) => {
  const divRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    divRef.current.style.background = 
      `radial-gradient(circle at ${x}% ${y}%, #C9C9F2 0%, #000000 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    divRef.current.style.background = 'transparent';
  }, []);

  return (
    <div
      ref={divRef}
      className={`${className} relative overflow-hidden transition-all duration-200`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default GradientEffect;