import React from "react";
import { swalUtils } from "@/utils/swalUtils";

const App: React.FC = () => {
  // 1. 토스트 알림 테스트 핸들러
  const handleToast = () => {
    swalUtils.toast("환영합니다! 시스템이 정상적으로 로드되었습니다.");
  };

  // 2. 일반 에러 알럿 테스트 핸들러
  const handleAlert = () => {
    swalUtils.alert(
      "DB 연동 실패",
      "ADT 캡스 출입 기록(.mdb) 파일을 찾을 수 없습니다.",
      "error",
    );
  };

  // 3. Confirm 모달 테스트 핸들러 (좌석 이동 시뮬레이션)
  const handleConfirm = async () => {
    const result = await swalUtils.confirm(
      "좌석 이동",
      "선택한 학생을 라운지존으로 이동시키겠습니까?",
    );

    if (result.isConfirmed) {
      swalUtils.toast("라운지존으로 이동 완료되었습니다.", "success");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-8 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-base-content">
          SCO 블랙관 스마트 좌석 모니터링
        </h1>
        <p className="text-lg text-base-content/70">
          Pretendard 폰트, Tailwind CSS v4, Daisy UI 5 적용 확인용 테스트
          화면입니다.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="btn btn-primary" onClick={handleToast}>
          토스트 알림 띄우기
        </button>
        <button className="btn btn-error" onClick={handleAlert}>
          에러 알럿 띄우기
        </button>
        <button className="btn btn-warning" onClick={handleConfirm}>
          좌석 이동 확인 모달 띄우기
        </button>
      </div>
    </div>
  );
};

export default App;
