import React from "react";

export type SeatStatus = "occupied" | "empty";

interface SeatProps {
  id: number;
  status?: SeatStatus;
}

const Seat: React.FC<SeatProps> = ({ id, status = "empty" }) => {
  // 입실(초록색), 미입실/퇴실(빨간색)
  const badgeColor =
    status === "occupied"
      ? "bg-success text-success-content"
      : "bg-error text-error-content";

  return (
    <div
      className={`flex items-center justify-center border border-base-300 font-bold ${badgeColor} transition-colors cursor-pointer hover:opacity-80
      w-9 h-9 text-xs sm:w-10 sm:h-10 sm:text-sm lg:w-12 lg:h-12 lg:text-base xl:w-14 xl:h-14 xl:text-lg rounded`}
    >
      {id}
    </div>
  );
};

export default Seat;
