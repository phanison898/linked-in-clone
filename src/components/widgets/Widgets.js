import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ErrorOutlineSharpIcon from "@material-ui/icons/ErrorOutlineSharp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import HeaderInfo from "../../components/util/HeadLine";
import { LinkedInBlue, LinkedInLightBlue, darkSecondary } from "../../assets/Colors";
import { LinkedInJobAdd } from "../../assets/images/images";

const Style = makeStyles((theme) => ({
  widgets: {
    display: "flex",
    flexDirection: "column",
  },
  widgets__top: { overflow: "hidden" },
  heading: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 15px",
    cursor: "pointer",
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
    "& > div": {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      "& > a": {
        color: "grey",
      },
    },
  },
}));

const Widgets = () => {
  const classes = Style();
  const [expand, setExpand] = useState(false);
  return (
    <div className={classes.widgets}>
      <Paper className={classes.widgets__top}>
        <div className={classes.heading}>
          <h4>LinkedIn News</h4>
          <ErrorOutlineSharpIcon />
        </div>
        {top_1.map((title, i) => (
          <HeaderInfo
            key={`widgets-top_1_${i}`}
            Icon={<FiberManualRecordIcon style={{ color: LinkedInBlue, fontSize: 12 }} />}
            title={title}
            time={1}
            count={1000}
          />
        ))}
        {expand &&
          top_2.map((title, i) => (
            <HeaderInfo
              key={`widgets-top_2_${i}`}
              Icon={<FiberManualRecordIcon style={{ color: LinkedInBlue, fontSize: 12 }} />}
              title={title}
              time={1}
              count={1000}
            />
          ))}
        <div className={classes.expand} onClick={() => setExpand(!expand)}>
          <h4>{expand ? "Show less" : "Show more"}</h4>
          <ExpandMoreIcon style={{ transform: expand ? "rotate(180deg)" : "" }} />
        </div>
      </Paper>
      <Paper className={classes.widgets__bottom}>
        <img src={LinkedInJobAdd} />
      </Paper>
      {/* About Author */}
      <div className={classes.about__author}>
        <h4>Contact Developer</h4>
        <div>
          {author.map(({ src, url }, i) => (
            <a href={`${url}`} key={`author-link-${i}`} rel="noreferrer nofollow" target="_blank">
              {src}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const top_1 = [
  "Google cracks down on loan apps",
  "Byju’s new acquisition",
  "Lost password? That'll be $220M",
  "Tesla gets an India address",
  "India Inc returns gingerly to office",
];

const top_2 = [
  "To Bitcoin or not to Bitcoin",
  "Infosys, Wipro post robust numbers",
  "Longer hours equal less productivity",
  "Fake commute has real benefits",
];

const author = [
  { src: <GitHubIcon />, url: "https://github.com/phanison898" },
  { src: <LinkedInIcon />, url: "https://www.linkedin.com/in/phanison225/" },
  { src: <YouTubeIcon />, url: "https://www.youtube.com/channel/UC4FAldAo2Ow_2F447yggcqA" },
  { src: <InstagramIcon />, url: "https://www.instagram.com/phanison225/" },
  { src: <TwitterIcon />, url: "https://twitter.com/phanison225" },
];

export default Widgets;
