import { config } from "dotenv"
if (process.env.NODE_ENV === "development") {
  config()
}
export const JWT_SECRET = process.env.JWT_SECRET

export const GMAIL_PASS = process.env.GMAIL_PASS
export const GMAIL_USER = process.env.GMAIL_USER

