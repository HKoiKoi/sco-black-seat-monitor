import React from "react";
import Header from "@/components/layout/Header";
import FocusRoom1 from "@/components/room/FocusRoom1";
import FocusRoom2 from "@/components/room/FocusRoom2";
import FocusRoom3 from "@/components/room/FocusRoom3";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col text-base-content">
      {/* 1. 상단 헤더 컴포넌트 적용 */}
      <Header />

      {/* 2. 메인 컨텐츠 영역 (구역별 Grid 배치) */}
      <main className="flex-1 p-6 grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 집중실 1 */}
          <div className="flex flex-col items-center">
            <FocusRoom1 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 1</h2>
          </div>

          {/* 집중실 2 적용 */}
          <div className="flex flex-col items-center">
            <FocusRoom2 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 2</h2>
          </div>

          {/* 집중실 3 적용 */}
          <div className="flex flex-col items-center">
            <FocusRoom3 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 3</h2>
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
