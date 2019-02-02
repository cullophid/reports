import { collection } from "../mongo";
import { Resolver, ID } from "../Types";
import uuid from "uuid/v4";
const run = collection("reports");

export type Report = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  slides: Slide[];
  owner: ID;
};

type Slide = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  elements: SlideElement[];
};

type ReportUpdate = {
  id: ID;
  title: string;
  slides: Slide[];
};

type ReportCreate = {
  title: string;
  organisation: ID;
  slides: Slide[];
};

export type SlideElement = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  type: "TEXT" | "CHART";
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
  dataStore: ID;
  query: string;
  xAxis: string;
  yAxis: string;
};

export const fetchAll: Resolver<Report[]> = (parent, args, { user }) => {
  console.log("reports");
  return run((reports) => reports.find({ owner: user!.id }).toArray());
};

export const fetch: Resolver<Report | null, { id: ID }> = (
  parent,
  { id },
  { user }
) => {
  return run((reports) => reports.findOne({ _id: id, owner: user!.id }));
};

export const create: Resolver<Report | null, { title: string }> = async (
  parent,
  { title },
  { user }
) => {
  const createdAt = new Date();
  const updatedAt = new Date();
  const newReport: Report = {
    _id: uuid(),
    title,
    owner: user!.id,
    createdAt,
    updatedAt,
    slides: [
      {
        _id: uuid(),
        createdAt,
        updatedAt,
        elements: [
          {
            _id: uuid(),
            createdAt,
            updatedAt,
            x: 50,
            y: 130,
            type: "TEXT",
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
  let res = await run((reports) => reports.insertOne(newReport));
  console.log("Created new report", res);
  return newReport;
};

export const remove: Resolver<ID, { id: ID }> = async (
  parent,
  { id },
  { user }
) => {
  await run((reports) => reports.deleteOne({ _id: id }));
  return id;
};

export const removeAll: Resolver<number | null> = async () => {
  let res = await run((reports) => reports.deleteMany({}));
  return res.result.ok ? (res.result.n as number) : null;
};

export const update: Resolver<Report | null, { report: ReportUpdate }> = async (
  parent,
  { report },
  { user }
) => {
  await run((reports) =>
    reports.updateOne({ _id: report.id }, { $set: report })
  );
  return run((reports) => reports.findOne({ _id: report.id }));
};
