import React from "react";

function StackIcon({ className }) {
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
        d="M772 951c-11-7-8-41 19-185 28-152 35-176 51-176 23 0 23-3-7 187-14 87-25 164-25 171 0 14-19 16-38 3zM558 849c-15-8-6-25 69-137 122-179 117-173 136-159 14 11 5 29-78 157-53 80-99 146-103 147s-15-2-24-8zM396 674c-3-9-6-19-6-24s67-49 150-99c143-86 150-89 161-70 6 12 9 22 7 23-12 9-300 186-303 186-2 0-6-7-9-16zM317 471c-4-17 14-24 173-64 170-42 179-43 183-25 3 11 0 21-6 23-40 14-318 85-330 85-8 0-17-9-20-19z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
      <path
        d="M180 230V40h600v190c0 183-1 190-20 190s-20-7-20-170V80H220v170c0 163-1 170-20 170s-20-7-20-190z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
      <path
        d="M300 311c0-16 14-19 138-30 75-6 156-14 180-17 38-6 42-4 42 15 0 11-3 21-7 21-5 0-73 7-153 15-193 19-200 19-200-4zM300 180c0-19 7-20 180-20s180 1 180 20-7 20-180 20-180-1-180-20z"
        transform="matrix(.1 0 0 -.1 0 100)"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export default StackIcon;