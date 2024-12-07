export async function GET(request) {
    const billing  = [
        {
            "id": "B001",
            "patientId": "P001",
            "totalAmount": 1500,
            "paidAmount": 1000,
            "dueAmount": 500,
            "billingDate": "2024-12-02",
            "status": "Partially Paid",
            "servicesBilled": [
              {
                "name": "ECG Test",
                "cost": 300
              },
              {
                "name": "Room Charges (2 Days)",
                "cost": 1200
              }
            ]
          },
          {
            "id": "B002",
            "patientId": "P002",
            "totalAmount": 800,
            "paidAmount": 800,
            "dueAmount": 0,
            "billingDate": "2024-12-03",
            "status": "Paid",
            "servicesBilled": [
              {
                "name": "X-Ray",
                "cost": 200
              },
              {
                "name": "Consultation Fee",
                "cost": 600
              }
            ]
          }
    ]}