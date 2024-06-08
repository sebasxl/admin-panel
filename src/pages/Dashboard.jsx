
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  const getWelcomeMessage = () => {
    switch (user?.rol) {
      case 'administrador_total':
        return 'Bienvenido Admin Total';
      case 'administrador_organizacion':
        return 'Bienvenido Admin de Organización';
      case 'abogado':
        return 'Bienvenido Abogado';
      case 'cliente':
        return 'Bienvenido Cliente';
      default:
        return 'Bienvenido';
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">
          {user ? getWelcomeMessage() : 'Bienvenido, por favor inicie sesión.'}
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
