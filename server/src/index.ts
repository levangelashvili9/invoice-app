import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import Invoice from "./models/Invoice";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  const invoices = await Invoice.find();
  res.json(invoices);
});

app.post("/createInvoice", async (req: Request, res: Response) => {
  console.log(req.body);

  const newInvoice = new Invoice(req.body);
  const createdInvoice = await newInvoice.save();

  res.json(createdInvoice);
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log("SERVER RUNS SUCCESSFULLY");
  app.listen(5400);
});
