export type UserProfile = {
    name: string,
    email: string,
    communicationGoals: string[],
    selfReportedWeaknesses: string[]
}

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

export type UserPerformance = {
    strengths: string[],
    weaknesses: string[],
    recommendedPractice: string
}

export type Exercise = {
    id: string,
    title: string,
    description: string,
    duration: string,
    difficulty: string,
    prompt: string
}