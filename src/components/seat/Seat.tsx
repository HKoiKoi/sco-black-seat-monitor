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
  // 2xl 미만에서는 세로 배치에 어울리도록 넓게, 2xl 이상에서는 기존 규격(작은 정사각형) 적용
  const numBoxCenter =
    "flex items-center justify-center bg-gray-300 text-base-content font-bold w-16 h-6 sm:w-20 sm:h-7 2xl:w-24 2xl:h-8 text-xs 2xl:text-sm";
  const numBoxSide =
    "flex items-center justify-center bg-gray-300 text-base-content font-bold w-16 h-6 sm:w-20 sm:h-7 2xl:w-12 2xl:h-10 text-xs 2xl:text-sm";

  // 2. 이름 박스
  // 2xl 미만에서는 세로 배치에 맞게 높이를 줄임
  const nameBoxCenter = `flex items-center justify-center font-bold ${badgeColor} w-16 h-6 sm:w-20 sm:h-7 2xl:w-24 2xl:h-8 text-xs 2xl:text-sm`;
  const nameBoxSide = `flex items-center justify-center font-bold ${badgeColor} w-16 h-6 sm:w-20 sm:h-7 2xl:w-24 2xl:h-10 text-xs 2xl:text-sm`;

  const numBoxClass = isCenter ? numBoxCenter : numBoxSide;
  const nameBoxClass = isCenter ? nameBoxCenter : nameBoxSide;

  const NumberBox = <div className={numBoxClass}>{id}</div>;
  const NameBox = <div className={nameBoxClass}>{name}</div>;

  // 3. 전체 그룹 컨테이너
  const wrapperBase =
    "flex cursor-pointer hover:opacity-80 transition-opacity border-2 overflow-hidden";

  // 레이아웃에 따른 렌더링 분기
  if (layout === "left") {
    return (
      // 2xl 미만: 세로(flex-col), 이름-번호 순(divide-y) / 2xl 이상: 가로(flex-row), 번호-이름 순(divide-x)
      <div
        className={`${wrapperBase} flex-col divide-y-2 2xl:flex-row 2xl:divide-y-0 2xl:divide-x-2 divide-base-300`}
      >
        {/* 2xl 미만에서는 이름이 위, 2xl 이상에서는 번호가 왼쪽 */}
        <div className="2xl:hidden">{NameBox}</div>
        <div className="hidden 2xl:block">{NumberBox}</div>

        <div className="2xl:hidden">{NumberBox}</div>
        <div className="hidden 2xl:block">{NameBox}</div>
      </div>
    );
  }

  if (layout === "right") {
    return (
      // 2xl 미만: 세로(flex-col), 이름-번호 순(divide-y) / 2xl 이상: 가로(flex-row), 이름-번호 순(divide-x)
      <div
        className={`${wrapperBase} flex-col divide-y-2 2xl:flex-row 2xl:divide-y-0 2xl:divide-x-2 divide-base-300`}
      >
        {NameBox}
        {NumberBox}
      </div>
    );
  }

  if (layout === "top") {
    // 가운데 상단 (이름-번호)는 모든 화면에서 세로 배치
    return (
      <div className={`${wrapperBase} flex-col divide-y-2 divide-base-300`}>
        {NameBox}
        {NumberBox}
      </div>
    );
  }

  if (layout === "bottom") {
    // 가운데 하단 (번호-이름)은 모든 화면에서 세로 배치
    return (
      <div className={`${wrapperBase} flex-col divide-y-2 divide-base-300`}>
        {NumberBox}
        {NameBox}
      </div>
    );
  }

  return null;
};

export default Seat;
