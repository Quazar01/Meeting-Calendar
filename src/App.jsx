import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Dashboard from './components/shared/Dashboard';
import MeetingCalendar from './components/meeting/MeetingCalendar';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <div className="container-fluid">
          <div className="row">
            {/* Dashboard */}
            <div className="col-md-3 col-lg-2 py-3">
              <Dashboard />
            </div>
            {/* Content */}
            <div className="col-md-9 col-lg-10 py-3">
              <MeetingCalendar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App