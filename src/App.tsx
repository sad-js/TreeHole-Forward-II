// App.tsx

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import CreatePostPanel from "./components/CreatePostPanel";
import type { SortMode } from "./components/PostFeed";
import ReplyPanel from "./components/ReplyPanel";
// import { dummyPosts } from "./data/posts";
import type { Post } from "./data/posts";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("new");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className={showCreatePanel ? "blurred" : ""}>
      <Header
        onAddPost={() => setShowCreatePanel(true)}
        sortMode={sortMode}
        onChangeSortMode={setSortMode}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Sidebar />
      <main>
        <PostFeed
          sortMode={sortMode}
          onOpenReply={(post) => setSelectedPost(post)}
          searchQuery={searchQuery}
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
