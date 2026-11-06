import { Routes, Route } from "react-router";
import { NavLayout } from "./components/layout/NavLayout.tsx";
import { AuthLayout } from "./components/layout/AuthLayout.tsx";

import { LandingPage } from "./pages/LandingPage.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import { LogIn } from "./pages/LogIn.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { PracticeLibrary } from "./pages/PracticeLibrary.tsx";
import { SessionHistory } from "./pages/SessionHistory.tsx";
import { Settings } from "./pages/Settings.tsx";
import { PageNotFound } from "./pages/PageNotFound.tsx";
import { Onboarding } from "./pages/Onboarding.tsx";
import { Results } from "./pages/Results.tsx";
import { PracticeSessionPage } from "./pages/PracticeSession.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Route>
        <Route path="/onboarding" element={<Onboarding />} />

        <Route element={<NavLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice-library" element={<PracticeLibrary />} />
          <Route path="/session-history" element={<SessionHistory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/results/:sessionId" element={<Results />} />
          <Route path="/practice-session/:exerciseId" element={<PracticeSessionPage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;