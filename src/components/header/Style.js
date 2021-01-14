import { makeStyles } from "@material-ui/core/styles";

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
  },
  search: {
    width: "60%",
    height: "60%",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    padding: "0 10px",
    borderRadius: 3,
    backgroundColor: "lightgrey",
    overflow: "hidden",
    "& > input": {
      height: "100%",
      marginLeft: 5,
      border: 0,
      outlineWidth: 0,
      backgroundColor: "transparent",
    },
  },
  header__nav: {
    flex: 6,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
  },
  nav__links: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover *": {
      color: "black",
    },
    "& > h4": {
      fontSize: 13,
      display: "flex",
      alignItems: "center",
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 30,
      color: "grey",
      transition: "color 0.4s ease",
    },
    "& > .MuiAvatar-root": {
      marginTop: 7,
      width: 28,
      height: 28,
    },
  },
}));
