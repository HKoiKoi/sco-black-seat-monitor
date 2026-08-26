import React from "react";
import Seat from "@/components/seat/Seat";

const FocusRoom1: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-md border-2 p-6 w-full mx-auto h-full">
      {/* 3열 구조 레이아웃 */}
      <div className="flex justify-center items-stretch h-full gap-8 md:gap-2 2xl:gap-24 w-full">
        {/* 1. 좌측 열 */}
        <div className="flex flex-col justify-between h-full gap-2">
          {[8, 7, 6, 5, 4, 3, 2, 1].map((id) => (
            <Seat
              key={id}
              id={id}
              layout="left"
              status={id % 3 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>

        {/* 2. 중앙 열 */}
        <div className="flex flex-col justify-between h-full py-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={9} layout="top" status="empty" />
              <Seat id={10} layout="top" status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={12} layout="bottom" status="occupied" />
              <Seat id={11} layout="bottom" status="empty" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={13} layout="top" status="empty" />
              <Seat id={14} layout="top" status="empty" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={16} layout="bottom" status="occupied" />
              <Seat id={15} layout="bottom" status="empty" />
            </div>
          </div>

          <div className="flex gap-2 lg:gap-4 justify-center">
            <Seat id={17} layout="top" status="occupied" />
            <Seat id={18} layout="top" status="empty" />
          </div>
        </div>

        {/* 3. 우측 열 */}
        <div className="flex flex-col justify-between h-full gap-2">
          {[26, 25, 24, 23, 22, 21, 20, 19].map((id) => (
            <Seat
              key={id}
              id={id}
              layout="right"
              status={id % 2 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusRoom1;
