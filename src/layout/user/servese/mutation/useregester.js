import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const Useregester = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
  });
};
