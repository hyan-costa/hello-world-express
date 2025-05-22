import UserRepository from "../models/userDAO";

const getUser = async (req: any, res: any) => {
  try {
    const users = await UserRepository.getAll(); // Aqui você chama o repositório
    res.json(users);
  } catch (err) {
    res.status(500).send("Erro ao buscar usuário");
  }
};

export default { getUser };
