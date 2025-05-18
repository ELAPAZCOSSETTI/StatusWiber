'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react'; // ícono hamburguesa opcional

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 text-black border-b-1">
      {/* Logo o Imagen */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="Logo" width={120} height={100} />
      </div>

      {/* Botones centrales */}
      <div className="hidden md:flex gap-6 text-base font-medium">
        <Link href="#">Inicio</Link>
        <Link href="#">Servicios</Link>
        <Link href="#">Contacto</Link>
      </div>

      {/* Lado derecho: login o menú hamburguesa */}
      <div className="flex items-center gap-4">
        <Link href="/Login" className="hidden md:inline-block text-sm font-semibold">
          Cerrar sesion
        </Link>
        {/* Botón hamburguesa visible solo en móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Menú móvil (opcional) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-4 py-4 md:hidden">
          <Link href="#">Inicio</Link>
          <Link href="#">Servicios</Link>
          <Link href="#">Contacto</Link>
          <Link href="/login">Iniciar sesión</Link>
        </div>
      )}
    </nav>
  );
}
