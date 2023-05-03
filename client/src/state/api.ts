import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Api {
  [key: string]: unknown;
}

export const api: Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});
export const { useGetKpisQuery } = api;
