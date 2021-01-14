import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Hidden } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import LoginPage from "./components/login/Login";
import Header from "./components/header/Header";
import { Login, Logout } from "./store/actions/auth";
import { auth } from "./firebase";
import Styles from "./Style";

const App = () => {
  const classes = Styles();
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
        dispatch(Login(authUser));
      } else {
        dispatch(Logout());
      }
    });
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      {!displayName ? (
        <LoginPage />
      ) : (
        <Grid container className={classes.app}>
          <Grid item container className={classes.app__header}>
            {/* Header */}
            <Header />
          </Grid>
          <Grid item container className={classes.app__body}>
            <Hidden smDown>
              <Grid item className={classes.body__sidebar} md={2}>
                {/* Sidebar */}
                sidebar
              </Grid>
            </Hidden>
            <Grid item className={classes.body__feed} xs={12} sm={8} md={5}>
              {/* Feed */}
              feed
            </Grid>
            <Hidden smDown>
              <Grid item className={classes.body__widgets} md={2}>
                {/* Widgets */}
                widgets
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      )}
    </ThemeProvider>
  );
};

export default App;
