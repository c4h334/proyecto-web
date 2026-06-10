import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-gray-500 font-medium">Cargando tu perfil...</p>
      </div>
    );
  }

  const inicial = (user.name || user.userName || 'U').charAt(0).toUpperCase();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 flex justify-center items-start">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        
        <div className="bg-blue-900 px-6 py-10 text-center">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white text-blue-900 text-4xl font-bold shadow-md mb-5">
            {inicial}
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            {user.name || '¡Bienvenido!'}
          </h2>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Nombre Completo
            </label>
            <div className="text-base sm:text-lg font-medium text-gray-900 bg-gray-50 p-3.5 rounded-lg border border-gray-200">
              {user.name || 'No especificado'}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Nombre de Usuario
            </label>
            <div className="text-base sm:text-lg font-medium text-gray-900 bg-gray-50 p-3.5 rounded-lg border border-gray-200">
              {user.userName}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Correo Electrónico
            </label>
            <div className="text-base sm:text-lg font-medium text-gray-900 bg-gray-50 p-3.5 rounded-lg border border-gray-200 break-all">
              {user.email || 'No especificado'}
            </div>
          </div>

          <div className="pt-6 mt-2 border-t border-gray-100">
            <button
              onClick={() => { logout(); navigate('/'); }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 transition-colors focus:outline-none"
            >
              Cerrar Sesión
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}