import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export const sendAuth = async (email: string, token: string) => {
  if (!SENDGRID_API_KEY) throw new Error("Missing Env Var SENDGRID_API_KEY");

  const html = /*html*/ `
 <html>
  <head>
    <style>
      body,
      html {
        background: #f5f5f5;
        margin: 0;
      }
      body {
        padding: 60px;
      }
      h1 {
        font-family: sans-serif;
        text-align: center;
        font-weight: 300;
      }
      p {
        font-family: sans-serif;
        text-align: center;
        margin: 20px auto;
      }
      .login, .login:visited {
        display: block;
        width: 200px;
        margin: 20px auto;
        padding: calc(10px + 0.15em) 50px 10px 50px;
        box-sizing: border-box;
        font-size: 24px;
        color: white;
        background: linear-gradient(
          139.94deg,
          #ee32fe 9.3%,
          rgba(233, 140, 0, 0.99) 92.57%
        );
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 1000px;
        text-decoration: none;
        font-family: sans-serif;
        text-align: center;
        font-weight: 300;
      }
    </style>
  </head>

  <body>
    <h1>Welcome to reports!</h1>
    <p>To log in click the button below!</p>
    <a class="login" href="http://localhost:1234?accessToken=${token}"
      >LOG IN</a
    >
  </body>
</html>
  `;

  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "test@example.com",
    subject: "Your Magic link to Reports",
    text: `User this link to login to your reports account \n http://localhost:1234?accessToken=${token}`,
    html
  };
  let [response, other] = await sgMail.send(msg);

  console.log("res", response.statusCode, response.statusMessage);
};
