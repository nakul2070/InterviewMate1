"use client";
import React, { useState } from "react";
import AddEmployee from "./_component/AddEmployee";
import { Moon, Sun } from "lucide-react";

const employees = [
  { name: "Amit Sharma", email: "amit.sharma@example.com", contact: "9876543210", techStack: "React, Node.js" },
  { name: "Priya Singh", email: "priya.singh@example.com", contact: "8765432109", techStack: "Python, Django" },
  { name: "Rahul Verma", email: "rahul.verma@example.com", contact: "7654321098", techStack: "Java, Spring Boot" },
  { name: "Sakshi Mehta", email: "sakshi.mehta@example.com", contact: "6543210987", techStack: "Angular, Firebase" },
];

const Employee = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`p-7 min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-extrabold text-3xl tracking-wide">Employees</h1>
        <div className="flex items-center gap-3">
          <AddEmployee />
          <button
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md hover:scale-110"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="w-full text-left border-collapse rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-gray-900 to-gray-600 text-white">
              <th className="p-4 rounded-tl-lg">Employee Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Contact No.</th>
              <th className="p-4 rounded-tr-lg">Tech Stack</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 hover:bg-opacity-80 ${
                  index % 2 === 0 ? "bg-gray-0" : "bg-gray-200"
                }`}
              >
                <td className="p-4">{employee.name}</td>
                <td className="p-4">{employee.email}</td>
                <td className="p-4">{employee.contact}</td>
                <td className="p-4">{employee.techStack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
