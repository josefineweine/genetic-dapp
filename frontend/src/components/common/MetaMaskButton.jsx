import React, { useState } from "react";

const MetaMaskButton = ({ setIsWalletConnected }) => {
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        setLoading(true);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        const walletAddress = accounts[0];

        // Store the wallet address in localStorage
        localStorage.setItem("walletAddress", walletAddress);

        setIsWalletConnected(true); // Update state
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("MetaMask is not installed. Please install it to continue.");
    }
  };

  return (
    <div>
      <button disabled={loading} onClick={connectWallet}>
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>
    </div>
  );
};

export default MetaMaskButton;
