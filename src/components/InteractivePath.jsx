import React, { useState, useEffect, useRef } from 'react';

const InteractivePath = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const [ballPos, setBallPos] = useState({ x: 62, y: 70 });
  const [currentDistance, setCurrentDistance] = useState(0);
  const [targetDistance, setTargetDistance] = useState(0);

  useEffect(() => {
    const animate = () => {
      const diff = targetDistance - currentDistance;
      
      if (Math.abs(diff) > 1) {
        const newDistance = currentDistance + diff * 0.01; 
        setCurrentDistance(newDistance);
        
        const path = pathRef.current;
        if (path) {
          const point = path.getPointAtLength(newDistance);
          setBallPos({ x: point.x, y: point.y });
        }
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [currentDistance, targetDistance]);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const scaleX = svg.viewBox.baseVal.width / rect.width;
      const scaleY = svg.viewBox.baseVal.height / rect.height;
      
      const mouseX = (e.clientX - rect.left) * scaleX;
      const mouseY = (e.clientY - rect.top) * scaleY;

      const svgPoint = svg.createSVGPoint();
      svgPoint.x = mouseX;
      svgPoint.y = mouseY;
      const isInside = path.isPointInStroke(svgPoint);

      if (isInside) {
        const pathLength = path.getTotalLength();
        let closestDistance = 0;
        let minDistance = Infinity;

        for (let i = 0; i <= pathLength; i += 3) {
          const point = path.getPointAtLength(i);
          const distance = Math.sqrt(
            Math.pow(point.x - mouseX, 2) + 
            Math.pow(point.y - mouseY, 2)
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            closestDistance = i;
          }
        }

        setTargetDistance(closestDistance);
      }
    };

    svg.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      svg.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 cursor-pointer">
      <svg
        ref={svgRef}
        viewBox="-20 -20 700 380"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-100 md:h-120"
      >
        <path
          ref={pathRef}
          d="M63.5 140.5V0.5H0.5V182.5H114.5V304.5H345.5V87.5H423.5V206.5H601.5V263.5H657.5V163.5H480.5V36.5H291.5V257.5H171.5V140.5H63.5Z"
          fill="#403d39"
          fillOpacity="0"
          stroke="#333333"
          strokeWidth="31"
        />
        
        <circle 
          cx={ballPos.x} 
          cy={ballPos.y}
          r="10"
          fill="#C9C9F2"
          style={{
            pointerEvents: 'none'
          }}
        />
        
        <circle 
          cx={ballPos.x} 
          cy={ballPos.y}
          r="20"
          fill="#C9C9F2"
          opacity="0.3"
          style={{
            pointerEvents: 'none'
          }}
        />
      </svg>
          <p className="text-sm text-center text-stone-500 select-none">
            Move your cursor along the path to guide the ball
          </p>
    </div>
  );
}

export default InteractivePath;