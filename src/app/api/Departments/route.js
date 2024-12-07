export async function GET(request) {
    const departments = [
        {
            "id": "D001",
            "name": "Cardiology",
            "head": "Dr. Emily Carter",
            "staffCount": 25,
            "patientsToday": 30,
            "bedsOccupied": 15,
            "equipmentAvailable": [
              "ECG Machine",
              "Heart Monitors",
              "Defibrillator"
            ],
            "operatingRooms": 2
          },
          {
            "id": "D002",
            "name": "Emergency",
            "head": "Dr. Mark Lewis",
            "staffCount": 40,
            "patientsToday": 60,
            "bedsOccupied": 20,
            "equipmentAvailable": [
              "Ventilators",
              "Trauma Kits",
              "Portable X-Ray"
            ],
            "operatingRooms": 3
          }
    ]}