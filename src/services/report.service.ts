export type ReportPage = {
  title: string;
  text: string[];
};

export type Report = {
  id: number;
  name: string;
  pages: ReportPage[];
};

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
