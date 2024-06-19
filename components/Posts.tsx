"use client";

import { usePosts } from "@/hooks/usePosts";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const isAuth = true;

const API_URL = 'https://jsonplaceholder.typicode.com';

const Posts = () => {
  const { data } = usePosts(isAuth);

  const { mutate, isPending } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (newPost) => {
      axios.post(`${API_URL}/posts`, newPost)
    }
  })

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
        <div style={{ margin: "20px 0" }}><h1>Posts</h1></div>

        <button 
          onClick={() => {
            mutate({
              body: "New Post",
              title: "New Post",
              userId: 1,
              })
          }}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Create post"}
        </button>

        {/* <button onClick={() => refetch()}>Refetch</button> */}

        {data?.map((post) => (
          <div key={post.id} style={{ width: "80vw", padding: "15px", marginBottom: "10px", backgroundColor: "#092635", borderRadius: "4px"}}>
            <h3 style={{ textAlign: "center" }}>{post.title}</h3> <br/> 
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;