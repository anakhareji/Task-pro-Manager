import React from "react";

function PublicNavbar({ goToLogin, goToRegister }) {
  return (
    <div style={styles.navbar}>
      {/* LEFT : LOGO */}
      <div style={styles.left}>
        <span style={styles.logo}>Task Pro Manager</span>
      </div>

      {/* CENTER : MENU */}
      <div style={styles.center}>
        <span style={styles.link}>Home</span>
        <span style={styles.link}>About</span>
        <span style={styles.link}>Features</span>
        <span style={styles.link}>Contact</span>
      </div>

      {/* RIGHT : AUTH */}
      <div style={styles.right}>
        <span style={styles.login} onClick={goToLogin}>
          Login
        </span>
        <button style={styles.registerBtn} onClick={goToRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default PublicNavbar;

/* ================= STYLES ================= */

const styles = {
  navbar: {
    height: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  left: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#2563EB",
    cursor: "pointer",
  },

  center: {
    display: "flex",
    gap: "28px",
  },

  link: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#374151",
    cursor: "pointer",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  login: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#2563EB",
    cursor: "pointer",
  },

  registerBtn: {
    backgroundColor: "#2563EB",
    color: "#ffffff",
    border: "none",
    padding: "8px 18px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
