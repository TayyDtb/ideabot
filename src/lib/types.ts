export interface ScoreBreakdown {
  label: string
  score: number
  description: string
}

export interface MarketSignal {
  community: string
  url: string
  insight: string
}

export interface DemoReport {
  idea: string
  category: string
  overallScore: number
  verdict: 'Strong Potential' | 'Worth Exploring' | 'Needs Refinement' | 'High Risk'
  competitionLevel: 'Low' | 'Moderate' | 'High' | 'Very High'
  targetAudience: string
  scores: ScoreBreakdown[]
  marketSignals: MarketSignal[]
  pricing: { low: number; high: number; unit: string; basis: string }
  strengths: string[]
  risks: string[]
  nextSteps: string[]
}
