import { createUseReposKey } from "./keys";
import { api } from "../global/api";
import { useQuery, UseQueryOptions } from "react-query";
import { Repo } from "./types";

export const useRepos = (
  username: string,
  options?: UseQueryOptions<Repo[]>
) => {
  return useQuery(
    createUseReposKey(username),
    () =>
      api
        .get<Repo[]>(`/users/${username}/repos?&per_page=10`)
        .then((response) => response.data),
    options
  );
};
