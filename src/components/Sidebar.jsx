import React from "react";
import Logo from "../assets/images/logo-light-wide.svg";
import MainImage from "../assets/images/mainImage.png";
import crown from "../assets/images/crown.png"
import appstore from "../assets/images/appstore.png"
import googleplay from "../assets/images/googleplay.png"

export default function Sidebar() {
  return (
    <>
      <div className="flex w-64 sidebar-style overflow-y-scroll  scrollbar-thumb-teal-300 scrollbar-track-gray-300 h-[100vh]">
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
                <span className="text-sm font-bold pb-1">سبشيل</span>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center mt-1">
            <h6 className="font-semibold">متجر الهدايا</h6>
            <div className="store-link">
              <a className="mr-2 ml-1 text-sm mb-1" href="">
                زياره المتجر
              </a>
              <i class="fa-solid fa-angle-left text-xs ml-2 "></i>
              <button className="icon-style">
                <i class="fa-solid fa-share-nodes text-black"></i>
              </button>
            </div>
          </div>

          {/* Sidebar menu */}
          <nav className="flex flex-col mt-4">
            <a
              href="#"
              className="flex items-center active font-semibold link-style"
            >
              <i class="fa-solid fa-house"></i>

              <span className="mr-3">الرئيسيه</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-brands fa-product-hunt"></i>

              <span className="mr-3">المنتجات</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-box"></i>

              <span className="mr-3">الطلبات</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-users"></i>

              <span className="mr-3">العملاء</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-chart-pie"></i>

              <span className="mr-3">التقارير</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-regular fa-message"></i>

              <span className="mr-3">الاسئله والتقييمات</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-file-lines"></i>

              <span className="mr-3">الصفحات التعريفيه</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-bullhorn"></i>

              <span className="mr-3">الادوات التسويقيه</span>
            </a>
            <a
              href="#"
              className="flex items-center mt-4 mb-2 headline font-semibold"
            >
              <span className="mr-3">قنوات البيع</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-location-dot"></i>

              <span className="mr-3">محلي</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-location-dot"></i>

              <span className="mr-3">سله بوينت</span>
            </a>
            <a
              href="#"
              className="flex items-center mt-4 mb-2 headline font-semibold"
            >
              <span className="mr-3">ادوات مسانده</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-file-lines"></i>

              <span className="mr-3">خدمات التاجر</span>
            </a>
            <a href="#" className="flex items-center font-semibold link-style">
              <i class="fa-solid fa-user-group"></i>

              <span className="mr-3">المؤثرين</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between font-semibold link-style"
            >
              <div>
                <i class="fa-solid fa-bullhorn"></i>

                <span className="mr-3">اعلانات سويبلي</span>
              </div>

              <span className="badge-2 px-3 py-1 text-xs rounded-xl pb-2">
                جديد
              </span>
            </a>
            <a
              href="#"
              className="flex items-center mt-4 mb-2 headline font-semibold"
            >
              <span className="mr-3">تطبيق التاجر</span>
            </a>
            <div className="grid grid-cols-2 gap-2 mb-2 mx-2">
              <img src={appstore} className="w-full" alt="App Store" />
              <img src={googleplay} className="w-full" alt="Google Play" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
