export type ReportPage = {
  title: string;
  text: {
    [key: string]: string;
  };
};

export type Report = {
  id: number;
  title: string;
  frontPage: ReportPage;
  pages: ReportPage[];
};

export const createReport = (): Report => ({
  id: Math.round(Math.random() * 10000),
  title: "Untitled",
  frontPage: {
    title: "Untitled",
    text: {
      subtitle: "Subtitle"
    }
  },
  pages: []
});
export const fetchReports = (): Promise<{ [id: string]: Report }> =>
  new Promise((resolve, reject) => {
    let reports = localStorage.getItem("reports");
    if (reports === null) {
      return resolve({});
    }
    resolve(JSON.parse(reports));
  });

export const saveReport = async (report: Report) => {
  let reports = await fetchReports();
  localStorage.setItem(
    "reports",
    JSON.stringify({ ...reports, [report.id]: report })
  );
};
