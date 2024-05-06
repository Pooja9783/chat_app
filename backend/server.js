import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDb from "./db/connectToMongoDb.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //To parser the incoming requests with json payloads (from req.body)
app.use(cookieParser()); //To access the cookie

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes )
app.use("/api/users", userRoutes )


// app.get("/", (req, res) => {
//   res.send("Welcome!!");
// });

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Port is listening on ${PORT}`);
});