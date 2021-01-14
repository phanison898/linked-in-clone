import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  app: {},
  app__header: {
    height: "7vh",
    display: "flex",
    justifyContent: "center",
  },
  app__body: {
    height: "93vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  },
  body__sidebar: {
    backgroundColor: "green",
  },
  body__feed: {
    backgroundColor: "yellow",
  },
  body__widgets: {
    backgroundColor: "pink",
  },
}));
