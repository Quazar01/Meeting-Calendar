import React from "react";

const MeetingList = ({ meetings }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Scheduled Meetings</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Level</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {meetings.map((meeting, index) => (
                <tr key={meeting.id}>
                  <td>{meeting.id}</td>
                  <td>{meeting.title}</td>
                  <td>{meeting.date}</td>
                  <td>{meeting.time}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        meeting.level === "Team"
                          ? "success"
                          : meeting.level === "Department"
                          ? "warning"
                          : "danger"
                      }`}
                    >
                      {meeting.level}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      title="Edit Meeting"
                      onClick={() => {}}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {}}
                      title="Delete Meeting"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MeetingList;
