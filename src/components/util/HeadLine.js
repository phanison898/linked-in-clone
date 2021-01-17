import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";
import { darkSecondary } from "../../assets/Colors";

const HeadLine = ({ Icon, title, time, count, subTitle }) => {
  const Style = makeStyles((theme) => ({
    headLine: {
      display: "flex",
      flexDirection: "column",
      padding: "5px 10px",
      cursor: "pointer",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
      },
    },
    top: {
      display: "flex",
      alignItems: "center",
      "& > h4": {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: time || subTitle ? 500 : 400,
        color: !(time || subTitle) && "grey",
      },
    },
    bottom: {
      display: "flex",
      alignItems: "center",
      marginTop: 5,
      paddingLeft: 12,
      "& > h4": {
        fontSize: 12,
        fontWeight: 400,
        color: "grey",
      },
      "& > .MuiSvgIcon-root": {
        fontSize: 6,
        color: "grey",
        margin: "0 5px",
      },
    },
  }));
  const classes = Style();

  return (
    <div className={classes.headLine}>
      <div className={classes.top}>
        {Icon}
        <h4>{title}</h4>
      </div>
      <div className={classes.bottom}>
        {time && (
          <>
            <h4>{time}d ago</h4>
            <FiberManualRecordIcon />
          </>
        )}
        {count && <h4>{count} readers</h4>}
        {subTitle && <h4>{subTitle}</h4>}
      </div>
    </div>
  );
};

export default HeadLine;
