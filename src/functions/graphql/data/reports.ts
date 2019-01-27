import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";
const run = collection("reports");

export type Report = {
  _id: ObjectID;
  title: string;
  slides: SlideElement[];
};

type ReportUpdate = {
  id: ObjectID;
  title: string;
  slides: Slide[];
};

type ReportCreate = {
  title: string;
  slides: Slide[];
};

export type SlideElement = {
  _id: ObjectID;
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
  _id: ObjectID;
  elements: SlideElement[];
};

export const fetchAll: Resolver<Report[]> = () =>
  run((reports) => reports.find({}).toArray());

export const fetch: Resolver<Report | null, { id: ObjectID }> = (ctx, { id }) =>
  run((reports) => reports.findOne({ _id: id }));

export const create: Resolver<Report | null, { title: string }> = async (
  ctx,
  { title }
) => {
  const report: ReportCreate = {
    title,
    slides: [
      {
        _id: new ObjectID(),
        elements: [
          {
            _id: new ObjectID(),
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
  return run((reports) => reports.findOne({ _id: res.insertedId }));
};

export const remove: Resolver<ObjectID, { id: ObjectID }> = async (
  ctx,
  { id }
) => {
  await run((reports) => reports.deleteOne({ _id: id }));
  return id;
};

export const removeAll: Resolver<number | null> = async () => {
  let res = await run((reports) => reports.deleteMany({}));
  return res.result.ok ? (res.result.n as number) : null;
};

export const update: Resolver<Report | null, { report: ReportUpdate }> = async (
  ctx,
  { report }
) => {
  await run((reports) =>
    reports.updateOne({ _id: report.id }, { $set: report })
  );
  return run((reports) => reports.findOne({ _id: report.id }));
};
