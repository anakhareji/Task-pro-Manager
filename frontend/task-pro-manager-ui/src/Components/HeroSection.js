import React from "react";

function HeroSection({ goToLogin }) {
  return (
    <div style={styles.hero}>
      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <h1 style={styles.title}>
          Manage Your <span style={styles.highlight}>Tasks & Projects</span>
          <br /> Efficiently
        </h1>

        <p style={styles.subtitle}>
          Task Pro Manager helps students, supervisors and admins
          organize tasks, track progress and collaborate effectively.
        </p>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search tasks, projects or keywords"
            style={styles.input}
          />
          <button style={styles.searchBtn} onClick={goToLogin}>
            Get Started
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div style={styles.right}>
        <img
          src="https://illustrations.popsy.co/blue/man-working-on-laptop.svg"
          alt="Hero"
          style={styles.image}
        />
      </div>
    </div>
  );
}

export default HeroSection;

/* ================= STYLES ================= */

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 60px",
    background: "linear-gradient(180deg, #EEF2FF, #FFFFFF)",
  },

  left: {
    maxWidth: "550px",
  },

  title: {
    fontSize: "44px",
    fontWeight: "700",
    lineHeight: "1.2",
    color: "#111827",
    marginBottom: "20px",
  },

  highlight: {
    color: "#2563EB",
  },

  subtitle: {
    fontSize: "16px",
    color: "#4B5563",
    marginBottom: "32px",
    lineHeight: "1.6",
  },

  searchBox: {
    display: "flex",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },

  input: {
    flex: 1,
    border: "none",
    padding: "14px 16px",
    fontSize: "14px",
    outline: "none",
  },

  searchBtn: {
    backgroundColor: "#2563EB",
    color: "#ffffff",
    border: "none",
    padding: "0 26px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  right: {
    maxWidth: "480px",
  },

  image: {
    width: "100%",
  },
};
