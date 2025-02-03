import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [donors, setDonors] = useState([]);
  const [successfulMatches, setSuccessfulMatches] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);

  const isWalletConnected = localStorage.getItem("walletAddress"); // Check if wallet is connected

  useEffect(() => {
    if (!isWalletConnected) {
      navigate("/"); // If wallet is not connected, navigate back to the home page
    }

    // Simulating data fetch for donors and successful matches
    setDonors([
      { id: 1, name: "Donor 1", age: 28 },
      { id: 2, name: "Donor 2", age: 35 },
    ]);
    setSuccessfulMatches([
      { id: 1, name: "Match 1", status: "Matched Successfully" },
    ]);
  }, [isWalletConnected, navigate]);

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Administrator Dashboard</h2>
      <div className="action-cards">
        <div className="action-card" onClick={() => navigate("/register")}>
          <h3>Register New Donor</h3>
        </div>
        <div className="action-card" onClick={() => navigate("/donors")}>
          <h3>View Donors</h3>
        </div>
        <div className="action-card" onClick={() => navigate("/match")}>
          <h3>Find Donor Match</h3>
        </div>
      </div>

      {successfulMatches.length > 0 && (
        <div className="successful-matches-section">
          <h3>Successful Matches</h3>
          <div className="donor-grid">
            {successfulMatches.map((match) => (
              <div key={match.id} className="donor-card">
                <h4>{match.name}</h4>
                <p>Status: {match.status}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
