import express from "express";
import morgan from "morgan";
import paymentRoutes from "./routes/paymentRoutes.js";
import cors from "cors";

const app = express();

//! middleware
app.use(cors()); //* always cors must be in top
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); //* to print req.body in frontend

//! routes
app.use("/api/v1/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Payment-Gateway");
});

export default app;
