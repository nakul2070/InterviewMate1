"use client";

import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function Layout({ children }) {
  return (
    <div className="flex  bg-gray-900">
      {/* Sidebar - Fixed Navigation */}
      <div className="fixed w-64 h-screen bg-gray-900 text-white">
        <SideNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 min-h-screen bg-gray-100 text-black">
        <Header />
        <div className="p-6">
          
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
