import React from "react";

export default function Direction({ rotation }) {
  return (
  <div className={`transform origin-center rotate-${rotation}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <circle cx="17.5" cy="17.5" r="17.5" fill="#6E707A" />
        <path
          d="M25.2062 27.8061C25.0137 27.8061 24.8205 27.7661 24.6485 27.6861L17.4312 24.3189L10.214 27.6861C9.83371 27.8636 9.35199 27.8432 8.99919 27.634C8.64694 27.4249 8.49643 27.0708 8.61942 26.7413L16.3944 5.9968C16.5282 5.64062 16.9506 5.39526 17.4307 5.39526C17.9108 5.39526 18.3337 5.64062 18.467 5.9968L26.242 26.7413C26.3655 27.0708 26.215 27.4249 25.8627 27.634C25.6702 27.7482 25.4387 27.8061 25.2062 27.8061ZM17.4312 22.5122C17.6244 22.5122 17.8175 22.5522 17.989 22.6321L23.4029 25.1579L17.4312 9.22531L11.4596 25.1579L16.8734 22.6321C17.045 22.5522 17.2381 22.5122 17.4312 22.5122Z"
          fill="#E7E7EB"
        />
        <path
          d="M17.2072 8.57708L11.2055 26.1462L17.2072 22.8812L23.7945 26.1462L17.2072 8.57708Z"
          fill="#E7E7EB"
          stroke="#E7E7EB"
        />
      </svg>
    </div>
  );
}
