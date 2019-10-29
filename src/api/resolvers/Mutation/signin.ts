import { MutationResolvers } from "../../../codegen/api";
import { createTransport } from "nodemailer";
import { createSigninToken } from "../../helpers/jwt";
const GMAIL_PASS = process.env.GMAIL_PASS;
const GMAIL_USER = process.env.GMAIL_USER;

export const signin: MutationResolvers["signin"] = async (_, { email }) => {
  console.log("SIGN IN");
  const emailTransport = createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  const signin_token = await createSigninToken(email);

  console.log({ signin_token });
  const res = await emailTransport.sendMail({
    from: "andreas.moller@gmail.com",
    to: email,
    subject: "Sign in to Reports", // Subject line
    html: `
      <a href="${process.env.ORIGIN}/api/auth?signin_token=${signin_token}">Sign In</a>
    ` // plain text body
  });
  console.log({ res });
  return "OK";
};
