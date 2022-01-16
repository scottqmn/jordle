import React from "react";
import Jordle from "./components/Jordle";
import { AnydleProvider } from "./contexts/Anydle";

function App() {
  return (
    <AnydleProvider>
      <Jordle />
    </AnydleProvider>
  );
}

export default App;
