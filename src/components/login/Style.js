import { makeStyles } from "@material-ui/core/styles";
import { LinkedInBlue } from "../../assets/Colors";

export default makeStyles((theme) => ({
  login: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: "20px 0",
    },
    "& > h4": {
      color: LinkedInBlue,
      fontSize: 26,
      fontWeight: 800,
    },
  },
  logo: {
    height: "100px",
  },
}));
