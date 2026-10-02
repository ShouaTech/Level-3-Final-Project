import { StepsCard } from "./StepsCard";

export function HeroSection() {
  return (
    <>
      <div className="flex justify-between">
        <h2>CommLab</h2>
        <button>Log in</button>
        <button>Get Started</button>
      </div>

      <p>AI-Powered Communication Coach</p>
      <h1>Speak with clarity.</h1>
      <h1>Lead every room.</h1>

      <p>
        Eloquent analyzes your speech in real time — giving you precise,
        actionable feedback on pace, clarity, filler words, and structure.
        Practice daily. Improve measurably.
      </p>

      <button>Start Practicing</button>

      <p>HOW IT WORKS</p>
      <h2>Four steps to a stronger voice</h2>

      <div className="flex">
        <div className="border rounded-2xl bg">
          <StepsCard
            step="01"
            title="Choose a skill"
            description="Select from targeted drills: clarity, pace, storytelling, filler words, and more."
          />
        </div>

        <div className="border rounded-2xl bg">
          <StepsCard
            step="02"
            title="Record yourself"
            description="Practice in the browser. Record a response, presentation, or spontaneous answer."
          />
        </div>

        <div className="border rounded-2xl bg">
          <StepsCard
            step="03"
            title="Receive AI feedback"
            description="Get instant, specific feedback - scored and explained, not just flagged."
          />
        </div>

        <div className="border rounded-2xl bg">
          <StepsCard
            step="04"
            title="Track improvement"
            description="Watch your skill scores rise over sessions with granular progress analytics."
          />
        </div>
      </div>

      <h6>THE PRACTICE EXPERIENCE</h6>
      <h1>Built for serious improvement</h1>
      <p>A clean, focused environment that keeps you on track.</p>
      {/* screenshot image of Dashboard */}
      <img></img>

      <div>
        <h1>Your voice is worth developing.</h1>
        <p>
          Start free. No credit card required. See progress in the first
          session.
        </p>
        <button>Start Practicing</button>

        <hr />

        <h6>CommLab</h6>
      </div>
    </>
  );
}
