import React, { useEffect, useState } from "react";

function ManageProjects({ user }) {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= LOAD FROM BACKEND ================= */
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/admin/projects");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  /* ================= HANDLERS ================= */

  const handleAdd = async () => {
    if (!projectName.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project_name: projectName,
          created_by: user.user_id, // ✅ Sending valid user ID
        }),
      });

      if (response.ok) {
        setProjectName("");
        fetchProjects(); // 🔄 Refresh list
      } else {
        alert("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  // ⚠️ Update/Delete not yet implemented in backend for Projects
  const handleDelete = (index) => {
     alert("Delete not waiting for backend implementation");
  };

  return (
    <div>
      <h2 style={styles.title}>Manage Projects</h2>

      {/* ADD */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.btn} disabled={loading}>
          {loading ? "Adding..." : "Add Project"}
        </button>
      </div>

      {/* TABLE */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Project Name</th>
            <th style={styles.th}>Created At</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p, index) => (
            <tr key={index}>
              <td style={styles.td}>{p.project_id}</td>
              <td style={styles.td}>{p.project_name}</td>
              <td style={styles.td}>
                 {p.created_at ? new Date(p.created_at).toLocaleDateString() : "N/A"}
              </td>
              <td style={styles.td}>
                <button
                  style={styles.delete}
                  onClick={() => handleDelete(p.project_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageProjects;

/* ================= STYLES ================= */

const styles = {
  title: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "600",
  },

  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    padding: "10px",
    width: "260px",
  },

  btn: {
    padding: "10px 18px",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },

  th: {
    padding: "12px",
    backgroundColor: "#E5E7EB",
    textAlign: "left",
    fontWeight: "600",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #E5E7EB",
  },

  status: {
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },

  edit: {
    marginRight: "6px",
    padding: "6px 10px",
    cursor: "pointer",
  },

  toggle: {
    marginRight: "6px",
    padding: "6px 10px",
    backgroundColor: "#F59E0B",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  delete: {
    padding: "6px 10px",
    backgroundColor: "#DC2626",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
