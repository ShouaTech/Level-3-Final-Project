export type PracticeSession = {
    id: string,
    practiceType: string,
    transcript: string,
    duration: number, // seconds
    speakingPace: number, // words per minute
    fillerWordCount: number,
    clarityScore: number, // out of 10
    structureScore: number, // out of 10
    createdAt: string,
    feedback: {
        didWell: string[],
        toImprove: string[],
        recommendedFocus: string
    }
}
