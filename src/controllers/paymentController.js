import { instance } from "../../server.js";
import config from "../config/config.js";

//! processPayment controller
export const processPayment = async (req, res) => {
  try {
    //! get the amount from the frontend
    const { amount } = req.body;
    //! create razorpay order options
    //* this object is send directly to razorpay server
    const options = {
      amount: amount * 100, //* convert rupees to paise bcs razorpay accepts money only in the smallest currency unit
      currency: "INR", //* tells the razorpay the currency type
      receipt: `receipt_${Date.now()}`, //* creates a unique reciept id for each transaction
    };
    //! create razorpay order
    //* it sends requests into razorpay server
    //* and it creates and order
    //* razorpay responds with order id, amount, currency and status
    const order = await instance.orders.create(options);
    //! send success message
    res.status(200).json({
      success: true,
      message: "Payment processed successfully",
      order, //* sends the order details to the frontend and frontend uses this order to open the razorpay checkout form
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Payment initialization failed",
    });
  }
};

//! getKey controller
export const getKey = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Key retrieved successfully",
      key: config.RAZOR_KEY_ID,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve key",
    });
  }
};
