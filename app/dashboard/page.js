"use client";
import React, { useState } from "react";
import MonthSelection from "../_components/MonthSelection";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Moon, Sun } from "lucide-react";

// Chart Data
const barData = [
  { name: "Onboarding", value: 79.9 },
  { name: "Pending", value: 20.1 },
];

const pieData = [
  { name: "Successful", value: 70 },
  { name: "Rejected", value: 30 },
];

const COLORS = ["#6366F1", "#EF4444"]; // More vibrant colors
const BAR_COLORS = ["#4F46E5", "#FBBF24"];

function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`p-6 min-h-screen flex flex-col items-center font-['Poppins'] transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between p-5 rounded-xl shadow-lg w-full max-w-6xl transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 hover:shadow-xl"
        }`}
      >
        <h2 className="text-3xl font-extrabold tracking-wide">Dashboard</h2>
        <div className="flex items-center gap-4">
          <label className="text-lg font-semibold">Select Month:</label>
          <MonthSelection selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
          {/* Dark Mode Toggle */}
          <button
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md hover:scale-110"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-6xl">
        {/* Bar Chart - Interview Performance */}
        <div
          className={`p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold mb-3 tracking-wide">Interview Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ddd"} />
              <XAxis dataKey="name" tick={{ fill: darkMode ? "#ddd" : "#333", fontWeight: "bold" }} />
              <YAxis tick={{ fill: darkMode ? "#ddd" : "#333", fontWeight: "bold" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" label={{ position: "top", fill: darkMode ? "#ddd" : "#333", fontSize: 14 }}>
                {barData.map((entry, index) => (
                  <Cell key={`bar-${index}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Result Rate */}
        <div
          className={`p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3 className="text-xl font-semibold mb-3 tracking-wide">Result Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`w-full max-w-6xl mt-20 p-6 rounded-xl shadow-lg text-center transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h4 className="text-lg font-semibold">Brandsmashers</h4>
        <p className="text-sm mt-1">
          Innovating across e-commerce, healthcare, agriculture, and education with cutting-edge technology.
        </p>
        <p className="text-xs mt-2">
          Contact: <a href="tel:7879687600" className="underline">7879687600</a> | 
          <a href="https://www.brandsmashers.com" className="underline ml-1">www.brandsmashers.com</a>
        </p>
        <p className="text-xs mt-2">© 2025 Brandsmashers. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
