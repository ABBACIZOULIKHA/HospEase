export async function GET(request) {
  const inventory = [
      {
          "id": "I001",
          "name": "Surgical Masks",
          "category": "Personal Protective Equipment",
          "quantity": 500,
          "unitOfMeasure": "Boxes",
          "lastRestocked": "2024-11-30",
          "supplier": "MedEquip Supplies",
          "manufacturer": "HealthPro",
          "costPerUnit": 0.5,
          "stockValue": 500 * 0.5,  // quantity * cost per unit
          "expirationDate": "2025-06-01",
          "reorderLevel": 100,
          "location": "Room 101, Shelf A",
          "usageRate": 20,  // masks used per day
          "lastPurchasedDate": "2024-10-20",
          "expiryWarning": false
      },
      {
          "id": "I002",
          "name": "Paracetamol Tablets",
          "category": "Medicine",
          "quantity": 2000,
          "unitOfMeasure": "Bottles",
          "lastRestocked": "2024-12-01",
          "supplier": "HealthPharma",
          "manufacturer": "PharmaCo",
          "costPerUnit": 0.1,
          "stockValue": 2000 * 0.1,  // quantity * cost per unit
          "expirationDate": "2026-01-01",
          "reorderLevel": 500,
          "location": "Room 102, Shelf B",
          "usageRate": 50,  // tablets used per day
          "lastPurchasedDate": "2024-11-15",
          "expiryWarning": false
      },
      {
          "id": "I003",
          "name": "Sterile Gloves",
          "category": "Personal Protective Equipment",
          "quantity": 800,
          "unitOfMeasure": "Boxes",
          "lastRestocked": "2024-11-25",
          "supplier": "MedEquip Supplies",
          "manufacturer": "SafeHands",
          "costPerUnit": 1.2,
          "stockValue": 800 * 1.2,  // quantity * cost per unit
          "expirationDate": "2025-12-01",
          "reorderLevel": 200,
          "location": "Room 103, Shelf C",
          "usageRate": 30,  // boxes used per day
          "lastPurchasedDate": "2024-10-15",
          "expiryWarning": false
      }
  ]
  return inventory;
}
