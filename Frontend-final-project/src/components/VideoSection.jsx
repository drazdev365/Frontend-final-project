import React from "react";

export default function VideoSection() {
  return (
    <div className="flex justify-center items-center mt-[4.375rem] w-full">
      <video
        src="AdsVideo.mp4"
        autoPlay
        muted
        loop
        className="w-full sm:w-[80%] lg:w-[60%] h-auto"
      />
    </div>
  );
}
