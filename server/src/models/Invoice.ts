import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  title: String,
});

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema);

export default InvoiceModel;
