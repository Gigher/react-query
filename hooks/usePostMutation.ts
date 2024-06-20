"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";


export function usePostsMutation(key: string, url: string) {
    const { mutate, isPending } = useMutation({
        mutationKey: [key],
        mutationFn: async (newPost) => {
          axios.post(`${url}/posts`, newPost)
        }
      })

      return {mutate, isPending};
}