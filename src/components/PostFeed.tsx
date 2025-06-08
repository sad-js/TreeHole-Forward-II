// PostFeed.tsx

import React from "react";
import PostCard from "./PostCard";
import type { Post } from "../data/posts";

export type SortMode = "new" | "hot";

interface PostFeedProps {
  posts: Post[]; // ✅ 改为从 props 传入所有帖子
  sortMode: SortMode;
  onOpenReply: (post: Post) => void;
  searchQuery: string;
  selectedCategories: string[];
  selectedFeelings: string[];
}

const PostFeed: React.FC<PostFeedProps> = ({
  posts,
  sortMode,
  onOpenReply,
  searchQuery,
  selectedCategories,
  selectedFeelings,
}) => {
  const matchesCategory = (post: Post) =>
    selectedCategories.includes("All") ||
    selectedCategories.includes(post.category);

  const matchesFeeling = (post: Post) =>
    selectedFeelings.includes("All") || selectedFeelings.includes(post.feeling);

  const filtered = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
      matchesCategory(post) &&
      matchesFeeling(post)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortMode === "hot") {
      return b.comments.length - a.comments.length; // 🔥 按评论数量排序
    }
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
          // reactions={post.reactions}
          onClick={() => onOpenReply(post)}
          // onClickEmoji={(emoji) => {
          //   post.reactions[emoji] += 1;
          // }}
        />
      ))}
    </section>
  );
};

export default PostFeed;
