import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetsettinggs = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: () => request.get("/cities").then((res) => res.data),
  });
};
