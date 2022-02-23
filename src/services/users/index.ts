import { User } from "./types";
import { createUseUserKey } from "./keys";
import { api } from "../global/api";
import { useQuery, UseQueryOptions } from "react-query";

export const useUser = (username: string, options?: UseQueryOptions<User>) => {
  return useQuery(
    createUseUserKey(username),
    () => api.get<User>(`/users/${username}`).then((response) => response.data),
    options
  );
};
