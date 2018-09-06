import {dispatch} from "./Store"
import * as Router from "./simpleRouter"

Router.on("/", () => dispatch({type:"Navigate", page: {name: "Home"}}))

Router.on("/reports/:reportId", (location) => dispatch({type:"Navigate", page: {name: "Report", id: location.params.reportId}}))
Router.on("/reports", () => {
   console.log("REPORTS")
  dispatch({type:"Navigate", page: {name: "ReportList"}})
})
