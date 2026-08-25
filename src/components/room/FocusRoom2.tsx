import React from "react";
import Seat from "@/components/seat/Seat";

const FocusRoom2: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-300 p-6 w-full mx-auto h-full">
      {/* 3열 구조 레이아웃 */}
      <div className="flex justify-center items-stretch h-full gap-12 w-full">
        {/* 1. 좌측 열 */}
        <div className="flex flex-col justify-between h-full">
          {[34, 33, 32, 31, 30, 29, 28, 27].map((id) => (
            <Seat
              key={id}
              id={id}
              status={id % 2 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>

        {/* 2. 중앙 열 */}
        <div className="flex flex-col justify-between h-full py-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <div className="flex items-center justify-center border border-base-300 font-bold bg-base-200 text-base-content/30 cursor-not-allowed w-9 h-9 text-xs sm:w-10 sm:h-10 sm:text-sm lg:w-12 lg:h-12 lg:text-base xl:w-14 xl:h-14 xl:text-lg">
                X
              </div>
              <Seat id={35} status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={37} status="empty" />
              <Seat id={36} status="occupied" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={38} status="empty" />
              <Seat id={39} status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={41} status="occupied" />
              <Seat id={40} status="empty" />
            </div>
          </div>

          <div className="flex gap-2 lg:gap-4 justify-center">
            <Seat id={42} status="empty" />
            <Seat id={43} status="occupied" />
          </div>
        </div>

        {/* 3. 우측 열 */}
        <div className="flex flex-col justify-between h-full">
          {[51, 50, 49, 48, 47, 46, 45, 44].map((id) => (
            <Seat
              key={id}
              id={id}
              status={id % 3 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusRoom2;
