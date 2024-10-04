import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import userRoutes from "./routes/userRoutes";
import homeRoutes from "./routes/homeRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions: any = {
  origin: [process.env.FRONTEND_URL, "http://localhost:4000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/user", userRoutes);
app.use("/home", homeRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
