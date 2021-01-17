import { makeStyles } from "@material-ui/core/styles";
import { LinkedInBlue } from "../../assets/Colors";

export default makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    "& > .MuiAvatar-root": {
      width: "30%",
      height: "auto",
      marginTop: -40,
    },
    "& > h4": {
      margin: "10px 0",
    },
  },
  cover: {
    width: "100%",
    height: "75px",
    opacity: 0.75,
  },
  stats: {
    width: "100%",
  },
  stat: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "grey",
    padding: 5,
    cursor: "pointer",
    transition: "all 0.4s ease",
    "& > p": {
      fontWeight: 600,
      color: LinkedInBlue,
    },
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
}));
