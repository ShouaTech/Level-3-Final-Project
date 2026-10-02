import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

import { LandingPage } from "./components/Landing-Page/LandingPage";
import { AuthPage } from "./components/Auth-Section/AuthPage";
import { Dashboard } from "./components/Dashboard-section/Dashboard.tsx";
import { PracticeLibrary } from "./components/Practice-Library/PracticeLibrary.tsx";
import { SessionHistory } from "./components/Session-History/SessionHistory.tsx";
import { Settings } from "./components/Settings/Settings.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/sign-up" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/practice-library" element={<PracticeLibrary />} />
        <Route path="/session-history" element={<SessionHistory />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
