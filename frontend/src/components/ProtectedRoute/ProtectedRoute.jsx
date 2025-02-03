import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isWalletConnected = localStorage.getItem("walletAddress");

  if (!isWalletConnected) {
    return <Navigate to="/" />; // Redirect to home if wallet is not connected
  }

  return children; // Return the protected route if wallet is connected
};

export default ProtectedRoute;
