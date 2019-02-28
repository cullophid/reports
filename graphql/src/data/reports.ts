import { collection } from "../mongo";
import { Resolver, ID } from "../Types";
import uuid from "uuid/v4";
import Dataloader from "dataloader";
import { groupBy, keyBy } from "lodash";

const run = collection("reports");

export type Report = {
  _id: ID;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  slides: Slide[];
  owner: ID;
};

export type Slide = {
  id: ID;
  elements: SlideElement[];
};

type ReportUpdate = {
  id: ID;
  title?: string;
  slides?: Slide[];
  owner?: ID;
};

type ReportCreate = {
  title: string;
  owner: ID;
};

export type SlideElement = {
  id: ID;
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
  datastore: ID;
  query: string;
  xAxis: string;
  yAxis: string;
};

const ownerLoader = new Dataloader<string, Report[]>(async (owners) => {
  const reports = await run<Report[]>((reports) =>
    reports.find({ owner: { $in: owners } }).toArray()
  );
  const indexed = groupBy(reports, (report) => report.owner);
  return owners.map((owner) => indexed[owner] || []);
});

export const listByOwner = ownerLoader.load;

const idLoader = new Dataloader<string, Report | undefined>(async (ids) => {
  const reports = await run<Report[]>((reports) =>
    reports.find({ _id: { $in: ids } }).toArray()
  );
  const indexed = keyBy(reports, (report) => report._id);
  return ids.map((id) => indexed[id]);
});

export const get = idLoader.load;

export const create = async (report: ReportCreate) => {
  const createdAt = new Date();
  const updatedAt = new Date();
  const newReport: Report = {
    ...report,
    _id: uuid(),
    createdAt,
    updatedAt,
    slides: []
  };
  let res = await run((reports) => reports.insertOne(newReport));
  console.log("Created new report", res);
  return newReport;
};

export const remove = async (id: string) => {
  await run((reports) => reports.deleteOne({ _id: id }));
  return id;
};

export const removeAll = async (owner: ID) => {
  let res = await run((reports) => reports.deleteMany({ owner }));
  return res.result.ok ? (res.result.n as number) : null;
};

export const update = async (report: ReportUpdate) => {
  await run((reports) =>
    reports.updateOne({ _id: report.id }, { $set: report })
  );
  return run((reports) => reports.findOne({ _id: report.id }));
};
