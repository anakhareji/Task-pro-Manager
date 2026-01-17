import React from "react";

function Sidebar({ user }) {
  return (
    <div style={styles.sidebar}>
      <MenuItem label="Dashboard" />

      {user.role_id === 1 && (
        <>
          <MenuItem label="Manage Users" />
          <MenuItem label="Manage Projects" />
        </>
      )}

      {user.role_id === 2 && (
        <>
          <MenuItem label="Assign Tasks" />
          <MenuItem label="View Projects" />
        </>
      )}

      {user.role_id === 3 && (
        <>
          <MenuItem label="My Tasks" />
          <MenuItem label="Progress" />
        </>
      )}
    </div>
  );
}

function MenuItem({ label }) {
  return <div style={styles.menuItem}>{label}</div>;
}

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#f5f7fb",
    height: "calc(100vh - 60px)",
    padding: "20px",
    boxSizing: "border-box",
  },
  menuItem: {
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
};

export default Sidebar;
