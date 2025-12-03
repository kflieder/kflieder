import React, { useState, useRef } from 'react'

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLLIElement | null>(null);
  const [style, setStyle] = useState({ transform: "" });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg)"
    });
  };

  return (
    <li
      ref={cardRef}
      className="hover:underline border-4 rounded-2xl border-white/50 sm:w-54 sm:h-64 w-full h-76 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </li>
  );
}


export default TiltCard
