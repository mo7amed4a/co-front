"use client";
import { BaseUrl } from "@/lib/axios";

export default function VideoPlayer({
  src
}:{
  src: string
}) {
  // const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full h-72 md:h-[460px] bg-[#D9D9D9] rounded-xl flex items-center justify-center overflow-hidden">
      <video
        className={`absolute w-full h-full object-cover `}
        controls
      >
        <source src={BaseUrl + src} type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* {!playing && (
        <button
          onClick={() => setPlaying(true)}
          className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <svg width={88} height={88} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14.0801" y="21.1191" width="59.84" height="45.76" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M44 88C49.7782 88 55.4997 86.8619 60.8381 84.6507C66.1764 82.4395 71.0269 79.1985 75.1127 75.1127C79.1985 71.0269 82.4395 66.1764 84.6507 60.8381C86.8619 55.4997 88 49.7782 88 44C88 38.2218 86.8619 32.5003 84.6507 27.1619C82.4395 21.8236 79.1985 16.9731 75.1127 12.8873C71.0269 8.80152 66.1764 5.56051 60.8381 3.3493C55.4997 1.13809 49.7782 -8.61013e-08 44 0C32.3305 1.73889e-07 21.1389 4.6357 12.8873 12.8873C4.6357 21.1389 0 32.3305 0 44C0 55.6695 4.6357 66.8611 12.8873 75.1127C21.1389 83.3643 32.3305 88 44 88ZM38.0502 24.3956L65.6431 39.7271C66.4049 40.1506 67.0396 40.7701 67.4815 41.5214C67.9233 42.2727 68.1564 43.1284 68.1564 44C68.1564 44.8716 67.9233 45.7273 67.4815 46.4786C67.0396 47.2299 66.4049 47.8494 65.6431 48.2729L38.0502 63.6044C37.1568 64.1011 36.1491 64.3556 35.127 64.3429C34.1049 64.3302 33.1038 64.0506 32.223 63.5319C31.3422 63.0132 30.6122 62.2734 30.1053 61.3857C29.5985 60.498 29.3324 59.4933 29.3333 58.4711V29.5289C29.3324 28.5067 29.5985 27.502 30.1053 26.6143C30.6122 25.7266 31.3422 24.9868 32.223 24.4681C33.1038 23.9494 34.1049 23.6698 35.127 23.6571C36.1491 23.6444 37.1568 23.8989 38.0502 24.3956Z" fill="#1A76D1" />
          </svg>
        </button>
      )} */}

      {/* {!playing && <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-30"></div>} */}
    </div>
  );
}
