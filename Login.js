import React from "react";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <section className="login">
      <h2>Login to TicketEase</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit" className="btn-primary">Login</button>
      </form>
    </section>
  );
}

export default Login;
