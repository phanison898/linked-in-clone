import { useSelector, useDispatch } from "react-redux";
import { ChangeTheme } from "../../store/actions/util";
import Logo from "../../assets/images/logo.png";
import { Paper, Avatar, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import TelegramIcon from "@material-ui/icons/Telegram";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AppsIcon from "@material-ui/icons/Apps";
import MenuItem from "./menuItem/MenuItem";
import Style from "./Style";
import { auth } from "../../firebase";

const Header = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.util);

  const { photoURL } = useSelector((state) => state.user);

  const items = [
    { Icon: <HomeIcon />, title: "Home", arrow: false },
    { Icon: <GroupIcon />, title: "My Network", arrow: false },
    { Icon: <WorkIcon />, title: "Jobs", arrow: false },
    { Icon: <TelegramIcon />, title: "Messaging", arrow: false },
    { Icon: <NotificationsIcon />, title: "Notifications", arrow: false },
    {
      Icon: (
        <Tooltip title="Sign-Out" arrow>
          <Avatar src={photoURL} />
        </Tooltip>
      ),
      title: "Me",
      arrow: true,
      onClick: () => auth.signOut(),
    },
    { Icon: <AppsIcon />, title: "Apps", arrow: true },
  ];

  return (
    <Paper elevation={0} className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
          <img src={Logo} alt="logo" />
          <div className={classes.search}>
            <SearchIcon />
            <input placeholder="Search" />
          </div>
          <Avatar src={photoURL} />
        </div>
        <div className={classes.header__nav}>
          {items.map(({ Icon, title, arrow, onClick }, i) => (
            <MenuItem key={i} Icon={Icon} title={title} arrow={arrow} onClick={onClick} />
          ))}
          <MenuItem
            key={"mode"}
            Icon={mode ? <Brightness4Icon /> : <BrightnessHighIcon />}
            title={"Theme"}
            onClick={() => dispatch(ChangeTheme())}
          />
        </div>
        <Paper className={classes.header__bottom__nav}>
          <HomeIcon />
          <GroupIcon />
          <AddBoxIcon />
          {mode ? (
            <Brightness4Icon onClick={() => dispatch(ChangeTheme())} />
          ) : (
            <BrightnessHighIcon onClick={() => dispatch(ChangeTheme())} />
          )}
          <ExitToAppIcon onClick={() => auth.signOut()} />
        </Paper>
      </div>
    </Paper>
  );
};

export default Header;
