import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const commonLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Tienda', path: '/store' },
    { name: 'Contacto', path: '/contact' },
  ];

  const authLinks = isAuthenticated 
    ? [
        ...commonLinks,
        { name: 'Carrito', path: '/cart' },
        { name: 'Mi Perfil', path: '/profile' },
      ]
    : [
        ...commonLinks,
        { name: 'Iniciar Sesión', path: '/login' },
        { name: 'Registrarse', path: '/register' },
      ];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhZJmn53lcPqe8AAbsWjdX4RfnO7Ok4q9YA&s";

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
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

          <div className="hidden md:flex space-x-8 items-center">
            {authLinks.map((link) => (
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

            {isAuthenticated && (
              <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
                <span className="text-sm font-medium text-gray-500">
                  Hola, {user?.userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>

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

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-4">
              {authLinks.map((link) => (
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

              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-left text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  Cerrar Sesión
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}