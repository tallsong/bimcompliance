import React from 'react';

interface SectionProps {
  id?: string;
  alternateIndex: number; // 0, 1, 2, 3... for each section in order
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  alternateIndex,
  children,
  className = ''
}: SectionProps) {
  // Alternates between white (even) and gray-50 (odd)
  const bgClass = alternateIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50';

  return (
    <section id={id} className={`py-24 ${bgClass} relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
}
