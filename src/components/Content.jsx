import React from "react";
import avatarIcon from "../assets/images/avatar_male.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // for X axis
  LinearScale, // for Y axis
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Content() {
    const data = {
      labels: ["1/10", "7/10", "13/10", "19/10", "25/10", "31/10"], // X-axis labels
      datasets: [
        {
          label: "Sales", // Label for the chart
          data: [12, 19, 3, 5, 2, 3], // Your data points
          fill: true,
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Similar to the image
          borderColor: "rgba(75, 192, 192, 1)", // Line color
          borderWidth: 2,
          tension: 0.3, // Curve line effect
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true, // Ensure the Y-axis starts at zero
        },
      },
    };
  return (
    <div className="flex flex-wrap lg:flex-nowrap p-4 gap-4 md:p-6 md:gap-6">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Monthly Summary */}
        <div className="bg-white flex flex-wrap lg:flex-nowrap justify-between border p-4">
          {/* Left Side Summary */}
          <div className="w-full lg:w-1/2 px-2 lg:px-4 py-2">
            <div className="flex justify-between border-b-[1px]">
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                ملخص الشهر
              </h3>
              <h3 className="text-sm font-light mb-4 text-gray-500">
                اكتوبر 2024
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Visits */}
              <div className="text-center p-2 md:p-4 rounded-lg transition-all">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-user-group"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        الزيارات
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sales */}
              <div className="text-center p-2 md:p-4 rounded-lg transition-all">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        المبيعات
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Orders */}
              <div className="text-center p-2 md:p-4 rounded-lg transition-all">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-box"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        الطلبات
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Monthly Goal */}
              <div className="text-center p-2 md:p-4 rounded-lg transition-all">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-trophy"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-1">
                        هدف الشهر
                      </p>
                      <i class="fa-regular fa-circle-question"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Chart */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* Latest Orders */}
        <div className="bg-white border rounded-lg p-4 md:p-6">
          <h3 className="text-lg font-semibold mb-4">أحدث الطلبات</h3>
          <p className="text-gray-500">لا توجد طلبات بعد</p>
        </div>
      </div>

      {/* Sidebar (Notifications) */}
      <div className="w-full md:w-1/4 bg-white border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">التنبيهات</h3>
        <div className="space-y-4 md:space-y-6 overflow-y-auto h-96">
          {/* Notification Item */}
          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
            <img
              src={avatarIcon}
              alt="Iconic Swan"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">
                زائر أضاف عقد Dancing Swan للسلة
              </p>
              <p className="text-sm text-gray-500">منذ 12 ساعة</p>
            </div>
            <div className="bg-red-500">
              <img src={image2} height="150px" width="50px" alt="" />
            </div>
          </div>

          {/* Another Notification */}
          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
            <img
              src={avatarIcon}
              alt="Jaguar Perfume"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">
                زائر أضاف عطر بيس من جاغوار للسلة
              </p>
              <p className="text-sm text-gray-500">منذ 14 ساعة</p>
            </div>
            <div className="bg-red-500">
              <img src={image1} height="150px" width="50px" alt="" />
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
            <img
              src={avatarIcon}
              alt="Jaguar Perfume"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">
                زائر أضاف عطر بيس من جاغوار للسلة
              </p>
              <p className="text-sm text-gray-500">منذ 14 ساعة</p>
            </div>
            <div className="bg-red-500">
              <img src={image3} height="150px" width="50px" alt="" />
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
            <img
              src={avatarIcon}
              alt="Jaguar Perfume"
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">
                زائر أضاف عطر بيس من جاغوار للسلة
              </p>
              <p className="text-sm text-gray-500">منذ 14 ساعة</p>
            </div>
            <div className="bg-red-500">
              <img src={image4} height="150px" width="50px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
