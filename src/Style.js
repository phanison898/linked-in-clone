import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  app: {},
  app__header: {
    height: "7vh",
    display: "flex",
    justifyContent: "center",
  },
  app__body: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    backgroundColor: "#fff9f7",
  },
  body__sidebar: {},
  body__feed: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },
  feed__form: {
    width: "100%",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    height: "auto",
  },

  feed__posts: {
    width: "100%",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    height: "auto",
    paddingBottom: 10,
  },
  body__widgets: {},
}));
