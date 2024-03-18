import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useUserGet = () => {
  return useQuery({
    queryKey: ["people"],
    queryFn: () => request.get("/people").then((res) => res.data),
  });
};
