import express from "express";
import cors from "cors";
import UserRoute from "./routes/usersRoute.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use("/users", UserRoute);

// init
app.listen(port, () => {
  console.log(`Running at port ${port}...`);
});
