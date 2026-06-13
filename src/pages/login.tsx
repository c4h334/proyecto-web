import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthService } from '../services/AuthService';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const data = await AuthService.login({ username, password });
      
      const userData = { 
        userName: data.username,
        name: data.name,
        email: data.email
      }; 
      
      login(data.bearerToken, userData); 
      navigate('/profile');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Nombre de usuario o contraseña incorrectos.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('../public/background.jpg')] bg-cover bg-center bg-no-repeat relative">
      
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md py-8 px-6 sm:px-10 shadow-2xl rounded-2xl sm:rounded-3xl border border-white/50">
          
          <div className="mb-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Iniciar Sesión
            </h2>
            <p className="mt-2 text-center text-sm text-gray-700">
              ¿No tienes una cuenta?{' '}
              <Link to="/register" className="font-medium text-[#014681] hover:text-[#014681]/80 transition-colors">
                Regístrate aquí
              </Link>
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-800">Nombre de Usuario</label>
              <div className="mt-1">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors bg-white/90"
                  placeholder="Tu nombre de usuario"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">Contraseña</label>
              <div className="mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors bg-white/90"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white transition-all ${
                  isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-[#014681] hover:bg-[#013561] hover:shadow-lg'
                }`}
              >
                {isLoading ? 'Ingresando...' : 'Ingresar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}