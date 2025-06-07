// PostFeed.tsx

import React, { useState } from "react";

export interface PostCardProps {
  username: string;
  time: string;
  category: string;
  content: string;
  feeling: string;
  comments: number;
  reactions: { [emoji: string]: number };
  onClick: () => void;
  onClickComments: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  time,
  category,
  content,
  feeling,
  comments,
  reactions,
  onClick,
  // onClickComments,
}) => {
  const [emojiCounts, setEmojiCounts] = useState(reactions);
  const [clicked, setClicked] = useState<{ [emoji: string]: boolean }>({});

  const handleEmojiClick = (emoji: string) => {
    const alreadyClicked = clicked[emoji];
    const newCounts = {
      ...emojiCounts,
      [emoji]: emojiCounts[emoji] + (alreadyClicked ? -1 : 1),
    };

    setEmojiCounts(newCounts);
    setClicked({
      ...clicked,
      [emoji]: !alreadyClicked,
    });
  };

  return (
    <div className="post-card" onClick={onClick}>
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
          {Object.entries(emojiCounts).map(([emoji, count]) => (
            <span
              key={emoji}
              onClick={(e) => {
                e.stopPropagation(); // 防止触发展开 Reply Panel
                handleEmojiClick(emoji);
              }}
              style={{
                cursor: "pointer",
                color: clicked[emoji] ? "#fecc07" : "white",
                fontWeight: clicked[emoji] ? "bold" : "normal",
              }}
            >
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
