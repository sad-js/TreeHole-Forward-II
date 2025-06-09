// components/PostCard.tsx

import React from "react";

export interface PostCardProps {
  username: string;
  time: string;
  category: string;
  content: string;
  feeling: string;
  comments: number;
  // reactions: { [emoji: string]: number };
  onClick: () => void;
  // onClickEmoji: (emoji: string) => void; // 新增：点击 emoji 的处理函数
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  time,
  category,
  content,
  feeling,
  comments,
  // reactions,
  onClick,
  // onClickEmoji, // ✅
}) => {
  //   return (
  //     <div className="post-card" onClick={onClick}>
  //       <div className="post-header">
  //         <div className="avatar"></div>
  //         <div className="post-header-info">
  //           <div className="post-top-row">
  //             <span className="username">{username}</span>
  //             <span className="post-time">{time}</span>
  //           </div>
  //           <div className="category">{category}</div>
  //         </div>
  //       </div>
  //       <p className="post-content">{content}</p>
  //       <span className="feeling">{feeling}</span>
  //       <div className="post-meta-footer">
  //         <div className="post-emojis">
  //           {Object.entries(reactions).map(([emoji, count]) => (
  //             <span
  //               key={emoji}
  //               onClick={(e) => {
  //                 e.stopPropagation();
  //                 onClickEmoji(emoji); // ✅ 使用外部函数处理逻辑
  //               }}
  //               style={{ cursor: "pointer" }}
  //             >
  //               {emoji} {count}
  //             </span>
  //           ))}
  //         </div>
  //         <span className="comment-count">{comments} comments →</span>
  //       </div>
  //     </div>
  //   );
  // };

  // export default PostCard;
  return (
    <div
      className="post-card"
      onClick={() => {
        const selection = window.getSelection();
        if (selection && selection.toString().length === 0) {
          onClick();
        }
      }}
    >
      <div className="post-header">
        <div className="avatar"></div>
        <div className="post-header-info">
          <div className="post-top-row">
            <span className="username">{username}</span>
            <span className="post-time">{new Date(time).toLocaleString()}</span>
          </div>
          <div className="category">{category}</div>
        </div>
      </div>

      <p className="post-content">{content}</p>

      <div className="post-meta-footer">
        <span className="feeling">{feeling}</span>
        <span className="comment-count">{comments} comments →</span>
      </div>
    </div>
  );
};

export default PostCard;
