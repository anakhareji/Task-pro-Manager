import React, { useState } from "react";

import Home from "./Pages/Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("home"); // home | login | register
  const [user, setUser] = useState(null);

  // 🔐 If user is logged in → go to dashboard
  if (user) {
    return <Dashboard user={user} onLogout={() => setUser(null)} />;
  }

  // 🔹 Login Page
  if (page === "login") {
    return (
      <Login
        onLoginSuccess={(u) => setUser(u)}
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
