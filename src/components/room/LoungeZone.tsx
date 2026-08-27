import React from "react";
import Seat from "@/components/seat/Seat";

const LoungeZone: React.FC = () => {
  return (
    <div className="flex flex-col items-end gap-4 w-full h-full p-4 border-2 rounded-lg">
      {/* 1. 세로 영역 (위쪽 3행 3열 구조) */}
      <div className="flex gap-4">
        {/* 왼쪽 2열 (2x2) */}
        <div className="flex flex-col gap-4">
          <Seat id={101} layout="bottom" status="empty" />
          <Seat id={102} layout="bottom" status="empty" />
        </div>

        {/* 중간 2열 (2x2) */}
        <div className="flex flex-col gap-4">
          <Seat id={103} layout="bottom" status="empty" />
          <Seat id={104} layout="bottom" status="empty" />
        </div>

        {/* 오른쪽 3열 (3x1) - 가장 아래 좌석은 가로 영역과 연결됨 */}
        <div className="flex flex-col gap-4">
          <Seat id={105} layout="bottom" status="empty" />
          <Seat id={106} layout="bottom" status="empty" />
          <Seat id={107} layout="bottom" status="empty" />
        </div>
      </div>

      {/* 2. 가로 영역 (아래쪽 4열) */}
      {/* 가장 우측 좌석(111번)이 세로 영역의 마지막 좌석(107번) 바로 아래에 오도록 items-end 사용 */}
      <div className="flex gap-4">
        <Seat id={108} layout="bottom" status="empty" />
        <Seat id={109} layout="bottom" status="empty" />
        <Seat id={110} layout="bottom" status="empty" />
        <Seat id={111} layout="bottom" status="empty" />
      </div>
    </div>
  );
};

export default LoungeZone;
