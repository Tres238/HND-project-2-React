import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>TicketEase</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Tickets</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
