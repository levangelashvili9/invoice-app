type ItemTypes = {
  itemName: string;
  quantity: number;
  price: number;
};

export type DataTypes = {
  _id?: any;
  addressFrom: string;
  cityFrom: string;
  postCodeFrom: number;
  countryFrom: string;
  nameTo: string;
  emailTo: string;
  addressTo: string;
  cityTo: string;
  postCodeTo: number;
  countryTo: string;
  date: Date;
  paymentTerms: string;
  description: string;
  items: ItemTypes[];
  status: string;
};
