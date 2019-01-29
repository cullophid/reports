import { collection } from "../mongo";
import { ObjectID } from "bson";
import { Resolver } from "../Types";
import { NotAuthenticatedError } from "../errors";
const run = collection("reports");

export type Report = {
  _id: ObjectID;
  title: string;
  slides: SlideElement[];
  organisation: ObjectID;
};

type ReportUpdate = {
  id: ObjectID;
  title: string;
  slides: Slide[];
};

type ReportCreate = {
  title: string;
  organisation: ObjectID;
  slides: Slide[];
};

export type SlideElement = {
  _id: ObjectID;
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
  dataStore: ObjectID;
  query: string;
  xAxis: string;
  yAxis: string;
};

type Slide = {
  _id: ObjectID;
  elements: SlideElement[];
};

export const fetchAll: Resolver<Report[]> = (parent, args, { user }) => {
  console.log("reports");
  if (!user) throw new NotAuthenticatedError();
  return run((reports) =>
    reports.find({ organisation: user.organisation }).toArray()
  );
};

export const fetch: Resolver<Report | null, { id: ObjectID }> = (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  return run((reports) =>
    reports.findOne({ _id: id, organisation: user.organisation })
  );
};

export const create: Resolver<Report | null, { title: string }> = async (
  parent,
  { title },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  const report: ReportCreate = {
    title,
    organisation: user.organisation,
    slides: [
      {
        _id: new ObjectID(),
        elements: [
          {
            _id: new ObjectID(),
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
  let res = await run((reports) => reports.insertOne(report));
  return run((reports) => reports.findOne({ _id: res.insertedId }));
};

export const remove: Resolver<ObjectID, { id: ObjectID }> = async (
  parent,
  { id },
  { user }
) => {
  if (!user) throw new NotAuthenticatedError();
  await run((reports) => reports.deleteOne({ _id: id }));
  return id;
};

export const removeAll: Resolver<number | null> = async () => {
  let res = await run((reports) => reports.deleteMany({}));
  return res.result.ok ? (res.result.n as number) : null;
};

export const update: Resolver<Report | null, { report: ReportUpdate }> = async (
  parent,
  { report }
) => {
  await run((reports) =>
    reports.updateOne({ _id: report.id }, { $set: report })
  );
  return run((reports) => reports.findOne({ _id: report.id }));
};
