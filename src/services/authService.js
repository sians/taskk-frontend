import client from "./client";

const postUserLogin = ({ email, password }) => {
  return client.post("sign_in", {
    user: {
      email,
      password
    }
  });
};

export default { postUserLogin, client };
