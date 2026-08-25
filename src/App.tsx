import React from "react";

const App: React.FC = () => {
  return (
    // 전체 배경 및 최소 높이 설정
    <div className="min-h-screen bg-base-200 flex flex-col text-base-content">
      {/* 1. 상단 헤더 영역 (시간 및 타이틀) */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-base-100 shadow-sm">
        <h1 className="text-2xl font-bold">SCO 블랙관 스마트 좌석 모니터링</h1>
        <div className="flex gap-4 items-center">
          {/* TODO: 1분 주기 타이머 컴포넌트 연결 */}
          <span className="text-lg font-medium">2026-08-25 18:19</span>
          <button className="btn btn-sm btn-outline">맨 위로</button>
        </div>
      </header>

      {/* 2. 메인 컨텐츠 영역 (구역별 Grid 배치) */}
      <main className="flex-1 p-6 grid grid-cols-12 gap-6">
        {/* 좌측: 집중실 1~4 구역 (8칸 차지) */}
        <section className="col-span-12 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 min-h-75">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">집중실 1</h2>
            {/* 좌석 뱃지들이 들어갈 공간 */}
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 min-h-75">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">집중실 2</h2>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 min-h-75">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">집중실 3</h2>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 min-h-75">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">집중실 4</h2>
          </div>
        </section>

        {/* 우측: 관리 및 부대시설 구역 (4칸 차지) */}
        <section className="col-span-12 xl:col-span-4 flex flex-col gap-6">
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 flex-1">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              코칭/상담실
            </h2>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 h-32">
            <h2 className="text-lg font-bold mb-2">OA 사물함</h2>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 flex-1">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">학습운영실</h2>
          </div>
        </section>

        {/* 하단: 자유 및 식사 구역 (전체 12칸 차지) */}
        <section className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 min-h-50">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">다이닝룸</h2>
          </div>
          <div className="card bg-base-100 shadow-md border border-base-300 p-4 min-h-50">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">집중존</h2>
          </div>
          <div className="card bg-base-100 shadow-md p-4 min-h-50 border-primary border-2">
            <h2 className="text-xl font-bold mb-4 border-b pb-2 text-primary">
              라운지존 (Drop 대상)
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
