import React from "react";
import Seat from "@/components/seat/Seat";

const FocusRoom2: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-md border-2 p-6 w-full mx-auto h-full">
      {/* 3열 구조 레이아웃 */}
      <div className="flex justify-center items-stretch h-full gap-8 md:gap-2 2xl:gap-24 w-full">
        {/* 1. 좌측 열 */}
        <div className="flex flex-col justify-between h-full gap-2">
          {[34, 33, 32, 31, 30, 29, 28, 27].map((id) => (
            <Seat
              key={id}
              id={id}
              layout="left"
              status={id % 2 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>

        {/* 2. 중앙 열 */}
        <div className="flex flex-col justify-between h-full py-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <div className="flex items-center justify-center bg-gray-300 font-bold cursor-not-allowed w-17 h-13 md:h-15 md:w-21 2xl:w-25 2xl:h-17 text-lg 2xl:text-xl border-2">
                X
              </div>
              <Seat id={35} layout="top" status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={37} layout="bottom" status="empty" />
              <Seat id={36} layout="bottom" status="occupied" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={38} layout="top" status="empty" />
              <Seat id={39} layout="top" status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={41} layout="bottom" status="occupied" />
              <Seat id={40} layout="bottom" status="empty" />
            </div>
          </div>

          <div className="flex gap-2 lg:gap-4 justify-center">
            <Seat id={42} layout="top" status="empty" />
            <Seat id={43} layout="top" status="occupied" />
          </div>
        </div>

        {/* 3. 우측 열 */}
        <div className="flex flex-col justify-between h-full gap-2">
          {[51, 50, 49, 48, 47, 46, 45, 44].map((id) => (
            <Seat
              key={id}
              id={id}
              layout="right"
              status={id % 3 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusRoom2;
