// app/api/Staff/route.js
export async function GET() {
  const staff = [
    {
      "id": "S001",
      "name": "Dr. Emily Carter",
      "role": "Cardiologist",
      "department": "Cardiology",
      "contact": {
        "email": "emily.carter@example.com",
        "phone": "+123456789"
      },
      "status": "Active",
      "yearsOfExperience": 15,
      "specialization": "Heart Surgery",
      "shifts": ["Morning"]
    },
    {
      "id": "S002",
      "name": "Dr. Michael Ross",
      "role": "Neurologist",
      "department": "Neurology",
      "contact": {
        "email": "michael.ross@example.com",
        "phone": "+1122334455"
      },
      "status": "Active",
      "yearsOfExperience": 12,
      "shifts": ["Morning", "Night"]
    },
    {
      "id": "S003",
      "name": "Dr. Sarah White",
      "role": "Orthopedic Surgeon",
      "department": "Orthopedics",
      "contact": {
        "email": "sarah.white@example.com",
        "phone": "+9998887777"
      },
      "status": "Inactive",
      "yearsOfExperience": 18,
      "shifts": ["Night"]
    },
    {
      "id": "S004",
      "name": "Dr. Emily Carter",
      "role": "Cardiologist",
      "department": "Cardiology",
      "contact": {
        "email": "emily.carter@example.com",
        "phone": "+123456789"
      },
      "status": "Active",
      "yearsOfExperience": 15,
      "specialization": "Heart Surgery",
      "shifts": ["Morning"]
    },
    {
      "id": "S005",
      "name": "Dr. Michael Ross",
      "role": "Neurologist",
      "department": "Neurology",
      "contact": {
        "email": "michael.ross@example.com",
        "phone": "+1122334455"
      },
      "status": "Active",
      "yearsOfExperience": 12,
      "shifts": ["Morning", "Night"]
    },
    {
      "id": "S006",
      "name": "Dr. Sarah White",
      "role": "Orthopedic Surgeon",
      "department": "Orthopedics",
      "contact": {
        "email": "sarah.white@example.com",
        "phone": "+9998887777"
      },
      "status": "Inactive",
      "yearsOfExperience": 18,
      "shifts": ["Night"]
    },
  ];

  return new Response(JSON.stringify(staff), { status: 200 });
}
