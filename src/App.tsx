import { Routes, Route } from "react-router";
import { NavLayout } from "./components/NavLayout.tsx";

import { LandingPage } from "./components/Landing-Page/LandingPage";
import { SignUp } from "./components/Auth-Section/SignUp.tsx";
import { LogIn } from "./components/Auth-Section/LogIn.tsx";
import { Dashboard } from "./components/Dashboard-section/Dashboard.tsx";
import { PracticeLibrary } from "./components/Practice-Library/PracticeLibrary.tsx";
import { SessionHistory } from "./components/Session-History/SessionHistory.tsx";
import { Settings } from "./components/Settings/Settings.tsx";
import { PageNotFound } from "./components/PageNotFound.tsx";
import { Onboarding } from "./components/Onboarding.tsx";
import { Results } from "./components/Results.tsx";
import { PracticeSession } from "./components/PracticeSession.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route element={<NavLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice-library" element={<PracticeLibrary />} />
          <Route path="/session-history" element={<SessionHistory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/results/:sessionId" element={<Results />} />
          <Route path="/practice-session/:exerciseId" element={<PracticeSession />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;