import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Ticket from "./Ticket";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Dashboard />
      <Ticket />
      <Login />
      <Footer />
    </>
  );
}

export default App;
