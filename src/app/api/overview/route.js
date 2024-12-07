// app/api/overview/route.js

export async function GET(request) {
  const overview = [
    {
      "totalPatientsToday": 150,
      "totalAdmissionsToday": 12,
      "patientsDischargedToday": 8,
      "totalRevenueToday": 5000,
      "totalExpenditureToday": 2000,
      "bedsAvailable": 35,
      "totalActiveStaff": 85,
      "doctorsOnShift": 30,
      "nursesOnShift": 40,
      "supportStaffOnShift": 15,
      "departments": 12,
      "totalSurgeriesScheduled": 5,
      "emergencyCasesToday": 20,
      "patientsInCriticalCare": 5,
      "averagePatientStay": 3.2,  // En jours
      "patientSatisfactionScore": 92,  // Pourcentage
      "hospitalOccupancyRate": 78,  // En pourcentage (lit occupé / total lits)
      "surgicalSuccessRate": 98,  // Pourcentage de succès des chirurgies
      "newAdmissions": {
        "cardiology": 3,
        "emergency": 5,
        "neurology": 2,
        "pediatrics": 1,
        "orthopedics": 1
      },
      "revenueBreakdown": {
        "roomCharges": 3000,
        "consultationFees": 1000,
        "diagnosticTests": 500,
        "medications": 500
      },
      "expenditureBreakdown": {
        "salaries": 1200,
        "medicalSupplies": 400,
        "equipmentMaintenance": 200,
        "utilities": 300,
        "otherExpenses": 100
      },
      "averageWaitingTime": {
        "emergency": 30, // minutes
        "consultation": 45, // minutes
        "surgery": 60 // minutes
      },
      "patientDemographics": {
        "ageGroups": {
          "0-18": 20,
          "19-40": 50,
          "41-60": 40,
          "61+": 40
        },
        "gender": {
          "male": 70,
          "female": 80
        },
        "insurance": {
          "insured": 120,
          "uninsured": 30
        }
      },
      "keyPerformanceIndicators": {
        "patientTurnoverRate": 15,  // Par jour
        "readmissionRate": 5, // En pourcentage
        "deathRate": 0.5, // En pourcentage
        "patientReferralRate": 8, // En pourcentage (patients référés à d'autres hôpitaux)
        "surgeryTurnaroundTime": 120 // Temps moyen de chirurgie (en minutes)
      }
    }
  ];

  return new Response(JSON.stringify(overview[0]), {
    headers: { "Content-Type": "application/json" },
  });
}
