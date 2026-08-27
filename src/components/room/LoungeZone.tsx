import React from "react";
import Seat from "@/components/seat/Seat";

const LoungeZone: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-2 sm:gap-4 2xl:gap-8 p-6 border-2 border-primary rounded-lg shadow-md place-items-center">
      <div className="col-start-2">
        <Seat id={101} layout="bottom" status="empty" />
      </div>
      <div className="col-start-3">
        <Seat id={103} layout="bottom" status="empty" />
      </div>
      <div className="col-start-4">
        <Seat id={105} layout="bottom" status="empty" />
      </div>

      <div className="col-start-2 row-start-2">
        <Seat id={102} layout="bottom" status="empty" />
      </div>
      <div className="col-start-3 row-start-2">
        <Seat id={104} layout="bottom" status="empty" />
      </div>
      <div className="col-start-4 row-start-2">
        <Seat id={106} layout="bottom" status="empty" />
      </div>

      <div className="col-start-4 row-start-3">
        <Seat id={107} layout="bottom" status="empty" />
      </div>

      <div className="col-start-1 row-start-4">
        <Seat id={108} layout="bottom" status="empty" />
      </div>
      <div className="col-start-2 row-start-4">
        <Seat id={109} layout="bottom" status="empty" />
      </div>
      <div className="col-start-3 row-start-4">
        <Seat id={110} layout="bottom" status="empty" />
      </div>
      <div className="col-start-4 row-start-4">
        <Seat id={111} layout="bottom" status="empty" />
      </div>
    </div>
  );
};

export default LoungeZone;
