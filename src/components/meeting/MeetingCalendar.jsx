import React, { useEffect, useState } from 'react'
import { getAllMeetings } from '../../services/MeetingAPI';
import MeetingList from './MeetingList';

const MeetingCalendar = () => {

  const [meetings, setMeetings] = useState([]);

  const loadMeetings = () => {
    // Load meetings from API
    const AllMeetings = getAllMeetings();
    setMeetings(AllMeetings);
  }

  // Render the meetings list whenever the component mounts / the page loads.
  useEffect(() => {
    loadMeetings();
  },[]);

  return (
    <div className='meeting-calendar'>
      <div className='mb-4'>
        < MeetingList meetings={meetings} />
      </div>
    </div>
  )
}

export default MeetingCalendar