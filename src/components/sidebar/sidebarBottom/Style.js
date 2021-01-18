import { makeStyles } from "@material-ui/core/styles";
import { LinkedInBlue, LinkedInLightBlue, darkSecondary } from "../../../assets/Colors";

export default makeStyles((theme) => ({
  sidebarBottom: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  heading: {
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    cursor: "pointer",
    "& > .MuiSvgIcon-root": {
      transition: "all 0.4s ease",
      color: "grey",
      "&:hover": {
        borderRadius: 999,
        backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
      },
    },
    "& > h4": {
      color: theme.palette.type === "dark" ? LinkedInLightBlue : LinkedInBlue,
      transition: "all 0.4s ease",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  discover__more: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
  },
}));
