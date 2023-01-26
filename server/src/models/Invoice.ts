import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  number: String,
  name: String,
  price: String,
  status: String,
});

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema);

export default InvoiceModel;
