import React from 'react';
import { Button } from '@heroui/react';

// This will be passed from the main page component
interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: 'Hero', label: 'Inicio' },
  { id: 'About', label: 'Sobre Mí' },
  { id: 'Skills', label: 'Habilidades' },
  { id: 'Projects', label: 'Proyectos' },
  { id: 'Education', label: 'Educación' },
  { id: 'Contact', label: 'Contacto' },
];

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  return (
    <nav className="w-full p-4 bg-transparent text-white text-center absolute top-0 z-10">
      <div className="flex justify-center space-x-4">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id.toLowerCase() ? 'solid' : 'light'}
            onPress={() => setActiveSection(section.id.toLowerCase())}
            className="capitalize"
          >
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
