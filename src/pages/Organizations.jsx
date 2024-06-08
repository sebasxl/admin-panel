import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';

function Organizations() {
  const { user } = useAuth();
  const [organizations, setOrganizations] = useState([]);
  const [newOrganization, setNewOrganization] = useState({ nombre: '', direccion: '' });

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get('/api/organizations');
      if (Array.isArray(response.data)) {
        setOrganizations(response.data);
      } else {
        setOrganizations([]);
      }
    } catch (error) {
      console.error('Error fetching organizations:', error);
      setOrganizations([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrganization({ ...newOrganization, [name]: value });
  };

  const handleCreateOrganization = async () => {
    try {
      const response = await axios.post('/api/organizations', newOrganization);
      setOrganizations([...organizations, response.data.organization]);
      setNewOrganization({ nombre: '', direccion: '' });
    } catch (error) {
      console.error('Error creating organization:', error);
    }
  };

  const handleDeleteOrganization = async (id) => {
    try {
      await axios.delete(`/api/organizations/${id}`);
      setOrganizations(organizations.filter(org => org.id_organizacion !== id));
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };

  if (!user || user.rol !== 'administrador_total') {
    return <div>No tienes permiso para ver esta página</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Organizaciones</h1>
          <div className="mb-4">
            <input
              type="text"
              name="nombre"
              value={newOrganization.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="border p-2 mr-2"
            />
            <input
              type="text"
              name="direccion"
              value={newOrganization.direccion}
              onChange={handleInputChange}
              placeholder="Dirección"
              className="border p-2 mr-2"
            />
            <button
              onClick={handleCreateOrganization}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Crear Organización
            </button>
          </div>
          {Array.isArray(organizations) && organizations.length > 0 ? (
            <ul>
              {organizations.map(org => (
                <li key={org.id_organizacion} className="border p-2 mb-2 flex justify-between items-center">
                  <span>{org.nombre} - {org.direccion}</span>
                  <button
                    onClick={() => handleDeleteOrganization(org.id_organizacion)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay organizaciones disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Organizations;
