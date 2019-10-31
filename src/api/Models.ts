export type User = {
  id: string;
  createdAt: Date;
  email: string;
  firstName: string;
  lastName: string;
};

export type Report = {
  id: string;
  ownerId: string;
  width: number;
  height: number;
  title: string;
  createdAt: Date;
};

export type Slide = {
  id: string;
  reportId: string;
};

export type Chart = {
  id: string;
  slideId: string;
  x: number;
  y: number;
  width: number;
  height: number;
};
