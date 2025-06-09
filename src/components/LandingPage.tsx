// components/LandingPage.tsx

import React from "react";

interface LandingPageProps {
  onSignIn: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSignIn }) => (
  <div className="landing-page">
    <div className="landing-content">
      <img
        src="/treehole_icon.svg"
        alt="UCI TreeHole Icon"
        className="landing-logo"
      />
      <h1 className="landing-title">UCI TreeHole</h1>
      <p className="landing-welcome">Welcome to UCI TreeHole</p>
      <p className="landing-desc">
        Express your feelings. Share your stories. Stay anonymous.
      </p>
      <button className="landing-signin" onClick={onSignIn}>
        Sign in with your UCI NetID
        <img src="/external_link.svg" alt="" className="external-link-icon" />
      </button>
    </div>
  </div>
);

export default LandingPage;
