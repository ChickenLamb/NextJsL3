import React from "react";
var axios = require("axios");

export default async function API(method, path, token, data) {
  try {
    let res = await axios({
      method: method,
      url: "https://api.l3education.com.my" + path,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: data,
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
