import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Organizations from './pages/Organizations';
import UserProfile from './pages/UserProfile';
import TestPage from './pages/TestPage';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/users" element={user ? <Users /> : <Navigate to="/" />} />
        <Route path="/users/:id" element={user ? <UserProfile /> : <Navigate to="/" />} />
        <Route path="/organizations" element={user ? <Organizations /> : <Navigate to="/" />} />
        <Route path="/test" element={user ? <TestPage /> : <Navigate to="/" />} />
      </Routes>
  );
}

export default App;
