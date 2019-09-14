import { MutationResolvers } from "../../codegen/graphql";
import { createTransport } from "nodemailer"


import { GMAIL_USER, GMAIL_PASS } from "../../helpers/config"
import { createSigninToken } from "../../helpers/jwt";

export const signin: MutationResolvers["signin"] = async (_, { email }) => {
  const emailTransport = createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });

  const signin_token = await createSigninToken(email)

  console.log({ signin_token })
  const res = await emailTransport.sendMail({
    from: 'andreas.moller@gmail.com',
    to: email,
    subject: 'Sign in to Reports', // Subject line
    html: `
      <a href="http://localhost:3000/api/auth?signin_token=${signin_token}">Sign In</a>
    `// plain text body
  })
  console.log({ res })
  return "OK"
}