import express from "express";
import { getKey, processPayment } from "../controllers/paymentController.js";

const router = express.Router();

//! processPayment route (POST)
router.post("/process-payment", processPayment);

//! getKey route (GET)
router.get("/get-key", getKey);

export default router;
