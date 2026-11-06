export type UserProfile = {
    name: string,
    email: string,
    communicationGoals: string[],
    selfReportedWeaknesses: string[]
}

export type UserPerformance = {
    strengths: string[],
    weaknesses: string[],
    recommendedPractice: string
}
