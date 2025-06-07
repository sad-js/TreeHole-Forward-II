// Sidebar.tsx
import React from "react";
import type { Post } from "../data/posts";

interface SidebarProps {
  posts: Post[];
  selectedCategories: string[];
  selectedFeelings: string[];
  onCategoryChange: (categories: string[]) => void;
  onFeelingChange: (feelings: string[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  posts,
  selectedCategories,
  selectedFeelings,
  onCategoryChange,
  onFeelingChange,
}) => {
  const uniqueCategories = Array.from(new Set(posts.map((p) => p.category)));
  const uniqueFeelings = Array.from(new Set(posts.map((p) => p.feeling)));

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    isCategory: boolean
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (opt) => opt.value
    );

    const sanitized = selectedOptions.includes("All")
      ? ["All"]
      : selectedOptions;

    if (isCategory) {
      onCategoryChange(sanitized);
    } else {
      onFeelingChange(sanitized);
    }
  };

  return (
    <aside className="sidebar">
      <div className="filter-top">
        <h2>Filter</h2>

        <label>Category</label>
        <select
          multiple
          value={selectedCategories}
          onChange={(e) => handleSelectChange(e, true)}
        >
          <option>All</option>
          {uniqueCategories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <label>Feeling</label>
        <select
          multiple
          value={selectedFeelings}
          onChange={(e) => handleSelectChange(e, false)}
        >
          <option>All</option>
          {uniqueFeelings.map((feel) => (
            <option key={feel}>{feel}</option>
          ))}
        </select>
      </div>
      <img src="/treehole_icon.svg" alt="Tree Logo" className="sidebar-logo" />
    </aside>
  );
};

export default Sidebar;
