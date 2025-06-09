// App.tsx

import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import CreatePostPanel from "./components/CreatePostPanel";
import type { SortMode } from "./components/PostFeed";
import ReplyPanel from "./components/ReplyPanel";
import { dummyPosts } from "./data/posts";
import type { Post } from "./data/posts";
import LandingPage from "./components/LandingPage";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("new");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>(["All"]);

  // 本地状态：包括原始帖子 + 用户新增的帖子
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  // 新建帖子时调用：添加到 userPosts，关闭创建面板
  const handlePostCreate = (newPost: Post) => {
    setUserPosts((prev) => [newPost, ...prev]);
    setShowCreatePanel(false);
  };

  // // 控制 body 滚动行为
  // useEffect(() => {
  //   const isPanelOpen = showCreatePanel || selectedPost !== null;
  //   document.body.style.overflow = isPanelOpen ? "hidden" : "auto";
  // }, [showCreatePanel, selectedPost]);

  useEffect(() => {
    const isPanelOpen = showCreatePanel || selectedPost !== null;
    if (isPanelOpen) {
      document.body.classList.add("panel-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("panel-open");
      document.body.style.overflow = "";
    }
  }, [showCreatePanel, selectedPost]);

  if (!signedIn) {
    return <LandingPage onSignIn={() => setSignedIn(true)} />;
  }

  return (
    <div className={showCreatePanel ? "blurred" : ""}>
      <Header
        onAddPost={() => {
          if (selectedPost) {
            setSelectedPost(null);
            setTimeout(() => setShowCreatePanel(true), 100);
          } else {
            setShowCreatePanel(true);
          }
        }}
        sortMode={sortMode}
        onChangeSortMode={setSortMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Sidebar
        posts={[...userPosts, ...dummyPosts]} // 合并传递给 Sidebar
        selectedCategories={selectedCategories}
        selectedFeelings={selectedFeelings}
        onCategoryChange={setSelectedCategories}
        onFeelingChange={setSelectedFeelings}
      />
      <main className={showCreatePanel || selectedPost ? "no-scroll" : ""}>
        <PostFeed
          posts={[...userPosts, ...dummyPosts]} // 合并传递给 PostFeed
          sortMode={sortMode}
          onOpenReply={(post) => setSelectedPost(post)}
          searchQuery={searchQuery}
          selectedCategories={selectedCategories}
          selectedFeelings={selectedFeelings}
        />
      </main>
      <CreatePostPanel
        show={showCreatePanel}
        onClose={() => setShowCreatePanel(false)}
        onPostCreate={handlePostCreate}
      />
      <ReplyPanel
        show={!!selectedPost}
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}

export default App;
