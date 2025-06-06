// App.tsx

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import CreatePostPanel from "./components/CreatePostPanel";
import type { SortMode } from "./components/PostFeed";

function App() {
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("new");

  return (
    <div className={showCreatePanel ? "blurred" : ""}>
      <Header
        onAddPost={() => setShowCreatePanel(true)}
        sortMode={sortMode}
        onChangeSortMode={setSortMode}
      />
      <Sidebar />
      233
      <main>
        <PostFeed sortMode={sortMode} />
      </main>
      <CreatePostPanel
        show={showCreatePanel}
        onClose={() => setShowCreatePanel(false)}
      />
    </div>
  );
}

export default App;
