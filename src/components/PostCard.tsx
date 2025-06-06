// PostFeed.tsx

import React from "react";

export interface PostCardProps {
  username: string;
  time: string;
  category: string;
  content: string;
  feeling: string;
  comments: number;
  reactions: { [emoji: string]: number };
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  time,
  category,
  content,
  feeling,
  comments,
  reactions,
}) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <div className="avatar"></div>
        <div className="post-header-info">
          <div className="post-top-row">
            <span className="username">{username}</span>
            <span className="post-time">{time}</span>
          </div>
          <div className="category">{category}</div>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <span className="feeling">{feeling}</span>
      <div className="post-meta-footer">
        <div className="post-emojis">
          {Object.entries(reactions).map(([emoji, count]) => (
            <span key={emoji}>
              {emoji} {count}
            </span>
          ))}
        </div>
        <span className="comment-count">{comments} comments →</span>
      </div>
    </div>
  );
};

export default PostCard;
