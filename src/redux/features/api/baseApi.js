import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';/* React-specific entry point that automatically generates hooks corresponding to the defined endpoints */


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({ 
            query: () => ({
                url: '/posts',
            }),
        }),
        getUsers: builder.query({
            query: () => '/users', // get query "url" charao direct lekha jay.
        }), 
        getPostById: builder.query({ 
            query: (id) => `/posts/${id}`,// Only one parameter can send like (id). So best to send an object
        }),

    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = baseApi;

export default baseApi;