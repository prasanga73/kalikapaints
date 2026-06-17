import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-kalika-cream flex flex-col items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-kalika-navy/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-kalika-gold animate-spin"></div>
        </div>
        <p className="mt-4 text-kalika-navy font-bold tracking-wider text-sm">LOADING SECURE SESSION...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
