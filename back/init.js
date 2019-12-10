/* eslint-disable no-undef */
import app from "./index";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 8000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
