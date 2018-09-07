import {dispatch} from "./store"
import createRouter from "@oolon/router.js"


export const router = createRouter()

export const init = () => {
  router.add("/login", () => dispatch({type:"Navigate", page: {name: "Login", email:""}}))

  router.add("/", () => 
    dispatch({type:"Navigate", page: {name: "Home"}})
  )
  router.add("/reports", (location) => dispatch({type:"Navigate", page: {name: "ReportList"}}))
  router.add("/reports/new", (location) => dispatch({type:"Navigate", page: {name: "CreateReport"}}))
  router.add("/reports/:reportId", (location) => dispatch({type:"Navigate", page: {name: "Report", id: location.params.reportId}}))
  router.replace(window.location.pathname + window.location.hash + window.location.search)
}