import axios from "axios";
import { GetPostsResponse } from "../app/types.d.ts";

export const baseURL = "http://localhost:3001/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = async (): Promise<GetPostsResponse> => {
  try {
    const { data } = await api.get<GetPostsResponse>("/get_posts");
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
