import React, { useState } from "react";

function Register({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [roleId, setRoleId] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password: password,
          role_id: parseInt(roleId), // Ensure role_id is a number
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Please login.");

        // ✅ Reset fields
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRoleId("");

        goToLogin(); // 🔁 Redirect to Login
      } else {
        const errorMsg = typeof data.detail === 'string' ? data.detail : JSON.stringify(data.detail);
        alert(errorMsg || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Is FastAPI running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Register to continue</p>

        <form autoComplete="off" onSubmit={handleSubmit}>

          {/* 🔒 Dummy fields to block browser autofill */}
          <input type="text" name="fake_user" style={{ display: "none" }} />
          <input type="password" name="fake_pass" style={{ display: "none" }} />

          <input
            type="text"
            name="tp_name"
            autoComplete="off"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="tp_register_email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          {/* Password */}
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="tp_register_password"
              autoComplete="new-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.passwordInput}
              required
            />
            <span
              style={styles.toggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Confirm Password */}
          <div style={styles.passwordWrapper}>
            <input
              type={showConfirm ? "text" : "password"}
              name="tp_confirm_password"
              autoComplete="new-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.passwordInput}
              required
            />
            <span
              style={styles.toggle}
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </span>
          </div>

          <select
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            style={styles.input}
            required
          >
            <option value="">Select Role</option>
            <option value="1">Admin</option>
            <option value="2">Supervisor</option>
            <option value="3">Student</option>
          </select>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p style={styles.linkText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={goToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#eef2f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "400px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    marginBottom: "5px",
    color: "#1976d2",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#666",
  },
  input: {
    width: "100%",
    height: "42px",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  passwordWrapper: {
    position: "relative",
    marginBottom: "15px",
  },
  passwordInput: {
    width: "100%",
    height: "42px",
    padding: "10px",
    paddingRight: "60px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  toggle: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#1976d2",
    fontSize: "14px",
    fontWeight: "600",
    userSelect: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  linkText: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#1976d2",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Register;
