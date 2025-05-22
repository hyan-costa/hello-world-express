import client from "../app";


class UserRepository {
  async getAll() {
    const result = await client.query("SELECT * FROM usuarios");
    return result.rows;
  }

  async getById(id: number) {
    const result = await client.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    return result.rows[0];
  }

  async create(nome: string, email: string) {
    const result = await client.query(
      "INSERT INTO usuarios (nome, email, criado_em) VALUES ($1, $2, NOW()) RETURNING *",
      [nome, email]
    );
    return result.rows[0];
  }

  async update(id: number, nome: string, email: string) {
    const result = await client.query(
      "UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *",
      [nome, email, id]
    );
    return result.rows[0];
  }

  async delete(id: number) {
    const result = await client.query("DELETE FROM usuarios WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
  }
}

export default new UserRepository();