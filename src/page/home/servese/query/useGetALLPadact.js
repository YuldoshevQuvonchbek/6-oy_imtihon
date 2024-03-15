import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetALLPadact = (category, id) => {
  return useQuery({
    queryKey: ["ALL-category", category],
    queryFn: () =>
      request.get(`/${category.toLowerCase()}/${id}`).then((res) => {
        return res.data;
      }),
  });
};
