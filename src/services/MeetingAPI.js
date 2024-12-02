// Initial meetings data
let meetings = [
  {
      id: 1,
      title: "Project Kickoff",
      date: "2024-05-15",
      time: "10:00",
      level: "Team",
      participants: ["john@example.com", "sarah@example.com"],
      description: "Initial project kickoff meeting"
  },
  {
      id: 2,
      title: "Quarterly Review",
      date: "2024-06-01",
      time: "14:00",
      level: "Department",
      participants: ["mike@example.com", "anna@example.com"],
      description: "Q2 2024 performance review"
  }
];

// Get all meetings
export const getAllMeetings = () => {
  return [...meetings]; // Return a copy to prevent direct state mutation
};