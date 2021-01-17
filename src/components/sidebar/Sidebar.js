import React from "react";
import { useSelector } from "react-redux";
import { Paper, Avatar, Divider } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();
  const { photoURL, displayName } = useSelector((state) => state.user);
  return (
    <Paper className={classes.sidebar}>
      <div
        className={classes.cover}
        style={{
          backgroundImage: `url("https://tandsgo.com/wp-content/uploads/2020/02/Abstract-blue-and-orange-pattern.jpg")`,
        }}
      ></div>
      <Avatar src={photoURL} />
      <h4>{displayName}</h4>
      <div className={classes.stats}>
        <div className={classes.stat}>
          <h4>Who viewed your profile</h4>
          <p>5</p>
        </div>
        <div className={classes.stat}>
          <h4>Connections</h4>
          <p>5</p>
        </div>
        <Divider />
        <div className={classes.stat}>
          <LabelImportantIcon style={{ transform: "rotate(-90deg)" }} />
          <h4>My Items</h4>
        </div>
      </div>
    </Paper>
  );
};

export default Sidebar;
