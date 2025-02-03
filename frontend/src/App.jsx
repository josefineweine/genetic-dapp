import React from "react";
import MetaMaskButton from "./components/common/MetaMaskButton";

const App = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Genetic dApp</h1>
      <MetaMaskButton />
    </div>
  );
};

export default App;

