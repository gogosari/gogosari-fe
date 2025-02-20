export type OnboardingModel = {
  experience: ExperienceStep
  together: WithStep
  bug: BugStep
  shape: ShapeStep
}

export type ExperienceStep = {
  experience?: string
}

export type WithStep = {
  experience: string
  together?: string
}

export type BugStep = {
  experience: string
  together: string
  bug?: string
}

export type ShapeStep = {
  experience: string
  together: string
  bug: string
  shape?: string
}
