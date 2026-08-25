import React from "react";
import Seat from "@/components/seat/Seat";

const FocusRoom3: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-300 p-6 min-w-max mx-auto">
      {/* 2열 구조 레이아웃 */}
      <div className="flex justify-between items-stretch gap-16">
        {/* 1. 좌측 열 */}
        <div className="flex flex-col justify-between py-4 gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Seat id={63} status="occupied" />
              <Seat id={62} status="empty" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Seat id={60} status="empty" />
              <Seat id={61} status="occupied" />
            </div>
            <div className="flex gap-2">
              <Seat id={59} status="occupied" />
              <Seat id={58} status="empty" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Seat id={56} status="empty" />
              <Seat id={57} status="occupied" />
            </div>
            <div className="flex gap-2">
              <Seat id={55} status="occupied" />
              <Seat id={54} status="empty" />
            </div>
          </div>

          <div className="flex gap-2">
            <Seat id={52} status="empty" />
            <Seat id={53} status="occupied" />
          </div>
        </div>

        {/* 2. 우측 열 */}
        <div className="flex flex-col gap-2">
          {[64, 65, 66, 67, 68, 69, 70, 71, 72].map((id) => (
            <Seat
              key={id}
              id={id}
              status={id % 2 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusRoom3;
