import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  // Estado para controlar el menú móvil (Subtarea 1.4)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enlaces de navegación definidos en el Jira (Subtarea 1.3)
  const navigationLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Tienda', path: '/store' },
    { name: 'Carrito', path: '/cart' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Iniciar Sesión', path: '/login' },
  ];

  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhZJmn53lcPqe8AAbsWjdX4RfnO7Ok4q9YA&s";

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section - Cliqueable hacia Home  */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src={logoUrl} 
                alt="Veterinary Web Logo" 
                className="h-10 w-auto object-contain rounded-md"
              />
              <span className="hidden sm:block text-xl font-bold text-blue-900">
                Raul Vega
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Visible en pantallas medianas y grandes */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button - Regla Mobile First (Subtarea 1.4) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Se despliega al hacer clic en el botón */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 text-base font-medium transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}