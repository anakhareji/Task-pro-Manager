import PublicNavbar from "../Components/PublicNavbar";
import Footer from "../Components/Footer";
import FeaturesSection from "../Components/FeaturesSection";

function Home({ goToLogin,goToRegister }) {
  return (
    <>
      {/* NAVBAR */}
      <PublicNavbar
  goToLogin={goToLogin}
  goToRegister={goToRegister}
/>


      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Institutional Task & Project Management
        </h1>
        <p style={styles.heroText}>
          A centralized platform to manage users, projects, tasks and submissions
          efficiently in academic and organizational environments.
        </p>
        <button style={styles.heroBtn} onClick={goToLogin}>
          Get Started
        </button>
      </section>

      {/* FEATURES */}
      <FeaturesSection />

      {/* HOW IT WORKS */}
      <section style={styles.stepsSection}>
        <h2 style={styles.sectionTitle}>
          How <span style={styles.highlight}>Task Pro Manager</span> Works
        </h2>

        <div style={styles.steps}>
          <div style={styles.stepCard}>
            <span style={styles.stepNo}>1</span>
            <h4>Register & Login</h4>
            <p>Create an account as Admin, Supervisor or Student.</p>
          </div>

          <div style={styles.stepCard}>
            <span style={styles.stepNo}>2</span>
            <h4>Manage Tasks & Projects</h4>
            <p>Assign, track and monitor tasks and project progress.</p>
          </div>

          <div style={styles.stepCard}>
            <span style={styles.stepNo}>3</span>
            <h4>Submit & Review</h4>
            <p>Students submit work and supervisors review submissions.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.whySection}>
        <h2 style={styles.sectionTitle}>Why Choose Task Pro Manager?</h2>
        <ul style={styles.list}>
          <li>✔ Role-based secure access</li>
          <li>✔ Centralized task monitoring</li>
          <li>✔ Clean dashboards for each role</li>
          <li>✔ Scalable & exam-ready architecture</li>
        </ul>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Home;

/* ================= STYLES ================= */

const styles = {
  hero: {
    padding: "120px 80px",
    background: "linear-gradient(120deg, #e0ecff, #f8fbff)",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "40px",
    fontWeight: "700",
    color: "#0f172a",
  },

  heroText: {
    maxWidth: "700px",
    margin: "20px auto",
    fontSize: "16px",
    color: "#475569",
  },

  heroBtn: {
    marginTop: "30px",
    padding: "14px 36px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },

  stepsSection: {
    padding: "90px 70px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "50px",
    color: "#111827",
  },

  highlight: {
    color: "#2563eb",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
  },

  stepCard: {
    backgroundColor: "#f9fafb",
    borderRadius: "14px",
    padding: "40px 30px",
    border: "1px solid #e5e7eb",
  },

  stepNo: {
    display: "inline-block",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    color: "#fff",
    lineHeight: "48px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  whySection: {
    padding: "80px 70px",
    backgroundColor: "#f8fafc",
    textAlign: "center",
  },

  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
    color: "#374151",
    lineHeight: "2",
  },
};
