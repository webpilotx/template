import "dotenv/config";
import express from "express";
import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.use(express.static("dist"));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
