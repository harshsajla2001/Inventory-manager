import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
    }),
    tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],

    endpoints: (build) => ({
        getDashboard: build.query({
            query: () => '/dashboard',
            providesTags: ['DashboardMetrics']
        }),
    }),
});
export const {
    //   useGetDashboardMetricsQuery,
    useGetProductsQuery,
    //   useCreateProductMutation,
    //   useGetUsersQuery,
    //   useGetExpensesByCategoryQuery,
} = api;