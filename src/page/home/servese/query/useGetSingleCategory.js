import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetSingleCategory = (slug) => {
  return useQuery({
    queryKey: ["category", slug],
    queryFn: () =>
      request.get(`/${slug.toLowerCase()}`).then((res) => res.data),
  });
};
