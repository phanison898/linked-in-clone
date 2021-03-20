import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Write from "./components/write/Write";
import { LoginAction, LogoutAction } from "./store/actions/auth";
import { auth } from "./firebase";
import { Route } from "react-router-dom";

const App = () => {
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

  return (
    <ThemeProvider theme={muiTheme}>
      {!displayName ? (
        <Login />
      ) : (
        <>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/write" component={Write} />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
