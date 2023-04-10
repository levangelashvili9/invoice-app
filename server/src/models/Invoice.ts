import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  addressFrom: String,
  cityFrom: String,
  postCodeFrom: Number,
  countryFrom: String,
  nameTo: String,
  emailTo: String,
  addressTo: String,
  cityTo: String,
  postCodeTo: Number,
  countryTo: String,
  date: Date,
  paymentTerms: String,
  description: String,
  items: [
    {
      itemName: String,
      quantity: Number,
      price: Number,
    },
  ],
  status: String,
});

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema);

export default InvoiceModel;
