'use client';

import React from 'react';

interface NavButtonProps {
  sectionId: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ sectionId, children }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={() => scrollToSection(sectionId)} className="text-sm hover:underline">
      {children}
    </button>
  );
};

export default NavButton;