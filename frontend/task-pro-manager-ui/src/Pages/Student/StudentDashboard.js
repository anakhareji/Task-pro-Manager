import DashboardLayout from "../../Components/DashboardLayout";

function StudentDashboard({ user, onLogout }) {
  return (
    <DashboardLayout user={user} onLogout={onLogout}>

      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Welcome {user?.name}</h2>
      </div>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <p style={styles.cardLabel}>My Tasks</p>
          <h1 style={styles.cardValue}>0</h1>
        </div>

        <div style={styles.card}>
          <p style={styles.cardLabel}>Projects</p>
          <h1 style={styles.cardValue}>3</h1>
        </div>

        <div style={styles.card}>
          <p style={styles.cardLabel}>Submissions</p>
          <h1 style={styles.cardValue}>1</h1>
        </div>
      </div>

      {/* Workspace */}
      <div style={styles.workspace}>
        <h3 style={styles.workspaceTitle}>My Workspace</h3>
        <p style={styles.workspaceText}>
          Your tasks, projects and submissions will appear here.
        </p>
      </div>

      {/* My Tasks Table */}
      <div style={styles.tableContainer}>
        <h3 style={styles.tableTitle}>My Tasks</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Task</th>
              <th style={styles.th}>Project</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>UI Design</td>
              <td style={styles.td}>Task Pro Manager</td>
              <td style={styles.td}>In Progress</td>
              <td style={styles.td}>20 Jan 2026</td>
            </tr>
            <tr>
              <td style={styles.td}>API Integration</td>
              <td style={styles.td}>Task Pro Manager</td>
              <td style={styles.td}>Pending</td>
              <td style={styles.td}>25 Jan 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Submissions Table */}
      <div style={styles.tableContainer}>
        <h3 style={styles.tableTitle}>My Submissions</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Submission</th>
              <th style={styles.th}>Project</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Submitted On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>UI Mockups</td>
              <td style={styles.td}>Task Pro Manager</td>
              <td style={styles.td}>Reviewed</td>
              <td style={styles.td}>10 Jan 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

    </DashboardLayout>
  );
}

export default StudentDashboard;

const styles = {
  header: {
    marginBottom: "30px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#0F172A",
  },

  /* SUMMARY CARDS */
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },

  card: {
    backgroundColor: "#E5EDF6",   // soft professional blue-grey
    borderRadius: "12px",
    padding: "28px",
    border: "1px solid #CBD5E1",
    boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
  },

  cardLabel: {
    fontSize: "14px",
    color: "#334155",
    fontWeight: "600",
  },

  cardValue: {
    marginTop: "10px",
    fontSize: "32px",
    fontWeight: "700",
    color: "#020617",
  },

  /* WORKSPACE */
  workspace: {
    backgroundColor: "#F1F5F9",
    borderRadius: "12px",
    padding: "32px",
    border: "1px solid #CBD5E1",
    marginBottom: "40px",
  },

  workspaceTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#020617",
    marginBottom: "8px",
  },

  workspaceText: {
    fontSize: "14px",
    color: "#475569",
  },

  /* TABLES */
  tableContainer: {
    backgroundColor: "#F8FAFC",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #CBD5E1",
    marginBottom: "40px",
  },

  tableTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#020617",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "12px",
    backgroundColor: "#E2E8F0",
    fontSize: "14px",
    color: "#020617",
    borderBottom: "1px solid #CBD5E1",
  },

  td: {
    padding: "12px",
    fontSize: "14px",
    color: "#1F2937",
    borderBottom: "1px solid #CBD5E1",
  },
};
