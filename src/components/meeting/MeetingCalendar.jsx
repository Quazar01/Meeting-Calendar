import { useState, useEffect } from 'react';
import { getAllMeetings } from '../../services/MeetingAPI';
import MeetingForm from './MeetingForm';
import MeetingList from './MeetingList';

const MeetingCalendar = () => {
  const [meetings, setMeetings] = useState([]);
  const [editingMeeting, setEditingMeeting] = useState(null);

  const loadMeetings = async () => {
    try {
      const data = await getAllMeetings();
      setMeetings(data);
    } catch (error) {
      console.error('Error loading meetings:', error);
    }
  };

  useEffect(() => {
    loadMeetings();
  }, []);

  const handleEditMeeting = (meeting) => {
    const formattedMeeting = {
      ...meeting,
      participants: meeting.participants.join(', ')
    };
    setEditingMeeting(formattedMeeting);
  };

  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <h2>Meeting Calendar</h2>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <MeetingForm
            onMeetingAdded={loadMeetings}
            editingMeeting={editingMeeting}
            onMeetingUpdated={() => {
              loadMeetings();
              setEditingMeeting(null);
            }} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <MeetingList 
            meetings={meetings}
            onMeetingDeleted={loadMeetings}
            onEditMeeting={handleEditMeeting}
          />
        </div>
      </div>
    </>
  );
};

export default MeetingCalendar;