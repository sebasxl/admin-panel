import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function UserProfile() {
  const { id } = useParams();

  // Datos de ejemplo
  const user = {
    id,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Administrador',
    createdAt: '2022-01-01',
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
        <div className="bg-white shadow-md rounded p-4">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role}</p>
          <p><strong>Fecha de Creación:</strong> {user.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
