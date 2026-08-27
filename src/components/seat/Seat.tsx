import React from "react";

export type SeatStatus = "occupied" | "empty";
export type SeatLayout = "left" | "right" | "top" | "bottom";

interface SeatProps {
  id: number;
  status?: SeatStatus;
  name?: string;
  layout?: SeatLayout;
}

const Seat: React.FC<SeatProps> = ({
  id,
  status = "empty",
  name = "홍길동",
  layout = "top",
}) => {
  const badgeColor =
    status === "occupied"
      ? "bg-success text-success-content"
      : "bg-error text-error-content";

  // 기본 가운데 열인지 확인
  const isCenter = layout === "top" || layout === "bottom";

  // 1. 번호 박스
  const numBoxCenter =
    "flex items-center justify-center bg-gray-200 text-black font-bold w-12 h-6 text-[10px] sm:w-20 sm:h-8 sm:text-sm 2xl:w-24 2xl:h-9";
  const numBoxSide =
    "flex items-center justify-center bg-gray-200 text-black font-bold w-12 h-6 text-[10px] sm:w-20 sm:h-8 sm:text-sm 2xl:w-14 2xl:h-12";
  // 2. 이름 박스
  const nameBoxCenter = `flex items-center justify-center font-bold text-black ${badgeColor} w-12 h-6 text-[10px] sm:w-20 sm:h-8 sm:text-sm 2xl:w-24 2xl:h-9`;
  const nameBoxSide = `flex items-center justify-center font-bold text-black ${badgeColor} w-12 h-6 text-[10px] sm:w-20 sm:h-8 sm:text-sm 2xl:w-24 2xl:h-12`;

  const numBoxClass = isCenter ? numBoxCenter : numBoxSide;
  const nameBoxClass = isCenter ? nameBoxCenter : nameBoxSide;

  const NumberBox = <div className={numBoxClass}>{id}</div>;
  const NameBox = <div className={nameBoxClass}>{name}</div>;

  // 3. 전체 그룹 컨테이너
  const wrapperBase =
    "flex shrink-0 w-max cursor-pointer hover:opacity-80 transition-opacity border-2 border-black overflow-hidden";

  if (layout === "left") {
    return (
      <>
        {/* 2xl 미만 */}
        <div
          className={`${wrapperBase} flex-col divide-y-2 divide-white 2xl:hidden`}
        >
          {NameBox}
          {NumberBox}
        </div>
        {/* 2xl 이상 */}
        <div
          className={`${wrapperBase} hidden 2xl:flex flex-row divide-x-2 divide-white`}
        >
          {NumberBox}
          {NameBox}
        </div>
      </>
    );
  }

  if (layout === "right") {
    return (
      <div
        className={`${wrapperBase} flex-col divide-y-2 2xl:flex-row 2xl:divide-y-0 2xl:divide-x-2 divide-white`}
      >
        {NameBox}
        {NumberBox}
      </div>
    );
  }

  if (layout === "top") {
    return (
      <div className={`${wrapperBase} flex-col divide-y-2 divide-white`}>
        {NameBox}
        {NumberBox}
      </div>
    );
  }

  if (layout === "bottom") {
    return (
      <div className={`${wrapperBase} flex-col divide-y-2 divide-white`}>
        {NumberBox}
        {NameBox}
      </div>
    );
  }

  return null;
};

export default Seat;
