import React from "react";
import AddInterview from "./_components/AddInterview";

const interviewData = [
  { project: "AI Chatbot", company: "Google", candidate: "John Doe", helper: "Alice", techStack: "React, Node.js", date: "2025-03-10", rounds: 3, time: "10:00 AM" },
  { project: "E-Commerce App", company: "Amazon", candidate: "Emma Smith", helper: "Bob", techStack: "Next.js, MongoDB", date: "2025-03-12", rounds: 2, time: "2:00 PM" },
  { project: "Health Tracker", company: "Apple", candidate: "Michael Lee", helper: "Charlie", techStack: "Flutter, Firebase", date: "2025-03-14", rounds: 4, time: "3:30 PM" },
  { project: "CRM Dashboard", company: "Salesforce", candidate: "Sophia Brown", helper: "David", techStack: "Vue.js, PostgreSQL", date: "2025-03-15", rounds: 3, time: "11:00 AM" },
  { project: "EdTech Platform", company: "Coursera", candidate: "James Wilson", helper: "Eve", techStack: "Django, React", date: "2025-03-18", rounds: 3, time: "1:30 PM" },
  { project: "FinTech App", company: "Stripe", candidate: "Olivia Taylor", helper: "Frank", techStack: "Spring Boot, Angular", date: "2025-03-19", rounds: 2, time: "4:00 PM" },
  { project: "Social Media App", company: "Meta", candidate: "Daniel Martinez", helper: "Grace", techStack: "React Native, GraphQL", date: "2025-03-20", rounds: 3, time: "9:30 AM" },
  { project: "Cloud Storage", company: "Dropbox", candidate: "Isabella Thomas", helper: "Henry", techStack: "AWS, Node.js", date: "2025-03-21", rounds: 2, time: "12:00 PM" },
  { project: "AI Assistant", company: "Microsoft", candidate: "Liam Harris", helper: "Ivy", techStack: "Python, TensorFlow", date: "2025-03-22", rounds: 4, time: "10:30 AM" },
  { project: "Online Learning", company: "Udemy", candidate: "Mason Clark", helper: "Jack", techStack: "Laravel, Vue.js", date: "2025-03-23", rounds: 3, time: "2:30 PM" },
];

function Interviews() {
  return (
    <div className="p-7">
      <h1 className="font-bold text-gray-800 text-2xl flex justify-between items-center mb-5 bg-gradient-to-r from-gray-900 to-gray-900 text-white p-4 rounded-lg shadow-lg">
        Interview Schedule <AddInterview />
      </h1>
      <div className="overflow-x-auto bg-gray p-5 rounded-xl shadow-md backdrop-blur-lg bg-opacity-75">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-gray-100 uppercase text-sm leading-normal">
              <th className="p-3 text-left">Project Name</th>
              <th className="p-3 text-left">Company Name</th>
              <th className="p-3 text-left">Candidate Name</th>
              <th className="p-3 text-left">Helper Name</th>
              <th className="p-3 text-left">Tech Stack</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Rounds</th>
              <th className="p-3 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {interviewData.map((interview, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200 transform transition-all duration-300 hover:scale-[1.02]`}
              >
                <td className="p-3 font-medium text-gray-700">{interview.project}</td>
                <td className="p-3 text-gray-600">{interview.company}</td>
                <td className="p-3 text-gray-700 font-semibold">{interview.candidate}</td>
                <td className="p-3 text-gray-600">{interview.helper}</td>
                <td className="p-3 text-gray-700 font-medium">{interview.techStack}</td>
                <td className="p-3 text-gray-600">{interview.date}</td>
                <td className="p-3 text-gray-700 font-semibold">{interview.rounds}</td>
                <td className="p-3 text-gray-600">{interview.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Interviews;
