// PostFeed.tsx
import React from "react";
import PostCard from "./PostCard";
import { dummyPosts } from "../data/posts";
import type { Post } from "../data/posts";

export type SortMode = "new" | "hot";

interface PostFeedProps {
  sortMode: SortMode;
  onOpenReply: (post: Post) => void;
  searchQuery: string;
  selectedCategories: string[];
  selectedFeelings: string[];
}

const PostFeed: React.FC<PostFeedProps> = ({
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

  const filtered = dummyPosts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
      matchesCategory(post) &&
      matchesFeeling(post)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortMode === "hot") {
      const aReacts = Object.values(a.reactions).reduce((sum, n) => sum + n, 0);
      const bReacts = Object.values(b.reactions).reduce((sum, n) => sum + n, 0);
      return bReacts - aReacts;
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
          reactions={post.reactions}
          onClickComments={() => onOpenReply(post)}
        />
      ))}
    </section>
  );
};

export default PostFeed;
