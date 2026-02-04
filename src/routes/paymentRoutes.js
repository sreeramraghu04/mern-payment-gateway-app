import express from "express";
import {
  getKey,
  paymentProcess,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

//! processPayment route (POST)
router.post("/payment-process", paymentProcess);

//! getKey route (GET)
router.get("/get-key", getKey);

//! paymentVerification (POST)
router.post("/payment-verification", paymentVerification);

export default router;
