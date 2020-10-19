import client from "./client";

const getTasks = () => {
  return client.get("/tasks");
};

export default { getTasks, client };
