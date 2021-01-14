import { useSelector, useDispatch } from "react-redux";
import { ChangeTheme } from "../../store/actions/util";
import { Logout } from "../../store/actions/auth";
import Logo from "../../assets/images/logo.png";
import { Paper, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import AppsIcon from "@material-ui/icons/Apps";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Style from "./Style";
import { auth } from "../../firebase";

const Header = () => {
  const classes = Style();

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.util);

  const { photoURL } = useSelector((state) => state.user);

  const toggleTheme = () => {
    dispatch(ChangeTheme());
  };

  return (
    <Paper elevation={0} className={classes.header}>
      <div className={classes.header__logo}>
        <img src={Logo} alt="logo" />
        <div className={classes.search}>
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className={classes.header__nav}>
        <div className={classes.nav__links}>
          <HomeIcon />
          <h4>Home</h4>
        </div>
        <div className={classes.nav__links}>
          <GroupIcon />
          <h4>My Network</h4>
        </div>
        <div className={classes.nav__links}>
          <WorkIcon />
          <h4>Jobs</h4>
        </div>
        <div className={classes.nav__links}>
          <MessageIcon />
          <h4>Messaging</h4>
        </div>
        <div className={classes.nav__links}>
          <NotificationsIcon />
          <h4>Notifications</h4>
        </div>
        <div className={classes.nav__links} onClick={toggleTheme}>
          {mode ? <Brightness4Icon /> : <BrightnessHighIcon />}
          <h4>Brightness</h4>
        </div>
        <div className={classes.nav__links} onClick={() => auth.signOut()}>
          <Avatar src={photoURL} />
          <h4>
            Me <ArrowDropDownIcon />
          </h4>
        </div>
        <div className={classes.nav__links}>
          <AppsIcon />
          <h4>
            Work
            <ArrowDropDownIcon />
          </h4>
        </div>
      </div>
    </Paper>
  );
};

export default Header;
