import Post from "./Post";
import { PostSkeleton } from "../";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const Posts = ({ feedType = "forYou" }) => {
  const getPostEndPoint = (feedType) => {
    if (feedType === "following") return "api/post/following";
    return "api/post/all";
  };
  const postEndPoint = getPostEndPoint(feedType);
  const {
    data: posts,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["posts", feedType],
    queryFn: async () => {
      try {
        const res = await fetch(postEndPoint);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch posts");
        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  useEffect(() => {
    refetch();
  }, [feedType, refetch]);
  return (
    <>
      {(isLoading || isRefetching) && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && !isRefetching && posts?.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && !isRefetching && posts && (
        <div>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
