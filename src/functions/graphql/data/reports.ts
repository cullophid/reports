import { collection } from "../mongo";
import { ObjectId, ObjectID } from "bson";
import { fetchDatastore } from "./datastores";
import uuid from "uuid/v4";
const run = collection("reports");

type SlideElement = {
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

type SlideChart = {
  dataStore: ObjectID;
  query: string;
  xAxis: string;
  yAxis: string;
};

type Slide = {
  id: string;
  elements: SlideElement[];
};

type Report = {
  _id: ObjectID;
  title: string;
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

export const reportResolver = {
  id: ({ _id }: Report) => _id.toHexString()
};
export const slideChartResolver = {
  dataStore: ({ dataStore }: SlideChart) =>
    fetchDatastore(dataStore.toHexString())
};

export const fetchReports = () => run((reports) => reports.find({}).toArray());

export const fetchReport = (id: string) =>
  run((reports) => reports.findOne({ _id: new ObjectId(id) }));

export const createReport = async (title: string) => {
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

export const deleteReport = async (id: string) => {
  await run((reports) => reports.deleteOne({ _id: new ObjectId(id) }));
  return id;
};
export const deleteAllReports = async () => {
  await run((reports) => reports.deleteMany({}));
  return "Ok";
};

export const updateReport = async (report: ReportUpdate) => {
  await run((reports) =>
    reports.updateOne({ _id: new ObjectId(report.id) }, { $set: report })
  );
  return { ...report, _id: new ObjectId(report.id) };
};
