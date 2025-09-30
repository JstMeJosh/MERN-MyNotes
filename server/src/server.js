import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { CONNECTDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

//middleware
app.use(express.json()); //parse the json bodies req.body
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/notes", noteRoutes);
const PORT = process.env.PORT || 5001;

CONNECTDB().then(() => {
  app.listen(5001, () => {
    console.log("server running on port ", PORT);
  });
});
