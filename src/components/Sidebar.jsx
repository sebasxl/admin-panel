import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block">Dashboard</Link>
        <Link to="/users" className="block">Usuarios</Link>
        <Link to="/organizations" className="block">Organizaciones</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
