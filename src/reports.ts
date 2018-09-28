export type ReportTemplate = "TitleSlide" | "TwoColumn";
export type Slide = {
  template: ReportTemplate;
  title: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
};

export type Report = {
  id: number;
  title: string;
  slides: Slide[];
};

export const createReport = (): Report => ({
  id: Math.round(Math.random() * 10000),
  title: "Untitled",
  slides: [
    {
      template: "TitleSlide",
      title: "Untitled",
      subtitle: "Subtitle",
      primaryText: "Primary Text",
      secondaryText: "Secondary Text"
    }
  ]
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
