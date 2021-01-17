import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 5px",
    color: "#6e6e6e",
    cursor: "pointer",
    transition: "all 0.4s ease",
    "& > .MuiSvgIcon-root": {
      [theme.breakpoints.down("sm")]: {
        fontSize: 24,
      },
      fontSize: 30,
    },
    "& > .MuiAvatar-root": {
      [theme.breakpoints.down("sm")]: {
        width: 20,
        height: 20,
      },
      width: 25,
      height: 25,
    },
    "&:hover": {
      color: "black",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 2px",
    "& > p": {
      fontSize: 12,
      fontWeight: 400,
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 20,
    },
  },
}));
