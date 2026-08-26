import React from "react";
import Seat from "@/components/seat/Seat";

const FocusRoom4: React.FC = () => {
  return (
    <div className="card bg-base-100 shadow-md border-2 p-6 w-full mx-auto h-full">
      <div className="flex flex-col justify-between h-full w-full gap-15 py-2">
        {/* 1. 상단 열 */}
        <div className="flex justify-between items-center w-full min-w-max gap-2">
          <Seat id={94} layout="bottom" status="empty" />
          <div className="flex items-center gap-2 2xl:gap-20">
            {[73, 74, 75, 76, 77].map((id) => (
              <Seat
                key={id}
                id={id}
                layout="bottom"
                status={id % 2 === 0 ? "occupied" : "empty"}
              />
            ))}
          </div>
        </div>

        {/* 2. 중단 열 */}
        <div className="flex flex-col gap-2 w-full min-w-max">
          <div className="flex justify-between 2xl:justify-start items-center w-full gap-4 2xl:gap-24">
            {[93, 92, 91, 90, 89].map((id) => (
              <Seat
                key={id}
                id={id}
                layout="top"
                status={id % 3 === 0 ? "occupied" : "empty"}
              />
            ))}
          </div>

          <div className="flex justify-between 2xl:justify-start items-center w-full gap-4 2xl:gap-24">
            {[84, 85, 86, 87, 88].map((id) => (
              <Seat
                key={id}
                id={id}
                layout="bottom"
                status={id % 3 !== 0 ? "occupied" : "empty"}
              />
            ))}
          </div>
        </div>

        {/* 3. 하단 열 */}
        <div className="flex justify-between 2xl:justify-start items-center w-full min-w-max gap-2 2xl:gap-20">
          {[83, 82, 81, 80, 79, 78].map((id) => (
            <Seat
              key={id}
              id={id}
              layout="bottom"
              status={id % 2 === 0 ? "occupied" : "empty"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusRoom4;
