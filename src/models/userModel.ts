import client from "../app";


const getUser = async () => {
  const result = await client.query('SELECT * FROM usuarios');
  return result.rows;
};

export default {
  getUser,
};
