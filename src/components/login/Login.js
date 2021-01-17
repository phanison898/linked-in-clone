import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Logo from "../../assets/images/logo.png";
import Style from "./Style";

const Login = () => {
  const classes = Style();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <div className={classes.login}>
      <img src={Logo} alt="linked-in-logo" className={classes.logo} />
      <h4>Linked-In Clone</h4>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Login;
