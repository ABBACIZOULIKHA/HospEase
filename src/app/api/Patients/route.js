export async function GET(request) {
const patients = [
  {
      "id": "P001",
      "name": "John Doe",
      "age": 45,
      "gender": "Male",
      "admissionDate": "2024-12-01",
      "department": "Cardiology",
      "bedNumber": "C101",
      "status": "Admitted",
      "diagnoses": ["Hypertension", "Arrhythmia"],
      "medications": ["Atenolol", "Lisinopril"],
      "allergies": ["Penicillin"],
      "emergencyContact": {
        "name": "Jane Doe",
        "relationship": "Wife",
        "phone": "+1122334455"
      }
  },
  {
      "id": "P002",
      "name": "Jane Smith",
      "age": 32,
      "gender": "Female",
      "admissionDate": "2024-12-03",
      "department": "Emergency",
      "bedNumber": "E202",
      "status": "Under Observation",
      "diagnoses": ["Fracture", "Minor Concussion"],
      "medications": ["Ibuprofen"],
      "allergies": [],
      "emergencyContact": {
        "name": "David Smith",
        "relationship": "Brother",
        "phone": "+9988776655"
      }
  },
  {
      "id": "P003",
      "name": "Alice Brown",
      "age": 54,
      "gender": "Female",
      "admissionDate": "2024-12-04",
      "department": "Orthopedics",
      "bedNumber": "O303",
      "status": "Admitted",
      "diagnoses": ["Osteoarthritis", "Back Pain"],
      "medications": ["Paracetamol", "Diclofenac"],
      "allergies": ["Aspirin"],
      "emergencyContact": {
        "name": "Robert Brown",
        "relationship": "Husband",
        "phone": "+1122334456"
      }
  },
  {
      "id": "P004",
      "name": "Samuel Green",
      "age": 67,
      "gender": "Male",
      "admissionDate": "2024-12-02",
      "department": "Neurology",
      "bedNumber": "N404",
      "status": "Discharged",
      "diagnoses": ["Stroke", "Memory Loss"],
      "medications": ["Clopidogrel", "Donepezil"],
      "allergies": ["Sulfa drugs"],
      "emergencyContact": {
        "name": "Laura Green",
        "relationship": "Daughter",
        "phone": "+1234567890"
      }
  },
  {
      "id": "P005",
      "name": "Ethan White",
      "age": 25,
      "gender": "Male",
      "admissionDate": "2024-12-05",
      "department": "General Surgery",
      "bedNumber": "G505",
      "status": "Under Observation",
      "diagnoses": ["Appendicitis"],
      "medications": ["Morphine", "Ceftriaxone"],
      "allergies": ["Lactose"],
      "emergencyContact": {
        "name": "Sophia White",
        "relationship": "Mother",
        "phone": "+1234432111"
      }
  },
  {
      "id": "P006",
      "name": "David Black",
      "age": 60,
      "gender": "Male",
      "admissionDate": "2024-12-06",
      "department": "Oncology",
      "bedNumber": "C606",
      "status": "Admitted",
      "diagnoses": ["Lung Cancer"],
      "medications": ["Cisplatin", "Paclitaxel"],
      "allergies": ["None"],
      "emergencyContact": {
        "name": "Maria Black",
        "relationship": "Wife",
        "phone": "+1122334457"
      }
  },
  {
      "id": "P007",
      "name": "Grace Lee",
      "age": 40,
      "gender": "Female",
      "admissionDate": "2024-12-01",
      "department": "Cardiology",
      "bedNumber": "C707",
      "status": "Admitted",
      "diagnoses": ["Cardiac Arrest"],
      "medications": ["Amiodarone", "Lidocaine"],
      "allergies": ["Iodine"],
      "emergencyContact": {
        "name": "James Lee",
        "relationship": "Brother",
        "phone": "+1122334458"
      }
  },
  {
      "id": "P008",
      "name": "Michael Taylor",
      "age": 39,
      "gender": "Male",
      "admissionDate": "2024-12-07",
      "department": "Urology",
      "bedNumber": "U808",
      "status": "Discharged",
      "diagnoses": ["Kidney Stones"],
      "medications": ["Tamsulosin"],
      "allergies": ["None"],
      "emergencyContact": {
        "name": "Olivia Taylor",
        "relationship": "Wife",
        "phone": "+1122334459"
      }
  }
];  
return new Response(JSON.stringify(staff), { status: 200 });
}
