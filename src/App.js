import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Grid, Hidden } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
// import Header from "./components/header/Header";
// import Form from "./components/form/Form";
// import Posts from "./components/posts/Posts";
// import Sidebar from "./components/sidebar/Sidebar";
// import Widgets from "./components/widgets/Widgets";
import { LoginAction, LogoutAction } from "./store/actions/auth";
import { auth } from "./firebase";
// import Styles from "./Style";
// import { LinkedInBgColor, darkPrimary } from "./assets/Colors";
import { Route } from "react-router-dom";

const App = () => {
  // const classes = Styles();

  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.user);

  const mode = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(LoginAction(authUser));
      } else {
        dispatch(LogoutAction());
      }
    });
  }, []);

  return <ThemeProvider theme={muiTheme}>{!displayName ? <Login /> : <Home />}</ThemeProvider>;
};

export default App;
