export const Login = (user) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: user,
  });
};

export const Logout = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
    payload: {},
  });
};
