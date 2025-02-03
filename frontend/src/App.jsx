import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Upload from './components/Upload/Upload';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import DonorProfile from './components/DonorProfile/DonorProfile';
import DonorList from './components/DonorList/DonorList';
import DonorMatch from './components/DonorMatch/DonorMatch';
import RegisteredDonors from './components/RegisteredDonors/RegisteredDonors';
import MetaMaskButton from './components/common/MetaMaskButton'; // Add MetaMaskButton
import './App.css';

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Check if wallet is already connected (on page load)
  useEffect(() => {
    const walletAddress = localStorage.getItem("walletAddress");
    if (walletAddress) {
      setIsWalletConnected(true); // If walletAddress exists, set connection state to true
    }
  }, []);

  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <main className="main">
            {/* Display MetaMaskButton if wallet is not connected */}
            {!isWalletConnected ? (
              <MetaMaskButton setIsWalletConnected={setIsWalletConnected} />
            ) : (
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
                <Route path="/donors" element={<RegisteredDonors />} />
                <Route path="/donor/:id" element={<ProtectedRoute><DonorProfile /></ProtectedRoute>} />
                <Route path="/match" element={<ProtectedRoute><DonorMatch /></ProtectedRoute>} />
              </Routes>
            )}
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
