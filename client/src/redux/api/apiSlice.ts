import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEL_URL = "http://localhost:5400";

type DataTypes = {
  _id: any;
  title: string;
};

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEL_URL }),
  endpoints: (builder) => ({
    getData: builder.query<DataTypes, undefined>({
      query: () => "/",
    }),
  }),
});

export const { useGetDataQuery } = invoiceApi;
