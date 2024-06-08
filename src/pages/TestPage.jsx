import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Navigate } from 'react-router-dom';

function TestPage() {
  const { user } = useAuth();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      axios.get('http://localhost:3000/api/test')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('Error connecting to the API:', error);
          setMessage('Error connecting to the API');
        });
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="container mx-auto p-4">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">Test API Connection</h1>
            <p className="text-lg">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
