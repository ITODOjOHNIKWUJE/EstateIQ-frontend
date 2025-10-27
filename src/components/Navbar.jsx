// frontend/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#f4f4f4", padding: "10px" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0, padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/tenants">Tenants</Link></li>
        <li><Link to="/leases">Leases</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/register">Register</Link></li>   {/* ✅ Added this */}
        <li><Link to="/login">Login</Link></li>         {/* ✅ And this */}
      </ul>
    </nav>
  );
}
