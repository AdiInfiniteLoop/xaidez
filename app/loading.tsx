'use client';

import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="before-style" />
      <div className="after-style" />
      <style jsx>{`
        .before-style {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 40px;
          background: #ff9371;
          transform: rotate(45deg) translate(30%, 40%);
          box-shadow: 32px -34px 0 5px #ff3d00;
          animation: slide 2s infinite ease-in-out alternate;
        }

        .after-style {
          content: "";
          position: absolute;
          left: 10px;
          top: 10px;
          width: 18px;
          height: 18px;
          background: #ff3d00;
          border-radius: 9999px;
          transform-origin: 35px 145px;
          animation: rotate 2s infinite ease-in-out;
        }

        @keyframes slide {
          0%, 100% {
            bottom: -40px;
          }
          25%, 75% {
            bottom: -4px;
          }
          20%, 80% {
            bottom: 4px;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(-15deg);
          }
          25%, 75% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(25deg);
          }
        }
      `}</style>
    </div>
    </div>
  );
};

export default Loader;
