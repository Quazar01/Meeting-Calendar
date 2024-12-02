// src/components/shared/Dashboard.jsx
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper bg-dark text-white p-3">
      <div className="dashboard-header mb-3">
        <h5 className="d-flex align-items-center">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </h5>
      </div>
      
      <nav className="dashboard-nav">
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action bg-light text-dark border-dark">
            <i className="bi bi-calendar me-2"></i>
            Schedule Meeting
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light text-dark border-dark active">
            <i className="bi bi-calendar-check me-2"></i>
            Manage Meetings
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light text-dark border-dark">
            <i className="bi bi-people me-2"></i>
            Users & Permissions
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light text-dark border-dark">
            <i className="bi bi-bell me-2"></i>
            Notifications
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light text-dark border-dark">
            <i className="bi bi-graph-up me-2"></i>
            Analytics
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-light text-dark border-dark">
            <i className="bi bi-gear me-2"></i>
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;