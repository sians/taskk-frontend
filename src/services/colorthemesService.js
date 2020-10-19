import client from "./client";

const getColorthemes = () => {
  return client.get("/colorthemes");
};

export default { getColorthemes, client };
