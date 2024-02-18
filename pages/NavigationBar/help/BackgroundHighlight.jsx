import React from "react";

const BackgroundHighlight = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
        opacity="0.12"
        className="xs:none lg:flex absolute z-10 h-full"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="29"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="188.5"
            ry="277.5"
            cx="496.6876010083406"
            cy="563.7825054822791"
            fill="hsla(272, 80%, 29%, 0.5)"
          ></ellipse>
          <ellipse
            rx="188.5"
            ry="277.5"
            cx="353.8728400075622"
            cy="85.76594881237486"
            fill="hsla(167, 82%, 31%, 0.5)"
          ></ellipse>
          <ellipse
            rx="188.5"
            ry="277.5"
            cx="246.78740251251543"
            cy="409.5220716910837"
            fill="hsla(212, 85%, 29%, 0.5)"
          ></ellipse>
          <ellipse
            rx="188.5"
            ry="277.5"
            cx="558.910432429838"
            cy="336.35505755784015"
            fill="hsla(272, 99%, 54%, 0.5)"
          ></ellipse>
        </g>
      </svg>
    </>
  );
};

export default BackgroundHighlight;
