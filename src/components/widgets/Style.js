import { makeStyles } from "@material-ui/core/styles";
import { LinkedInBlue, LinkedInLightBlue, darkSecondary, darkPrimary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  widgets: {
    display: "flex",
    flexDirection: "column",
  },
  widgets__top: {
    overflow: "hidden",
    borderRadius: 10,
  },
  heading: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 15px",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 15,
      fontWeight: 600,
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 16,
      color: "grey",
    },
  },
  expand: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "grey",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 13,
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
  },
  widgets__bottom: {
    width: "100%",
    display: "flex",
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    overFlow: "hidden",
    "& > img": {
      width: "100%",
      objectFit: "contain",
      borderRadius: 10,
      cursor: "pointer",
    },
  },
  about__author: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    "& > h4": {
      color: theme.palette.type === "dark" ? LinkedInLightBlue : LinkedInBlue,
    },
    "& > div": {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      "& > a": {
        color: "grey",
        transition: "all 0.4s ease",
        "&:hover": {
          color: theme.palette.type === "dark" ? darkSecondary : darkPrimary,
        },
      },
    },
  },
}));
