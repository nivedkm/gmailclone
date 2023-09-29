import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJRFPsNv1Jn3JV02HODNoq1li3_SuFymdCMKLDdXJIvAoIDsb"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
