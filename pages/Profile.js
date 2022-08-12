import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import Dashboard from "../src/Dashboard/Dashboard.js";
import RegisterForm from "../src/RegisterForm.js";
import API from "../src/API.js";
import Head from "next/head";
function Profile() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [NewUser, setNewUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userGroup, setUserGroup] = useState(null);
  function newUserState(state) {
    setNewUser(state);
  }
  useEffect(() => {
    // Accessing the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setToken(user.signInUserSession.accessToken.jwtToken);
        setUser(user);
        setUserGroup(
          user.signInUserSession.accessToken.payload["cognito:groups"][0]
        );
        console.log("User: ", user);
      })
      .catch((err) => setUser(null));
  }, []);
  useEffect(() => {
    if (token !== null) {
      console.log("Token: ", token);

      API("get", "/student/get", token).then((res) => {
        // console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          console.log("New User Detected");
          setNewUser(true);
        } else if (res.status == 200 && res.message === "FOUND") {
          setUserData(res.data);
        }
      });

      // use API as a function to call API anywhere
    }
  }, [token]);
  return (
    <div>
      <Head>
        <title>ALL COURSES </title>
      </Head>
      {/*when click Dashboard's sideBar Link then do refresh state and call api after refresh complete */}
      {/* if role is teacher change RegisterForm api post */}

      {token && !NewUser && userData && (
        <Dashboard userData={userData} token={token} />
      )}
      {token && user && NewUser && (
        <RegisterForm
          status={NewUser}
          user={user}
          token={token}
          newUserState={newUserState}
        />
      )}
    </div>
  );
}

export default withAuthenticator(Profile);
