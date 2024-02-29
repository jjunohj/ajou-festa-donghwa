"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("----", error.message);
  }, [error]);

  return (
    <>
      <div className="w-[23.4rem] h-[3.8rem] bg-brown-400 border-2 border-brown-500 flex items-center justify-center rounded-full mb-12">
        <h1 className="text-3xl font-bold text-center text-brown-600">
          축하합니다 !!
        </h1>
      </div>
      <h1
        className="text-3xl font-bold text-center text-brown-500"
        style={{ marginTop: "2rem" }}
      >
        WOW !!!
      </h1>
      <h2 className="text-2xl font-bold text-center text-brown-500 mb-4">
        당신은 미처 발견하지 못한 오류를 발견했어요 !
        <br />
        스크린샷을 찍고 Do it! 동아리방으로 오신 뒤
        <br />
        <span className="text-brown-600">'오동재'</span>를 찾아 보여주시면
        사탕을 받아가실 수 있습니다 !
      </h2>
      {/* entire-map 페이지로 이동 */}
      <button
        className="w-[12rem] h-[3rem] font-semibold bg-brown-500 text-white rounded-md mt-4"
        onClick={() => {
          reset();
          window.location.href = "/entire-map";
        }}
      >
        전체지도로 보내드릴게요 !
      </button>
    </>
  );
}
