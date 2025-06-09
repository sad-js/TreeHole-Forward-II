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
  const [replies, setReplies] = useState<Comment[]>([]);
  const [isReplyFocused, setIsReplyFocused] = useState(false);

  useEffect(() => {
    if (post) {
      setReplies(post.comments);
    }
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
      <div className={`reply-panel ${show ? "slide-in" : ""}`}>
        <div className="reply-post-header">
          <div className="reply-avatar" />
          <div className="reply-user-meta">
            <div className="reply-top-row">
              <span className="reply-username">{post.username}</span>
              <span className="reply-time">
                {new Date(post.time).toLocaleString()}
              </span>
            </div>
            <span className="reply-category">{post.category}</span>
          </div>
        </div>

        <p className="reply-post-content">{post.content}</p>
        <span className="reply-feeling">{post.feeling}</span>

        {/* <div className="reply-reactions">
          {Object.entries(post.reactions).map(([emoji, count]) => (
            <span key={emoji}>
              {emoji} {count}
            </span>
          ))}
        </div> */}

        <div className="reply-textarea-wrapper">
          <textarea
            className="reply-textarea"
            placeholder="Write your reply..."
            rows={5}
            value={reply}
            onFocus={() => setIsReplyFocused(true)}
            onBlur={() => setIsReplyFocused(reply.trim() !== "")}
            onChange={(e) => setReply(e.target.value)}
          />
          {isReplyFocused && (
            <button className="reply-send-inside" onClick={handleSend}>
              Send
            </button>
          )}
        </div>

        <h3 className="reply-comments-title">Replies</h3>
        <div className="reply-comments">
          {replies.map((comment, idx) => (
            <div key={idx} className="reply-comment-box">
              <div className="reply-comment-header">
                <strong>{comment.username}</strong>
                <span className="reply-comment-time">
                  {new Date(comment.time).toLocaleString()}
                </span>
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
