// App.tsx

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import CreatePostPanel from "./components/CreatePostPanel";
import type { SortMode } from "./components/PostFeed";
import ReplyPanel from "./components/ReplyPanel";
import { dummyPosts } from "./data/posts";
import type { Post } from "./data/posts";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("new");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>(["All"]);

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
        posts={dummyPosts}
        selectedCategories={selectedCategories}
        selectedFeelings={selectedFeelings}
        onCategoryChange={setSelectedCategories}
        onFeelingChange={setSelectedFeelings}
      />
      <main>
        <PostFeed
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
