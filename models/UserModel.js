import Sequelize from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTaleName: true,
  }
);

export default User;

// generate table, if users table doesn't exist at database
(async () => {
  await db.sync();
})();
