import React from "react";
import Logo from "../assets/images/logo-light-wide.svg";
import MainImage from "../assets/images/mainImage.png";
import crown from "../assets/images/crown.png"

export default function Sidebar() {
  return (
    <>
      <div className="flex sidebar-style h-screen">
        {/* Sidebar */}
        <div className="w-64  text-white flex flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-24 mr-4 w-24 rounded-full"
            />
          </div>
          <div className="flex h-16 items-center justify-center mt-4 relative">
            <div
              className="w-[65px] h-[65px] object-cover bg-cover bg-center image-style rounded-full"
              style={{ backgroundImage: `url(${MainImage})` }}
            >
              {/* Badge positioned at the top-right */}
              <div className="absolute badge w-20 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-lg">
                {/* SVG Icon */}
                <img src={crown} className="w-4 h-4 ml-1" alt="" />
                <span className="text-sm pb-1">سبشيل</span>
              </div>
            </div>
          </div>

          {/* Sidebar menu */}
          <nav className="flex flex-col mt-4">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-teal-600"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Icon SVG code */}
              </svg>
              <span className="ml-2">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-teal-600"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Icon SVG code */}
              </svg>
              <span className="ml-2">Products</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-teal-600"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Icon SVG code */}
              </svg>
              <span className="ml-2">Orders</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-teal-600"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Icon SVG code */}
              </svg>
              <span className="ml-2">Customers</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm hover:bg-teal-600"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Icon SVG code */}
              </svg>
              <span className="ml-2">Reports</span>
            </a>
          </nav>
          {/* Footer */}
          <div className="mt-auto flex items-center justify-center py-4">
            <a href="#" className="text-sm hover:underline">
              Help
            </a>
          </div>
        </div>
        {/* Main content */}
        <div className="flex-1 p-10 text-gray-900 bg-gray-100">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          {/* Add your main page content here */}
        </div>
      </div>
    </>
  );
}
