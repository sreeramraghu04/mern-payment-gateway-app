import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  RAZOR_KEY_ID: process.env.RAZOR_KEY_ID,
  RAZOR_KEY_SECRET: process.env.RAZOR_KEY_SECRET,
};

export default config;
