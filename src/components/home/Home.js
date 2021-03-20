import React from "react";
import { useSelector } from "react-redux";
import { Grid, Hidden } from "@material-ui/core";
import Header from "../header/Header";
import Form from "../form/Form";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";
import { LinkedInBgColor, darkPrimary } from "../../assets/Colors";
import Styles from "./Style";

const Home = () => {
  const classes = Styles();

  const mode = useSelector((state) => state.util);

  return (
    <>
      <Grid
        container
        className={classes.app}
        style={{ backgroundColor: mode ? darkPrimary : LinkedInBgColor }}
      >
        <Grid
          item
          container
          className={classes.app__header}
          style={{
            boxShadow: mode && "0px 5px 10px -10px rgba(0,0,0,0.75)",
          }}
        >
          {/* Header */}
          <Header />
        </Grid>
        <Grid item container className={classes.app__body}>
          <Hidden smDown>
            <Grid item className={classes.body__sidebar} md={2}>
              {/* Sidebar */}
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
            {/* Feed */}
            <Grid item className={classes.feed__form}>
              <Form />
            </Grid>
            <Grid item className={classes.feed__posts}>
              <Posts />
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item className={classes.body__widgets} md={3}>
              {/* Widgets */}
              <Widgets />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
