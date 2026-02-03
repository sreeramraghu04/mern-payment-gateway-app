import express from "express";
import { getKey, paymentProcess } from "../controllers/paymentController.js";

const router = express.Router();

//! processPayment route (POST)
router.post("/payment-process", paymentProcess);

//! getKey route (GET)
router.get("/get-key", getKey);

export default router;
