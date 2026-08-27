import React from "react";
import Header from "@/components/layout/Header";
import FocusRoom1 from "@/components/room/FocusRoom1";
import FocusRoom2 from "@/components/room/FocusRoom2";
import FocusRoom3 from "@/components/room/FocusRoom3";
import FocusRoom4 from "@/components/room/FocusRoom4";
import LoungeZone from "@/components/room/LoungeZone";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col text-base-content">
      {/* 1. 상단 헤더 */}
      <Header />

      {/* 2. 메인 컨텐츠 영역 */}
      <main className="flex-1 p-6 flex flex-col gap-8">
        {/* 상단: 집중실 1, 2, 3 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-screen-3xl mx-auto items-stretch">
          {/* 집중실 1 */}
          <div className="flex flex-col items-center w-full h-full min-w-0">
            <FocusRoom1 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 1</h2>
          </div>

          {/* 집중실 2 */}
          <div className="flex flex-col items-center w-full h-full min-w-0">
            <FocusRoom2 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 2</h2>
          </div>

          {/* 집중실 3 */}
          <div className="flex flex-col items-center w-full h-full min-w-0">
            <FocusRoom3 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 3</h2>
          </div>
        </section>

        {/* 하단: 라운지존, 집중실 4 */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-screen-3xl mx-auto items-stretch mt-4">
          {/* 라운지존 */}
          <div className="flex flex-col items-center w-full h-full min-w-0">
            <LoungeZone />
            <h2 className="text-xl font-bold mt-4 text-info">라운지존</h2>
          </div>

          {/* 집중실 4 */}
          <div className="flex flex-col items-center w-full h-full min-w-0">
            <FocusRoom4 />
            <h2 className="text-xl font-bold mt-4 text-info">집중실 4</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
