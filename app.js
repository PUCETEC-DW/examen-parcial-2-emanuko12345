
import express from "express";
import router from "./routes/routes";

const app = express();

app.use(express.json());

app.use(router)


app.listen(3000, () => {
  console.log("Listos para recibir una petición");
});
