import { Sequelize } from "sequelize";

// ("database_name", "username_db", "password_db", {})
const db = new Sequelize("crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
