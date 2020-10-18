import client from "./client";

const getPanels = () => {
  return client.get("/panels");
};

export default { getPanels, client };
