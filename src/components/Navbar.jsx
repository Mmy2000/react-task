import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  // State for the search dropdown
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("الطلبات"); // Default option for search
  const searchDropdownRef = useRef(null);

  // State for the profile dropdown
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Toggle the search dropdown
  const toggleSearchDropdown = () => {
    setSearchDropdownOpen(!searchDropdownOpen);
  };

  // Toggle the profile dropdown
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  // Handle search option selection
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSearchDropdownOpen(false); // Close the dropdown after selection
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setSearchDropdownOpen(false);
      }

      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchDropdownRef, profileDropdownRef]);

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side (Search bar) */}
            <div className="flex items-center">
              {/* Search Form */}
              <form className="flex items-center">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="بحث برقم الطلب، اسم العميل، ..."
                  className="px-4 py-2 w-40 md:w-64 border border-gray-200 rounded-r-md focus:outline-none"
                />

                {/* Search Dropdown (Select) */}
                <div className="relative" ref={searchDropdownRef}>
                  <button
                    type="button"
                    onClick={toggleSearchDropdown}
                    className="flex items-center text-gray-500 px-4 py-2 border"
                  >
                    <span className="ml-2">{selectedOption}</span>
                    <i className="fa-solid fa-caret-down mr-2  text-gray-500"></i>
                  </button>

                  {searchDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-2 z-50">
                      <button
                        type="button"
                        onClick={() => handleSelectOption("الطلبات")}
                        className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        الطلبات
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectOption("المنتجات")}
                        className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        المنتجات
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectOption("العملاء")}
                        className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        العملاء
                      </button>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-teal-300 hover:bg-teal-500 border rounded-l-md transition-colors text-white px-4 py-2 border-teal-300"
                >
                  <i className="fa-solid fa-magnifying-glass text-black"></i>
                </button>
              </form>
            </div>

            {/* Right side (Gift, Moon & Profile Dropdown) */}
            <div className="md:hidden cursor-pointer">
              <i className="fa-solid fa-bars text-xl"></i>
            </div>
            <div className="hidden md:flex items-center gap-2 ml-16">
              <div className="w-10 h-10 rounded-full border flex justify-center items-center border-teal-300">
                <i className="fa-solid fa-gift"></i>
              </div>
              <div className="w-10 h-10 rounded-full border flex justify-center items-center border-teal-300">
                <i className="fa-regular fa-moon text-xl"></i>
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center text-gray-700 focus:outline-none"
                >
                  <i className="fa-solid fa-user-circle text-2xl"></i>
                  <span className="mr-2">متجر الهدايا</span>
                  <i className="fa-solid fa-angle-down mr-2 text-xs mt-2"></i>
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-user"></i>
                      <span className="mr-2 slide-style">الملف الشخصي</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-bell"></i>
                      <span className="mr-2 slide-style">التنبيهات</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-sync-alt"></i>
                      <span className="mr-2 slide-style">تحديثات المنصة</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <i className="fa-solid slide-style fa-pen"></i>
                      <span className="mr-2 slide-style">الاقتراحات</span>
                    </a>
                    <div className="border-t my-2"></div>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100"
                    >
                      <i className="fa-solid slide-style fa-sign-out-alt"></i>
                      <span className="mr-2 slide-style">تسجيل الخروج</span>
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
