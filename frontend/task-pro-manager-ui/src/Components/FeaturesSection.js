import React from "react";
import {
  FiClipboard,
  FiFolder,
  FiUsers,
  FiCheckCircle,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

function FeaturesSection() {
  const features = [
    {
      icon: <FiClipboard />,
      title: "Task Management",
      desc: "Create, assign and track tasks with priority and deadlines.",
    },
    {
      icon: <FiFolder />,
      title: "Project Tracking",
      desc: "Organize tasks under projects and monitor progress easily.",
    },
    {
      icon: <FiUsers />,
      title: "Role Based Access",
      desc: "Admin, Supervisor and Student dashboards with permissions.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Submissions",
      desc: "Students can submit tasks and supervisors can review them.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Reports",
      desc: "View task status, completion reports and performance data.",
    },
    {
      icon: <FiSettings />,
      title: "System Control",
      desc: "Admins manage users, roles and system configurations.",
    },
  ];

  return (
    <div style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          Explore by <span style={styles.highlight}>Features</span>
        </h2>
        <p style={styles.subtitle}>
          Everything you need to manage tasks and projects efficiently
        </p>
      </div>

      <div style={styles.grid}>
        {features.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <h4 style={styles.cardTitle}>{item.title}</h4>
            <p style={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "80px 60px",
    backgroundColor: "#FFFFFF",
  },

  header: {
    textAlign: "center",
    marginBottom: "50px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#111827",
  },

  highlight: {
    color: "#2563EB",
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "15px",
    color: "#6B7280",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    backgroundColor: "#F9FAFB",
    borderRadius: "12px",
    padding: "30px",
    border: "1px solid #E5E7EB",
    transition: "0.3s",
  },

  icon: {
    fontSize: "26px",
    color: "#2563EB",
    marginBottom: "14px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#111827",
  },

  cardDesc: {
    fontSize: "14px",
    color: "#6B7280",
    lineHeight: "1.5",
  },
};
