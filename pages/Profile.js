import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Button from "@mui/material/Button";
import Link from "../src/Link";
import Dashboard from "../src/Dashboard/Dashboard.js";
import RegisterForm from "../src/RegisterForm.js";
var axios = require("axios");

function Profile() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [NewUser, setNewUser] = useState(false);
  async function API(method, path, token) {
    try {
      let res = await axios({
        method: method,
        url: "https://api.l3education.com.my" + path,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    // Accessing the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setToken(user.signInUserSession.accessToken.jwtToken);
        setUser(user);
        console.log("User: ", user);
      })
      .catch((err) => setUser(null));
  }, []);
  useEffect(() => {
    if (token !== null) {
      console.log("Token: ", token);
      // use API as a function to call API anywhere
      API("get", "/student/get", token).then((res) => {
        // console.log(res);
        if (res.status === 200 && res.message === "NOT FOUND") {
          console.log("New User Detected");
          setNewUser(true);
        }
      });
    }
  }, [token]);
  return (
    <div>
      {/* <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <button onClick={signOut}>Sign Out</button>

      {user && (
        <h1>
          Welcome, {user.attributes.email}
          <br />
          group:{user.signInUserSession.accessToken.payload["cognito:groups"]}
          <br />
          token:
          <br />
          {user.signInUserSession.accessToken.jwtToken}
        </h1>
      )} */}

      {!NewUser && <Dashboard />}
      {NewUser && <RegisterForm status={NewUser} user={user} />}
    </div>
  );
}

export default withAuthenticator(Profile);
