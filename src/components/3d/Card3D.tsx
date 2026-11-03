import React, { useState, useRef, MouseEvent, ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default: 8)
  glareOpacity?: number;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glareOpacity = 0.15,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Cursor position relative to card (0 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-maxTilt to +maxTilt)
    const rX = ((mouseY / height) - 0.5) * -2 * maxTilt;
    const rY = ((mouseX / width) - 0.5) * 2 * maxTilt;

    setRotateX(rX);
    setRotateY(rY);

    // Glare position in percent
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className={`relative transform-gpu transition-all duration-300 ease-out ${className}`}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="w-full h-full relative"
      >
        {/* Dynamic Specular Crimson Glare Follower */}
        {isHovered && (
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300"
            style={{
              opacity: glareOpacity,
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(220, 38, 38, 0.45), rgba(255, 255, 255, 0.15) 30%, transparent 70%)`,
              borderRadius: 'inherit',
            }}
          />
        )}

        {/* Card Content with 3D Depth capability */}
        {children}
      </div>
    </div>
  );
};
