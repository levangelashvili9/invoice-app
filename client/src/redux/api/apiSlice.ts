import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DataTypes } from "../../common/types";
const BASEL_URL = "http://localhost:5400";

// type DataTypes = {
//   _id: any;
//   number: string;
//   name: string;
//   price: string;
//   status: string;
// };

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEL_URL }),
  endpoints: (builder) => ({
    getData: builder.query<DataTypes[], undefined>({
      query: () => "/",
    }),
  }),
});

export const { useGetDataQuery } = invoiceApi;
