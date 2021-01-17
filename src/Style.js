import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  app: {},

  app__header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: "7vh",
    display: "flex",
    justifyContent: "center",
  },

  app__body: {
    minHeight: "93vh",
    display: "flex",
    justifyContent: "center",
  },

  body__sidebar: {
    paddingTop: 30,
  },

  body__feed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },

  feed__form: {
    width: "100%",
    height: "auto",
  },

  feed__posts: {
    width: "100%",
    height: "auto",
  },

  body__widgets: {
    paddingTop: 30,
  },
}));
