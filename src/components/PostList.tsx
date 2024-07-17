"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import PostItem from "./PostItem";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "@/types";

interface PostListProps {
  title: string;
}

const PostList = ({ title }: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => response.data)
      .then((data) => setPosts(data))
      .then(() => console.log(posts))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="mb-20 w-3/4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            모든 카테고리의 글을 볼 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {posts.map((post, i) => (
            <PostItem key={post.id} post={post} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostList;
