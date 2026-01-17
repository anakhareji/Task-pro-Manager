import { useState } from "react";
import DashboardLayout from "../../Components/DashboardLayout";

function SupervisorDashboard({ user, onLogout }) {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <DashboardLayout 
      user={user} 
      onLogout={onLogout}
      activePage={activePage}
      setActivePage={setActivePage}
    >

      {/* Page Title */}
      <h1 style={styles.title}>Supervisor Dashboard</h1>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <p style={styles.cardLabel}>My Projects</p>
          <h2 style={styles.cardValue}>4</h2>
        </div>

        <div style={styles.card}>
          <p style={styles.cardLabel}>Assigned Tasks</p>
          <h2 style={styles.cardValue}>12</h2>
        </div>

        <div style={styles.card}>
          <p style={styles.cardLabel}>Pending Reviews</p>
          <h2 style={styles.cardValue}>3</h2>
        </div>

        <div style={styles.card}>
          <p style={styles.cardLabel}>Completed Tasks</p>
          <h2 style={styles.cardValue}>9</h2>
        </div>
      </div>

      {/* Supervisor Workspace */}
      <div style={styles.workspace}>
        <h3 style={styles.workspaceTitle}>Supervisor Workspace</h3>
        <p style={styles.workspaceText}>
          Review student submissions, assign tasks, and manage project progress here.
        </p>
      </div>

    </DashboardLayout>
  );
}

export default SupervisorDashboard;

/* ================= STYLES ================= */

const styles = {
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "36px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },

  // 🔵 Supervisor-specific soft tone
  card: {
    backgroundColor: "#EDF1F6",   // different from student/admin but still professional
    borderRadius: "12px",
    padding: "28px",
    border: "1px solid #CBD5E1",
    boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
  },

  cardLabel: {
    fontSize: "14px",
    color: "#334155",
    fontWeight: "600",
    marginBottom: "8px",
  },

  cardValue: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#0F172A",
  },

  workspace: {
    backgroundColor: "#EEF2F7",
    borderRadius: "12px",
    padding: "32px",
    border: "1px solid #CBD5E1",
    boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
  },

  workspaceTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "10px",
  },

  workspaceText: {
    color: "#334155",
    fontSize: "15px",
  },
};
