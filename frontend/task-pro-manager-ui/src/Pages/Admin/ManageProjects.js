import React, { useEffect, useState } from "react";

function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  /* ================= LOAD FROM STORAGE ================= */
useEffect(() => {
  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {
    setProjects(JSON.parse(savedProjects));
  } else {
    setProjects([
      { project_name: "Final Year Project", status: "Active" },
      { project_name: "Internship Project", status: "Active" },
    ]);
  }
}, []);
useEffect(() => {
  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects]);

  /* ================= SAVE TO STORAGE ================= */
  useEffect(() => {
    localStorage.setItem("admin_projects", JSON.stringify(projects));
  }, [projects]);

  /* ================= HANDLERS ================= */

  const handleAdd = () => {
    if (!projectName.trim()) return;

    setProjects([
      ...projects,
      { project_name: projectName, status: "Active" },
    ]);

    setProjectName("");
  };

  const handleUpdate = () => {
  if (editingIndex === null) return;

  setProjects(
    projects.map((project, index) =>
      index === editingIndex
        ? { ...project, project_name: projectName }
        : project
    )
  );

  setEditingIndex(null);
  setProjectName("");
};


  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const toggleStatus = (index) => {
    const updated = [...projects];
    updated[index].status =
      updated[index].status === "Active" ? "Inactive" : "Active";
    setProjects(updated);
  };

  return (
    <div>
      <h2 style={styles.title}>Manage Projects</h2>

      {/* ADD / UPDATE */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          style={styles.input}
        />

        {editingIndex !== null ? (
          <button onClick={handleUpdate} style={styles.btn}>
            Update
          </button>
        ) : (
          <button onClick={handleAdd} style={styles.btn}>
            Add Project
          </button>
        )}
      </div>

      {/* TABLE */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Project Name</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p, index) => (
            <tr key={index}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{p.project_name}</td>

              <td style={styles.td}>
                <span
                  style={{
                    ...styles.status,
                    backgroundColor:
                      p.status === "Active" ? "#DCFCE7" : "#FEE2E2",
                    color:
                      p.status === "Active" ? "#166534" : "#991B1B",
                  }}
                >
                  {p.status}
                </span>
              </td>

              <td style={styles.td}>
                <button
                  style={styles.edit}
                  onClick={() => {
                    setEditingIndex(index);
                    setProjectName(p.project_name);
                  }}
                >
                  Edit
                </button>

                <button
                  style={styles.toggle}
                  onClick={() => toggleStatus(index)}
                >
                  Toggle
                </button>

                <button
                  style={styles.delete}
                  onClick={() => handleDelete(index)}
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
