"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export function usePosts(isEnabled: boolean) {
  return useQuery({
    queryKey: ["posts"], // query key
    queryFn: async () => {
      const { data } = await axios.get(`${API_URL}/posts`);
      return data;
    },
  });
}