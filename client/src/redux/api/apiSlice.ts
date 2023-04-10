import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DataTypes } from "../../common/types";
const BASEL_URL = "http://localhost:5400";

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEL_URL }),
  tagTypes: ["Invoices"],
  endpoints: (builder) => ({
    getData: builder.query<DataTypes[], void>({
      query: () => "/",
      providesTags: ["Invoices"],
    }),
    addInvoice: builder.mutation<DataTypes, DataTypes>({
      query: (invoice) => ({
        url: "/createInvoice",
        method: "POST",
        body: invoice,
      }),
      invalidatesTags: ["Invoices"],
    }),
  }),
});

export const { useGetDataQuery, useAddInvoiceMutation } = invoiceApi;
