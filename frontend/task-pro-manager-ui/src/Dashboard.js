import AdminDashboard from "./Pages/Admin/AdminDashboard";
import SupervisorDashboard from "./Pages/Supervisor/SupervisorDashboard";
import StudentDashboard from "./Pages/Student/StudentDashboard";

function Dashboard({ user, onLogout }) {
  if (user.role_id === 1) {
    return <AdminDashboard user={user} onLogout={onLogout} />;
  }

 if (user.role_id === 2) {
    return <SupervisorDashboard user={user} onLogout={onLogout} />;
  }

  return <StudentDashboard user={user} onLogout={onLogout} />;
}

export default Dashboard;
