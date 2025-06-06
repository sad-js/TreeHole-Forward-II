// src/components/PostFeed.tsx

import React, {useState} from "react";
import PostCard from "./PostCard";
import type { PostCardProps } from "./PostCard";
import { dummyPosts } from "../data/posts";
import type {Post} from "../data/posts"

export type SortMode = "new" | "hot";

interface PostFeedProps {
  sortMode: SortMode;
}

const PostFeed: React.FC<PostFeedProps> = ({ sortMode }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const sorted = [...dummyPosts].sort((a, b) => {
    if (sortMode === "hot") return b.comments.length - a.comments.length;
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  return (
    <section className="post-feed">
      {dummyPosts.map((post, idx) => (
        <div key={idx} onClick={()=> setSelectedPost(post)} className='cursor-pointer'>
          <PostCard
            username={post.username}
            time={post.time}
            category={post.category}
            content={post.content}
            feeling={post.feeling}
            comments={post.comments.length}
            reactions={post.reactions}
          />
        </div>
      ))}
      {selectedPost && (
      <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex justify-center items-center bg-black bg-opacity-50"
          style={{
      display: "flex",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9999,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}>
        <div className="bg-white text-black p-6 rounded-lg max-w-lg w-[90%] shadow-lg relative"
        style={{ backgroundColor: "#1f2e3c", 
        color: "#ffffff", 
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        maxWidth: "640px",
        width: "90%",
        position: "relative", }} >
          <button
            onClick={() => setSelectedPost(null)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          >
            ✖
          </button>
          <h2 className="text-xl font-bold mb-2">{selectedPost.username}'s Post</h2>
          <p className="text-sm text-gray-500 mb-4">
            {selectedPost.time} · {selectedPost.category}
          </p>
          <p className="mb-2">{selectedPost.content}</p>
          <p className="font-semibold mb-4">{selectedPost.feeling}</p>
          <div className="mb-2">
            <strong>Reactions:</strong>{" "}
            {Object.entries(selectedPost.reactions).map(([emoji, count]) => (
              <span key={emoji} className="mr-2">
                {emoji} {count}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-600">{selectedPost.comments.length} comments</div>
        </div>
      </div>
    )}
    </section>
  );
};

export default PostFeed;
