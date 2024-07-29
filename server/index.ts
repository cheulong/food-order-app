import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/", (req, res) => {
  return res.json("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});