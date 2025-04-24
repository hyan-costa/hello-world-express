import userModel from '../models/userModel';

const getUser = async (req: any, res: any) => {
  try {
    console.log("dsafsdfsd");
    
    const user = await userModel.getUser();
    console.log("heloooo");
    
    res.json(user);
  } catch (err) {
    res.status(500).send('Erro ao buscar usuário');
  }
};

export default { getUser };
