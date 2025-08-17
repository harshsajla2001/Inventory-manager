import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import dashboardRoutes from "./routes/dashboardRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("common"));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  console.log("Received a GET request on /");
  res.send("Hello World!");
});

app.use("/api/dashboard", dashboardRoutes); // http://localhost:8000/dashboard
app.use("/api/products", productRoutes); // http://localhost:8000/products
app.use("/api/users", userRoutes); // http://localhost:8000/users
app.use("/api/expenses", expenseRoutes); // http://localhost:8000/expenses

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the app.`);
});

