import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) throw new Error("Missing Env Var SENDGRID_API_KEY");

export const sendAuth = async (email: string, token: string) => {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "test@example.com",
    subject: "Your Magic link to Reports",
    text: `User this link to login to your reports account \n http://localhost:1234?accessToken=${token}`,
    html: `Click <a href="http://localhost:1234?accessToken=${token}"><em>here</em></a> to login to your reports account.`
  };
  let [response, other] = await sgMail.send(msg);

  console.log("res", response.statusCode, response.statusMessage);
};
