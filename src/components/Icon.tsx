import { colors } from "../theme";
import styled from "@emotion/styled";

type Props = {
  icon: keyof typeof icons;
  color?: string;
  size?: number;
}

export const Icon = (props: Props) => {
  const { color = colors.text, size = 24, icon } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {icons[icon]}
    </svg>
  )
}


const icons = {
  insert_chart: (
    <>
      <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </>
  ),
  insert_photo: (
    <>
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </>
  ),
  insert_text: (
    <>
      <path d="M5 4v3h5.5v12h3V7H19V4z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </>
  )
}