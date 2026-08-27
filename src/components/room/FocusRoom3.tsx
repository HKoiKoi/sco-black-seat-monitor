import React from "react";
import Seat from "@/components/seat/Seat";

const FocusRoom3: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-md border-2 p-6 w-full mx-auto h-full">
      {/* 2열 구조 레이아웃 */}
      <div className="flex justify-center items-stretch h-full gap-16 md:gap-24 lg:gap-12 2xl:gap-32 w-full">
        {/* 1. 좌측 열 */}
        <div className="flex flex-col justify-between h-full py-4 gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={63} layout="bottom" status="occupied" />
              <Seat id={62} layout="bottom" status="empty" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={60} layout="top" status="empty" />
              <Seat id={61} layout="top" status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={59} layout="bottom" status="occupied" />
              <Seat id={58} layout="bottom" status="empty" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 lg:gap-4">
              <Seat id={56} layout="top" status="empty" />
              <Seat id={57} layout="top" status="occupied" />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <Seat id={55} layout="bottom" status="occupied" />
              <Seat id={54} layout="bottom" status="empty" />
            </div>
          </div>

          <div className="flex gap-2 lg:gap-4">
            <Seat id={52} layout="top" status="empty" />
            <Seat id={53} layout="top" status="occupied" />
          </div>
        </div>

        {/* 2. 우측 열 */}
        <div className="flex flex-col justify-between h-full gap-2">
          {[64, 65, 66, 67, 68, 69, 70, 71, 72].map((id) => (
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

export default FocusRoom3;
