// CreatePostPanel.tsx

import React, { useState } from "react";
import type { Post } from "../data/posts"; // 引入 Post 类型

interface Props {
  show: boolean;
  onClose: () => void;
  onPostCreate: (post: Post) => void; // 新增：父组件回调，处理新帖子
}

const names = [
  "AnonymousOwl",
  "MysteriousBear",
  "HiddenKoala",
  "ShySloth",
  "MidtermGhost",
  "SecretSquirrel",
  "CloakedCat",
  "VeiledViper",
  "IncognitoIguana",
  "MaskedMongoose",
  "PhantomPenguin",
  "EnigmaticElephant",
  "ObscureOtter",
  "UnknownUnicorn",
  "CloakedChameleon",
  "HiddenHedgehog",
  "ShroudedShark",
  "VeiledVulture",
];

const CreatePostPanel: React.FC<Props> = ({ show, onClose, onPostCreate }) => {
  const [name, setName] = useState(names[0]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("#Rant");
  const [feeling, setFeeling] = useState("😴 exhausted");

  const handleSwitchName = () => {
    const other = names.filter((n) => n !== name);
    setName(other[Math.floor(Math.random() * other.length)]);
  };

  const charLimit = 500;

  // 新增：处理 FLY 点击后创建帖子
  const handleSubmit = () => {
    if (!content.trim()) return;

    const newPost: Post = {
      username: name,
      time: new Date().toISOString(),
      content: content.trim(),
      category,
      feeling,
      reactions: { "😄": 0, "😢": 0, "😡": 0 },
      comments: [],
    };

    onPostCreate(newPost); // 通知父组件插入新帖子
    setContent(""); // 清空输入框（可选）
  };

  return (
    <>
      <div className={`overlay ${show ? "active" : ""}`} onClick={onClose} />
      <div className={`create-panel ${show ? "slide-in" : ""}`}>
        <div className="create-top">
          <div className="avatar-circle"></div>
          <h2 className="anon-name">{name}</h2>
          <button className="refresh-name" onClick={handleSwitchName}>
            <img src="/refresh_icon.svg" alt="Switch Name" />
          </button>
        </div>

        <label htmlFor="post-content" className="visually-hidden">
          Content
        </label>
        <textarea
          id="post-content"
          rows={6}
          maxLength={charLimit}
          placeholder="Just say something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="char-count">
          {content.length}/{charLimit}
        </div>

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>#Rant</option>
          <option>#Confession</option>
          <option>#Advice</option>
        </select>

        <label>I'm feeling...</label>
        <select value={feeling} onChange={(e) => setFeeling(e.target.value)}>
          <option>😴 exhausted</option>
          <option>😢 sad</option>
          <option>😊 happy</option>
          <option>😤 frustrated</option>
          <option>😎 cool</option>
          <option>🤔 thoughtful</option>
          <option>😱 shocked</option>
          <option>😇 angelic</option>
        </select>

        {/* 新增：FLY 按钮触发 handleSubmit */}
        <button className="fly-button" onClick={handleSubmit}>
          FLY!
        </button>
      </div>
    </>
  );
};

export default CreatePostPanel;
