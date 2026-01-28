import express from "express";
import morgan from "morgan";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

//! middleware
app.use(express.json());
app.use(morgan("dev"));

//! routes
app.use("/api/v1/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Payment-Gateway");
});

export default app;
