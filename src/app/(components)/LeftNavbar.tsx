"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";

interface LeftNavbarProps {
  isOpen: boolean;
}

export default function LeftNavbar({ isOpen }: LeftNavbarProps) {
  const [active, setActive] = useState<string>("dashboard");

  const handleClick = (item: string) => {
    setActive(item);
  };

  return (
    <div
      className={`fixed top-16 h-[calc(100%-4rem)] w-1/5 bg-gray-200 p-6 shadow-lg transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav>
        <ul className="space-y-6">
          {/* Dashboard */}
          <li>
            <Link
              href="/"
              onClick={() => handleClick("dashboard")}
              className={`flex items-center space-x-4 py-3 pl-6 border-l-4 transition-all duration-300 
                ${active === "dashboard" ? "text-Bleu border-Bleu" : "hover:text-Bleu hover:border-Bleu"}`}
            >
              <FaClipboardList className="text-xl" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>

          {/* Human Resources */}
          <li>
            <div className="group">
              <button
                onClick={() => handleClick("human-resources")}
                className={`flex items-center space-x-4 w-full text-left py-3 pl-6 border-l-4 transition-all duration-300 
                  ${active === "human-resources" ? "text-Bleu border-Bleu" : "hover:text-Bleu hover:border-Bleu"}`}
              >
                <FaUsersGear className="text-xl" />
                <span className="font-medium">Human Resources</span>
              </button>
              <ul className="space-y-2 pl-8 mt-2">
                <li>
                  <Link
                    href="/Doctors"
                    onClick={() => handleClick("doctors")}
                    className={`hover:text-blue-300 ${active === "doctors" ? "text-Bleu" : ""}`}
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Patients"
                    onClick={() => handleClick("patients")}
                    className={`hover:text-blue-300 ${active === "patients" ? "text-Bleu" : ""}`}
                  >
                    Patients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Staff"
                    onClick={() => handleClick("staff")}
                    className={`hover:text-blue-300 ${active === "staff" ? "text-Bleu" : ""}`}
                  >
                    Staff
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Inventory */}
          <li>
            <Link
              href="/Inventory"
              onClick={() => handleClick("inventory")}
              className={`flex items-center space-x-4 py-3 pl-6 border-l-4 transition-all duration-300 
                ${active === "inventory" ? "text-Bleu border-Bleu" : "hover:text-Bleu hover:border-Bleu"}`}
            >
              <FaClipboardList className="text-xl" />
              <span className="font-medium">Inventory</span>
            </Link>
          </li>

          {/* Appointments */}
          <li>
            <Link
              href="/Departments"
              onClick={() => handleClick("Departments")}
              className={`flex items-center space-x-4 py-3 pl-6 border-l-4 transition-all duration-300 
                ${active === "Departments" ? "text-Bleu border-Bleu" : "hover:text-Bleu hover:border-Bleu"}`}
            >
              <FaCalendarAlt className="text-xl" />
              <span className="font-medium">Departments</span>
            </Link>
          </li>

          
          {/* Account */}
          <li>   
            <Link
              href="/Account"
              onClick={() => handleClick("Account")}
              className={`flex items-center space-x-4 py-3 pl-6 border-l-4 transition-all duration-300 
                ${active === "Account" ? "text-Bleu border-Bleu" : "hover:text-Bleu hover:border-Bleu"}`}
            >
              <MdManageAccounts className="text-xl" />
              <span className="font-medium">Account</span>
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}
