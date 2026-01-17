import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      {/* TOP FOOTER */}
      <div style={styles.top}>
        {/* COLUMN 1 */}
        <div style={styles.column}>
          <h3 style={styles.logo}>Task Pro Manager</h3>
          <p style={styles.text}>
            Task Pro Manager is a centralized web-based platform designed to
            manage users, tasks, projects and submissions efficiently with
            role-based access.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <p style={styles.link}>Home</p>
          <p style={styles.link}>About</p>
          <p style={styles.link}>Features</p>
          <p style={styles.link}>Contact</p>
        </div>

        {/* COLUMN 3 */}
        <div style={styles.column}>
          <h4 style={styles.heading}>User Roles</h4>
          <p style={styles.link}>Admin</p>
          <p style={styles.link}>Supervisor</p>
          <p style={styles.link}>Student</p>
        </div>

        {/* COLUMN 4 */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>Email: support@taskpromanager.com</p>
          <p style={styles.text}>Phone: +91 98765 43210</p>
          <p style={styles.text}>Location: Kerala, India</p>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div style={styles.bottom}>
        <p>© 2026 Task Pro Manager. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

/* ================= STYLES ================= */

const styles = {
  footer: {
    backgroundColor: "#020617",
    color: "#E5E7EB",
    marginTop: "80px",
  },

  top: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    padding: "70px 80px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  logo: {
    color: "#2563EB",
    fontSize: "22px",
    fontWeight: "700",
  },

  heading: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#FFFFFF",
  },

  text: {
    fontSize: "14px",
    color: "#CBD5E1",
    lineHeight: "1.6",
  },

  link: {
    fontSize: "14px",
    color: "#CBD5E1",
    cursor: "pointer",
  },

  bottom: {
    borderTop: "1px solid #1F2937",
    textAlign: "center",
    padding: "18px",
    fontSize: "14px",
    color: "#9CA3AF",
  },
};
