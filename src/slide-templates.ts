import { Slide } from "./models"
export const slideTemplates: Slide[] = [
  {
    id: "template",
    elements: [
      {
        id: "10",
        type: "Text",
        x: 100,
        y: 160,
        width: 1080,
        value: "Title",
        textAlign: "left",
        fontSize: 64,
      },
      {
        id: "12",
        type: "Text",
        x: 680,
        y: 320,
        width: 500,
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, finibus quis felis aliquet, efficitur mollis diam. Donec dictum eu augue sed lobortis. Mauris quam odio, consectetur et maximus vel, lobortis id lorem. Cras ante justo, imperdiet quis libero condimentum, mattis lacinia sem. ",
        textAlign: "left",
        fontSize: 24,
      },
    ],
  },
  {
    id: "template",
    elements: [
      {
        id: "1",
        type: "Text",
        x: 100,
        y: 160,
        width: 1080,
        value: "Title",
        textAlign: "left",
        fontSize: 64,
      },
      {
        id: "2",
        type: "Text",
        x: 100,
        y: 320,
        width: 500,
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris metus, finibus quis felis aliquet, efficitur mollis diam. Donec dictum eu augue sed lobortis. Mauris quam odio, consectetur et maximus vel, lobortis id lorem. Cras ante justo, imperdiet quis libero condimentum, mattis lacinia sem. ",
        textAlign: "left",
        fontSize: 24,
      },
      {
        id: "3",
        type: "Chart",
        x: 680,
        y: 320,
        width: 500,
        height: 500,
      },
    ],
  },
]
