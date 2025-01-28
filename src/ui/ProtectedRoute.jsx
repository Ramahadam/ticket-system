import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Loader from './Loader';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navgiate = useNavigate();
  // Load the authenticated user state
  const { isLoading, isAuthenticated } = useUser();

  // Redirect to login page if user is not authenticated
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navgiate('/login');
    },
    [isAuthenticated, isLoading, navgiate]
  );

  // Display loading spinner while authentication state is being checked
  if (isLoading)
    return (
      <div className="h-[100vh] bg-gray-50 flex items-center justify-center">
        <Loader />;
      </div>
    );

  // Render protected content if user is authenticated
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
