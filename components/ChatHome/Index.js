import * as functions from "firebase-functions";

const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
    "https://api.chatengine.io/users/",
    {
      username: user.email,
      secret: user.uid,
      email: user.email,
      first_name: user.displayName,
    },
    { headers: { "Private-Key": "XXX" } }
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "YYY",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});