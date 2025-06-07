// components/ReplyPanel.tsx

import React, { useState, useEffect } from "react";
import type { Post, Comment } from "../data/posts";

interface ReplyPanelProps {
  show: boolean;
  post: Post | null;
  onClose: () => void;
}

const ReplyPanel: React.FC<ReplyPanelProps> = ({ show, post, onClose }) => {
  const [reply, setReply] = useState("");
  //   const [replies, setReplies] = useState<Comment[]>(post?.comments ?? []);
  const [replies, setReplies] = useState<Comment[]>([]);

  useEffect(() => {
    setReplies(post?.comments ?? []); // ⬅️ 这里同步 replies
  }, [post]);

  if (!post) return null;

  const handleSend = () => {
    if (reply.trim()) {
      const newComment: Comment = {
        username: "AnonReply",
        time: new Date().toLocaleString(),
        content: reply.trim(),
      };
      setReplies([...replies, newComment]);
      setReply("");
    }
  };

  return (
    <>
      <div className={`overlay ${show ? "active" : ""}`} onClick={onClose} />
      <div className={`create-panel ${show ? "slide-in" : ""}`}>
        <div className="post-header">
          <div className="avatar-circle"></div>
          <div className="post-header-info">
            <div className="post-top-row">
              <span className="username">{post.username}</span>
              <span className="post-time">
                {new Date(post.time).toLocaleString()}
              </span>
            </div>
            <div className="category">{post.category}</div>
          </div>
        </div>
        <p className="post-content">{post.content}</p>
        <span className="feeling">{post.feeling}</span>

        <div className="post-meta-footer">
          <div className="post-emojis">
            {Object.entries(post.reactions).map(([emoji, count]) => (
              <span key={emoji}>
                {emoji} {count}
              </span>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Write your reply..."
          rows={3}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button className="fly-button" onClick={handleSend}>
          Send
        </button>

        <div style={{ marginTop: 20 }}>
          {replies.map((comment, idx) => (
            <div key={idx} className="reply-box">
              <strong>{comment.username}</strong>
              <div style={{ fontSize: "12px", color: "#aaa" }}>
                {comment.time}
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReplyPanel;
