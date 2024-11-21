import React from 'react';

export default function VideoSection() {
  return (
    <div className='flex justify-center items-center mt-[70px]'>
      <video
        src="AdsVideo.mp4"
        autoPlay
        muted
        loop
        className=""
      >
      </video>
    </div>
  );
}
