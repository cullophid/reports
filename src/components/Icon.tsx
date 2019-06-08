import React from "react"
export const TextField = ({ size = 24, color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{
      fill: color,
    }}
  >
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
)
export const AddBox = ({ size = 24, color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{
      fill: color,
    }}
  >
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)
