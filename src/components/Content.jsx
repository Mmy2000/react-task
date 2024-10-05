import React from "react";
import avatarIcon from "../assets/images/avatar_male.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["1/10", "7/10", "13/10", "19/10", "25/10", "31/10"],
  datasets: [
    {
      label: "المبيعات",
      data: [10, 20, 30, 40, 50, 60],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "ملخص المبيعات لهذا الشهر",
    },
  },
};
export default function Content() {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-6 gap-6">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Monthly Summary */}
        <div className="bg-white flex justify-between border  ">
          <div className="w-1/2 px-4 py-2 ">
            <div className="flex justify-between border-b-[1px]">
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                ملخص الشهر
              </h3>
              <h3 className="text-sm font-light mb-4 text-gray-500">
                اكتوبر 2024
              </h3>
            </div>

            <div className="grid grid-cols-2  gap-6">
              {/* Visits */}
              <div className="text-center  p-4 rounded-lg  transition-all">
                <div className="flex  items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-user-group"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        الزيارات
                      </p>
                      <i class="fa-regular fa-circle-question"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center  p-4 rounded-lg  transition-all">
                <div className="flex  items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        المبيعات
                      </p>
                      <i class="fa-regular fa-circle-question"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center  p-4 rounded-lg  transition-all">
                <div className="flex  items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-box"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        الطلبات
                      </p>
                      <i class="fa-regular fa-circle-question"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center  p-4 rounded-lg  transition-all">
                <div className="flex  items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 border flex justify-center items-center">
                    <i class="fa-solid fa-trophy"></i>
                  </div>
                  <div className="flex flex-col mr-2">
                    <span className="w-3 h-[2px] bg-gray-800"></span>
                    <div className="flex items-end">
                      <p className="mt-2 text-gray-600 font-semibold ml-2">
                        هدف الشهر
                      </p>
                      <i class="fa-regular fa-circle-question"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-1/2  grid-cols-2 gap-6">
            <div className="col-span-2">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>

        {/* Latest Orders */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">أحدث الطلبات</h3>
          <p className="text-gray-500">لا توجد طلبات بعد</p>
        </div>
      </div>
      {/* Sidebar (Notifications) */}
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">التنبيهات</h3>
        <div className="space-y-6 overflow-y-auto h-96">
          {/* Notification Item */}
          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
            <img
              src={avatarIcon}
              alt="Iconic Swan"
              className="w-12 h-12 object-cover rounded-full"
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
              className="w-12 h-12 object-cover rounded-full"
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
              className="w-12 h-12 object-cover rounded-full"
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
              className="w-12 h-12 object-cover rounded-full"
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
