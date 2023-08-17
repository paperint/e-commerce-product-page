import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ViewProduct from "../components/ViewProduct";

function Homepage() {
  const [cartVolume, setCartVolume] = useState(0);

  return (
    <main>
      <Navbar cartVolume={cartVolume} setCartVolume={setCartVolume} />
      <ViewProduct cartVolume={cartVolume} setCartVolume={setCartVolume} />
    </main>
  );
}

export default Homepage;
