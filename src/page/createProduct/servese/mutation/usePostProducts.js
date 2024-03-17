import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostProducts = (datakey) => {
  return useMutation({
    queryKey: ["category"],
    mutationFn: (data) =>
      request.post(`/${datakey}`, data).then((res) => res.data),
  });
};
