import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';/* React-specific entry point that automatically generates hooks corresponding to the defined endpoints */


const baseApi = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder)=>({}),
});

export default baseApi;