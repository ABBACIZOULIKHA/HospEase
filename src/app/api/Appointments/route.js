export async function GET(request) {
    const appointments = [
    
        {
            "id": "A001",
            "patientId": "P001",
            "doctor": "Dr. Emily Carter",
            "date": "2024-12-05",
            "time": "10:30 AM",
            "status": "Confirmed",
            "appointmentType": "Follow-Up",
            "notes": "Discuss recent ECG results",
            "duration": "30 minutes"
          },
          {
            "id": "A002",
            "patientId": "P002",
            "doctor": "Dr. Mark Lewis",
            "date": "2024-12-06",
            "time": "02:00 PM",
            "status": "Pending",
            "appointmentType": "Consultation",
            "notes": "Evaluate post-trauma recovery",
            "duration": "45 minutes"
          }
    ]}