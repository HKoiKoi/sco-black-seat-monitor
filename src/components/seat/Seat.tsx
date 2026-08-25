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
      className={`flex items-center justify-center w-10 h-10 border border-base-300 font-bold ${badgeColor} transition-colors cursor-pointer hover:opacity-80`}
    >
      {id}
    </div>
  );
};

export default Seat;
