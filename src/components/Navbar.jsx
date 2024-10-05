import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side (Search bar) */}
            <div className="flex items-center">
              <div className="mr-10">
                <form className="flex items-center">
                  <input
                    type="text"
                    placeholder="بحث برقم الطلب، العميل،..."
                    className="px-4 py-2 border border-gray-200 rounded-r-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-teal-300 hover:bg-teal-500 transition-colors text-white px-4 py-2 border-y-[1px] border-teal-300 rounded-l-md"
                  >
                    <i className="fa-solid fa-magnifying-glass text-black"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Right side (Gift, Moon & Profile Dropdown) */}
            <div className="md:hidden cursor-pointer">
              <i class="fa-solid fa-bars text-xl"></i>
            </div>
            <div className="hidden md:flex items-center gap-2 ml-16">
              <div className="w-10 h-10 rounded-full border flex justify-center items-center border-teal-300">
                <i className="fa-solid fa-gift"></i>
              </div>
              <div className="w-10 h-10 rounded-full border flex justify-center items-center border-teal-300">
                <i className="fa-regular fa-moon text-xl"></i>
              </div>

              {/* Profile Dropdown */}
              <div className="relative mr-2" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-700 focus:outline-none"
                >
                  <i className="fa-solid fa-user-circle text-2xl"></i>
                  <span className="mr-2">متجر الهدايا</span>
                  <i className="fa-solid fa-angle-down mr-2 text-xs mt-2"></i>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-user"></i>
                      <span className="slide-style mr-2">الملف الشخصي</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-bell"></i>
                      <span className="slide-style mr-2">التنبيهات</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-sync-alt"></i>
                      <span className="slide-style mr-2">تحديثات المنصة</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-pen"></i>
                      <span className="slide-style mr-2">الاقتراحات</span>
                    </a>
                    <div className="border-t my-2"></div>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100"
                    >
                      <i className="fa-solid fa-sign-out-alt"></i>
                      <span className="slide-style mr-2">تسجيل الخروج</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
