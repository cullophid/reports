import { collection } from "../mongo";
import { ObjectID } from "bson";
import uuid from "uuid/v4";
const run = collection("reports");

export type Report = {
  _id: ObjectID;
  title: string;
  slides: SlideElement[];
};

type ReportUpdate = {
  id: string;
  title: string;
  slides: Slide[];
};

type ReportCreate = {
  title: string;
  slides: Slide[];
};

export type SlideElement = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text?: SlideText;
  chart?: SlideChart;
};

type SlideText = {
  value: string;
  fontSize: number;
  align: "Left" | "Right" | "Center" | "Justify";
};

export type SlideChart = {
  dataStore: ObjectID;
  query: string;
  xAxis: string;
  yAxis: string;
};

type Slide = {
  id: string;
  elements: SlideElement[];
};

export const fetchAll = () => run((reports) => reports.find({}).toArray());

export const fetch = (id: string) =>
  run((reports) => reports.findOne({ _id: new ObjectID(id) }));

export const create = async (title: string) => {
  const report: ReportCreate = {
    title,
    slides: [
      {
        id: uuid(),
        elements: [
          {
            id: uuid(),
            x: 50,
            y: 130,
            width: 700,
            height: 0,
            text: {
              value: "TitleSlide",
              fontSize: 48,
              align: "Center"
            }
          }
        ]
      }
    ]
  };
  let res = await run((reports) => reports.insertOne(report));
  return { ...report, _id: res.insertedId };
};

export const remove = async (id: string) => {
  await run((reports) => reports.deleteOne({ _id: new ObjectID(id) }));
  return id;
};
export const removeAll = async () => {
  await run((reports) => reports.deleteMany({}));
  return "Ok";
};

export const update = async (report: ReportUpdate) => {
  await run((reports) =>
    reports.updateOne({ _id: new ObjectID(report.id) }, { $set: report })
  );
  return { ...report, _id: new ObjectID(report.id) };
};
