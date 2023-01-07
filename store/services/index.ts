import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let basePath = process.env.REACT_APP_PUBLIC_URL as string;
export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getUsers: build.mutation({
      query: () => "/api/users/24",
    }),
    postUser: build.mutation({
      query: ({ user }) => {
        return {
          url: "/api/users",
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...user }),
        } as any;
      },
    }),
    putUser: build.mutation({
      query: ({ user }) => {
        return {
          url: `/api/users/${user?.id}`,
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...user }),
        } as any;
      },
    }),
    deleteUserById: build.mutation({
      query: ({ id }) => {
        console.log("id", id);
        return {
          url: `/api/users/delete/${id}`,
          method: "post",
        } as any;
      },
    }),
  }),
});

export const {
  useGetUsersMutation,
  usePostUserMutation,
  useDeleteUserByIdMutation,
  usePutUserMutation,
} = userService;
