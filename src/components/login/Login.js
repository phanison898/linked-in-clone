import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { auth, provider } from "../../firebase";
import { Login } from "../../store/actions/auth";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/images/logo.png";
import Style from "./Style";

const LoginPage = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(Login(result.user));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <img src={Logo} alt="linked-in-logo" className={classes.logo} />
      <h4>Linked-In Clone</h4>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      {/* <Button onClick={login}>Login with Google</Button> */}
    </div>
  );
};

export default LoginPage;
