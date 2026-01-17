import React, { useState } from "react";

import Home from "./Pages/Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("home"); 
  
  // 1️⃣ Initialize User from Local Storage if available
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user_session");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2️⃣ Handler: Save to Local Storage on Login
  const handleLogin = (userData) => {
    localStorage.setItem("user_session", JSON.stringify(userData));
    setUser(userData);
  };

  // 3️⃣ Handler: Clear Local Storage on Logout
  const handleLogout = () => {
    localStorage.removeItem("user_session");
    setUser(null);
    setPage("login"); // Optional: go to login page after logout
  };

  // 🔐 If user is logged in → go to dashboard
  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // 🔹 Login Page
  if (page === "login") {
    return (
      <Login
        onLoginSuccess={handleLogin}
        goToRegister={() => setPage("register")}
      />
    );
  }

  // 🔹 Register Page
  if (page === "register") {
    return <Register goToLogin={() => setPage("login")} />;
  }

  // 🔹 Home Page (DEFAULT)
  return (
   <Home 
  goToLogin={() => setPage("login")} 
  goToRegister={()=>setPage("register")}
  />
  );
}

export default App;
