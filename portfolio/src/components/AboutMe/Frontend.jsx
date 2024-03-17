import React from "react";

function FrontendIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="133.333"
      height="133.333"
      version="1"
      viewBox="0 0 100 100"
      className={`${className}`}
    >
      <path
        d="M20 920C1 901 0 887 0 480V60h1000v420c0 407-1 421-20 440s-33 20-480 20-461-1-480-20zm938-62l3-38H40v33c0 19 3 37 7 40 3 4 209 6 457 5l451-3 3-37zm2-418V100H40v680h920V440z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
      <path
        d="M546 648C445 416 378 238 389 227c7-7 14-8 21-1 17 17 190 448 185 461-9 26-27 12-49-39zM240 537c-41-23-75-49-75-57 0-21 153-106 167-92 15 15 4 28-52 59-28 15-50 30-50 33s24 19 53 35c49 29 74 65 45 65-7 0-47-19-88-43zM665 570c-10-16 2-27 55-56 28-15 50-30 50-34 0-3-24-19-52-36-49-28-67-53-43-61 17-5 160 81 160 97 0 8-34 34-75 58-81 45-86 47-95 32z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default FrontendIcon;