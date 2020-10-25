import client from "./client";

const getTasks = () => {
  return client.get("/tasks");
};

const updateTask = (id, payload) => {
  return client.put(`/tasks/${id}`, {
    task: payload
  })
}

export default { 
  getTasks, 
  updateTask,
  client 
};
