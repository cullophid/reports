export type User = {
  _id: string;
  createdAt: Date;
  email: string;
  firstName: string;
  lastName: string;
};

export type Report = {
  _id: string;
  owner: string;
  width: number;
  height: number;
  title: string;
  createdAt: Date;
  slides: Slide[];
};

export type Slide = {
  id: string;
  charts: Chart[];
};

export type Chart = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};
