// src/components/meeting/MeetingList.jsx
import React, { useState, useRef, useEffect } from 'react';
import { deleteMeeting } from '../../services/MeetingAPI';

const MeetingList = ({ meetings, onMeetingDeleted, onEditMeeting }) => {
    const [confirmDelete, setConfirmDelete] = useState(null);
    const confirmRowRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (confirmRowRef.current && !confirmRowRef.current.contains(event.target)) {
                setConfirmDelete(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDelete = async (id) => {
        try {
            const result = await deleteMeeting(id);
            if (result.success) {
                setConfirmDelete(null);
                onMeetingDeleted();
            } else {
                alert('Failed to delete meeting: ' + result.error);
            }
        } catch (error) {
            alert('Error deleting meeting: ' + error.message);
        }
    };

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
                                <React.Fragment key={meeting.id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{meeting.title}</td>
                                        <td>{meeting.meetingDate}</td>
                                        <td>{`${meeting.startTime} - ${meeting.endTime}`}</td>
                                        <td>
                                            <span className={`badge bg-${
                                                meeting.level === 'Team' ? 'success' :
                                                meeting.level === 'Department' ? 'warning' : 'danger'
                                            }`}>
                                                {meeting.level}
                                            </span>
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-warning btn-sm me-2"
                                                title="Edit Meeting"
                                                onClick={() => onEditMeeting(meeting)}
                                            >
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => setConfirmDelete(meeting.id)}
                                                title="Delete Meeting"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    {confirmDelete === meeting.id && (
                                        <tr ref={confirmRowRef}>
                                            <td colSpan="6">
                                                <div className="alert alert-warning d-flex align-items-center justify-content-between m-0">
                                                    <span>Are you sure you want to delete this meeting?</span>
                                                    <div>
                                                        <button 
                                                            className="btn btn-danger btn-sm me-2"
                                                            onClick={() => handleDelete(meeting.id)}
                                                        >
                                                            Yes, Delete
                                                        </button>
                                                        <button 
                                                            className="btn btn-secondary btn-sm"
                                                            onClick={() => setConfirmDelete(null)}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                            {meetings.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No meetings scheduled
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MeetingList;