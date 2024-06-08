import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Admin Panel</Link>
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-white">Hola, {user.correo}</span>
              <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
