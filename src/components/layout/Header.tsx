import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 요구사항: 1분 주기로 시간 업데이트
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, []);

  // 날짜 및 시간 포맷팅 (YYYY-MM-DD HH:mm, 24시간 형식)
  const formatTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  // 화면 최상단으로 스크롤 부드럽게 이동하는 핸들러
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-base-100 shadow-sm border-b border-base-200">
      <h1 className="text-2xl font-bold text-base-content">
        SCO 블랙관 스마트 좌석 모니터링
      </h1>
      <div className="flex gap-4 items-center">
        {/* 현재 날짜/시간 표시 영역 */}
        <span className="text-lg font-medium text-base-content/80 tabular-nums tracking-tight">
          {formatTime(currentTime)}
        </span>

        {/* 스크롤 맨 위로 버튼 */}
        <button
          onClick={scrollToTop}
          className="btn btn-sm btn-outline flex items-center gap-1"
          aria-label="화면 맨 위로 스크롤"
        >
          <ArrowUp size={16} />
          <span>맨 위로</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
