const BASE_URL = 'http://localhost:8080/api';

// Meeting endpoints
const MEETINGS_URL = `${BASE_URL}/meetings`;
const FORM_LABELS_URL = `${BASE_URL}/form-labels/meetings`;

export const getAllMeetings = async () => {
    try {
        const response = await fetch(MEETINGS_URL);
        if (!response.ok) throw new Error('Failed to fetch meetings');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getFormLabels = async () => {
    try {
        const response = await fetch(FORM_LABELS_URL);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch form labels');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching form labels:', error);
        throw error;
    }
};

export const addMeeting = async (meetingForm) => {
    try {
        const response = await fetch(MEETINGS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(meetingForm)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create meeting');
        }
        
        return { success: true, meeting: await response.json() };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};

export const deleteMeeting = async (id) => {
    try {
        const response = await fetch(`${MEETINGS_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete meeting');
        return { success: true };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};

export const updateMeeting = async (id, meetingForm) => {
    try {
        const response = await fetch(`${MEETINGS_URL}/${id}`, {
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