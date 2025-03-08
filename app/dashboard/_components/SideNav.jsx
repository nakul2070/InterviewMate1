"use client";

import { usePathname } from "next/navigation";
import { Triangle, SquareMousePointer, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SideNav() {
  const pathname = usePathname(); // Get current route

  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutIcon, path: "/dashboard" },
    { id: 2, name: "Interview", icon: SquareMousePointer, path: "/dashboard/interviews" },
    { id: 3, name: "Employees", icon: Triangle, path: "/dashboard/employees" },
    { id: 4, name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <div className="h-screen p-6 border-r shadow-lg bg-gray-900 text-white backdrop-blur-lg bg-opacity-70">
      {/* Logo */}
      <div className="flex justify-center items-center mb-6">
        <Image src={"/logo.svg"} width={150} height={40} alt="logo" className="hover:scale-105 transition-transform duration-300" />
      </div>

      <hr className="mb-5 border-gray-700" />

      <div className="space-y-3">
        {menuList.map((menu) => {
          const isActive = pathname === menu.path; // Check if menu is active

          return (
            <Link key={menu.id} href={menu.path} className="block">
              <div
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer text-lg font-medium transition-all duration-300 shadow-md 
                  ${
                    isActive
                      ? "bg-gradient-to-r from-gray-400 to-gray-400 text-black shadow-lg scale-105"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white hover:scale-105"
                  }
                `}
              >
                <menu.icon className="w-6 h-6" />
                {menu.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;