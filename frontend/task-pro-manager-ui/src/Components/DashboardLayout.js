import React, { useState } from "react";
import {
  FiGrid,
  FiClipboard,
  FiFolder,
  FiCheckSquare,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

/* ===== MENU BY ROLE (🔥 REQUIRED) ===== */
const menuByRole = {
  1: [
    { label: "Dashboard", icon: <FiGrid /> },
    { label: "Users", icon: <FiUsers /> },
    { label: "Projects", icon: <FiFolder /> },
    { label: "Reports", icon: <FiClipboard /> },
    { label: "Settings", icon: <FiSettings /> },
  ],
  2: [
    { label: "Dashboard", icon: <FiGrid /> },
    { label: "My Projects", icon: <FiFolder /> },
    { label: "Tasks", icon: <FiClipboard /> },
    { label: "Submissions", icon: <FiCheckSquare /> },
  ],
  3: [
    { label: "Dashboard", icon: <FiGrid /> },
    { label: "My Tasks", icon: <FiClipboard /> },
    { label: "Projects", icon: <FiFolder /> },
    { label: "Submissions", icon: <FiCheckSquare /> },
    { label: "My Workspace", icon: <FiUsers /> },
  ],
};

/* ===== COMPONENT ===== */
function DashboardLayout({ user, children, onLogout, activePage, setActivePage }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>Task Pro Manager</h2>

        <div style={styles.profileBox}>
          <div style={styles.avatar} onClick={() => setOpen(!open)}>
            {user?.name?.charAt(0)?.toUpperCase()}
          </div>

          {open && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownItem}>Edit Profile</div>
              <div style={styles.dropdownItem}>Change Password</div>
              <div
                style={{ ...styles.dropdownItem, color: "#DC2626" }}
                onClick={onLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          {menuByRole[user?.role_id]?.map((item) => (
            <div
              key={item.label}
              style={{
                ...styles.sideItem,
                ...(activePage === item.label ? styles.activeItem : {}),
              }}
              onClick={() => setActivePage(item.label)}
            >
              <span style={styles.icon}>{item.icon}</span>
              {item.label}
            </div>
          ))}

          <div
            style={{ ...styles.sideItem, color: "#DC2626" }}
            onClick={onLogout}
          >
            <span style={styles.icon}>
              <FiLogOut />
            </span>
            Logout
          </div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;

/* ===== STYLES ===== */
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F3F4F6",
    fontFamily: "Inter, sans-serif",
  },
  navbar: {
    height: "64px",
    padding: "0 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827",
    color: "#FFFFFF",
  },
  logo: {
    color: "#2563EB",
    margin: 0,
  },
  profileBox: {
    position: "relative",
  },
  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#2563EB",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "600",
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "50px",
    background: "#fff",
    width: "180px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
  },
  dropdownItem: {
    padding: "12px",
    cursor: "pointer",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px",
  },
  main: {
    display: "flex",
    minHeight: "calc(100vh - 64px)",
  },
  sidebar: {
    width: "240px",
    background: "#111827",
    padding: "20px",
    color: "#e5e7eb",
  },
  sideItem: {
    padding: "12px",
    display: "flex",
    gap: "12px",
    cursor: "pointer",
    borderRadius: "6px",
    marginBottom: "6px",
    fontSize: "14px",
  },
  activeItem: {
    background: "#1E40AF",
    color: "#fff",
  },
  icon: {
    fontSize: "16px",
  },
  content: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#EDEFF2",
  },
};
