import { makeStyles } from "@material-ui/core/styles";
import { darkSecondary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "0 13vw",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5vh",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    borderRadius: 0,
  },
  header__logo: {
    flex: 4,
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    "& > img": {
      height: 32,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  search: {
    width: "60%",
    height: "65%",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    padding: "0 10px",
    borderRadius: 3,
    backgroundColor: theme.palette.type === "dark" ? darkSecondary : "#eef3f8",
    overflow: "hidden",
    "& > input": {
      height: "100%",
      marginLeft: 5,
      border: 0,
      outlineWidth: 0,
      color: theme.palette.type === "dark" && "lightgrey",
      backgroundColor: "transparent",
      "&::placeholder": {
        color: theme.palette.type === "dark" && "grey",
      },
    },
  },
  header__nav: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    flex: 6,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    "& > div": {
      flex: 1,
    },
    "& > div:nth-child(6)": {
      borderRight: "1px solid lightgrey",
    },
    [theme.breakpoints.down("xs")]: {
      "& > div:nth-child(2n+1)": {
        display: "none",
      },
    },
  },
}));
