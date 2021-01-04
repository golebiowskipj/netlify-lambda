require("dotenv").config();
const axios = require("axios");

exports.handler = function (event, context, callback) {
  const API_URL = process.env.API_URL;
  const API_CLIENT_ID = process.env.API_CLIENT_ID;
  const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // send user response
  const send = (body) => {
    callback(null, { statusCode: 200, body: JSON.stringify(body) });
  };

  // perform api call
  const getUsers = () => {
    axios
      .get(URL)
      .then((res) => send(res.data))
      .catch((err) => send(err));
  };

  // make sure method is get
  if (event.httpMethod === "GET") getUsers();
};
