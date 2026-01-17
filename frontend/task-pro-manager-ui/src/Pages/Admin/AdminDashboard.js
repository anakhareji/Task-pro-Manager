import { useState } from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import ManageProjects from "./ManageProjects";
import ManageUsers from "./ManageUsers";

function AdminDashboard({ user, onLogout }) {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Users":
        return <ManageUsers />;
      case "Projects":
        return <ManageProjects user={user} />;
      default:
        return (
          <>
            <h1 style={styles.title}>Admin Dashboard</h1>

            <div style={styles.cards}>
              <div style={styles.card}>
                <p>Total Users</p>
                <h2>12</h2>
              </div>
              <div style={styles.card}>
                <p>Active Projects</p>
                <h2>5</h2>
              </div>
              <div style={styles.card}>
                <p>Supervisors</p>
                <h2>3</h2>
              </div>
              <div style={styles.card}>
                <p>Students</p>
                <h2>8</h2>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <DashboardLayout
      user={user}
      onLogout={onLogout}
      activePage={activePage}
      setActivePage={setActivePage}
    >
      {renderContent()}
    </DashboardLayout>
  );
}

export default AdminDashboard;

const styles = {
  title: {
    fontSize: "26px",
    marginBottom: "20px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    background: "#E9EEF5",
    borderRadius: "10px",
  },
};
