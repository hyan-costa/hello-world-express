import express from "express";
import { Client } from "pg";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./routers/userRouters"; // certifique-se que o caminho está correto
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const client = new Client({
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT as string),
  user: process.env.PG_USER,
  password: String(process.env.PG_PASSWORD),
  database: String(process.env.PG_DATABASE),
});

client.connect();

app.get("/", async (req, res) => {
  try {
    const result = await client.query("SELECT NOW()");
    res.send(`Banco de dados conectado: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send("Erro ao conectar ao banco de dados");
  }
});



app.use("/api", userRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default client;
