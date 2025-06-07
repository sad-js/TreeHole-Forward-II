// src/components/PostFeed.tsx

import React from "react";
import PostCard from "./PostCard";
import { dummyPosts } from "../data/posts";
import type { Post } from "../data/posts";

export type SortMode = "new" | "hot";

interface PostFeedProps {
  sortMode: SortMode;
  onOpenReply: (post: Post) => void;
}

const PostFeed: React.FC<PostFeedProps> = ({ sortMode, onOpenReply }) => {
  const sorted = [...dummyPosts].sort((a, b) => {
    if (sortMode === "hot") return b.comments.length - a.comments.length;
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  return (
    <section className="post-feed">
      {sorted.map((post, idx) => (
        <PostCard
          key={idx}
          username={post.username}
          time={post.time}
          category={post.category}
          content={post.content}
          feeling={post.feeling}
          comments={post.comments.length}
          reactions={post.reactions}
          onClickComments={() => onOpenReply(post)}
        />
      ))}
    </section>
  );
};

export default PostFeed;
