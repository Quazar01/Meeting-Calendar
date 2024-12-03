// src/services/MeetingAPI.js
const BASE_URL = 'http://localhost:8080/api/meetings';

// Get all meetings
export const getAllMeetings = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch meetings');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Add new meeting
export const addMeeting = async (meetingForm) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(meetingForm)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            
            if (response.status === 400) {
                const fieldErrors = {};
                if (errorData.errors) {
                    errorData.errors.forEach(error => {
                        const fieldName = error.field;
                        const defaultMessage = error.defaultMessage;
                        fieldErrors[fieldName] = defaultMessage;
                    });
                }
                return { success: false, fieldErrors };
            }
            
            throw new Error(errorData.message || 'Failed to create meeting');
        }
        
        return { success: true, meeting: await response.json() };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};

// Delete meeting
export const deleteMeeting = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete meeting');
        return { success: true };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};

// Update meeting
export const updateMeeting = async (id, meetingForm) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(meetingForm)
        });
        
        if (!response.ok) throw new Error('Failed to update meeting');
        return { success: true, meeting: await response.json() };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};