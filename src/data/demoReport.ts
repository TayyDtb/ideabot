import type { DemoReport } from '../lib/types'

// A single curated, illustrative example used to demonstrate what IdeaBot's
// full research output looks like — not generated from live user input.
export const demoReport: DemoReport = {
  idea: 'ShiftSwap — an app that lets hourly retail and restaurant workers safely trade shifts with coworkers, with automatic manager approval and compliance checks built in.',
  category: 'Software / SaaS (Workforce Management)',
  overallScore: 92,
  verdict: 'Strong Potential',
  competitionLevel: 'Low',
  targetAudience: 'Hourly retail & restaurant workers, and the shift managers who schedule them',
  scores: [
    {
      label: 'Market Demand',
      score: 91,
      description:
        'Hourly, shift-based work is a large and growing segment, and scheduling friction is a well-known daily pain point for both workers and managers.',
    },
    {
      label: 'Competition',
      score: 84,
      description:
        'Most teams still coordinate swaps informally through group chats or paper sign-offs — very few tools focus specifically on compliant, manager-approved shift trading.',
    },
    {
      label: 'Feasibility',
      score: 89,
      description:
        'A focused MVP (swap request, coworker match, manager approval) is realistic to build and launch with a small team in a few months.',
    },
    {
      label: 'Monetization Potential',
      score: 86,
      description:
        'A clear B2B model: charge employers a per-location or per-seat subscription, with room for premium features later.',
    },
    {
      label: 'Innovation',
      score: 93,
      description:
        'Combining peer-to-peer swapping with built-in compliance checks (overtime limits, minor work-hour rules) is a distinct angle most scheduling tools ignore.',
    },
    {
      label: 'Clarity',
      score: 95,
      description: 'The problem, audience, and workflow are all sharply defined, which makes it easy to scope an MVP.',
    },
  ],
  marketSignals: [
    {
      community: 'r/retail',
      url: 'https://www.reddit.com/r/retail/',
      insight:
        'Frequent posts about scrambling to cover shifts through group chats, with swaps sometimes falling through because a manager never actually signed off.',
    },
    {
      community: 'r/managers',
      url: 'https://www.reddit.com/r/managers/',
      insight:
        'Managers describe shift-swap approval as a recurring chore, especially when tracking overtime limits or rules for minor employees.',
    },
    {
      community: 'Hacker News',
      url: 'https://hn.algolia.com/?q=shift%20scheduling',
      insight:
        'Discussions on scheduling software tend to focus on manager-side rostering tools, leaving peer-to-peer shift trading underserved.',
    },
  ],
  pricing: {
    low: 49,
    high: 149,
    unit: '/mo per location',
    basis:
      'Estimated from typical per-location pricing on comparable workforce-management SaaS tools (illustrative example, not live pricing data).',
  },
  strengths: [
    'Solves a frequent, tangible pain point for a very large hourly workforce.',
    'Differentiates on compliance-aware approval, not just chat-based coordination.',
    'Lean, well-scoped MVP that can be validated with a handful of pilot locations.',
    'Clear path to recurring B2B revenue with low customer acquisition complexity (sell to one manager per location).',
  ],
  risks: [
    'Adoption depends on getting both workers and managers to switch from informal habits.',
    'Larger workforce-management platforms could add this as a feature over time.',
    'Compliance rules vary by state/industry, adding scope to get right.',
  ],
  nextSteps: [
    'Interview 10-15 hourly workers and 5-10 shift managers to validate the swap-and-approval workflow.',
    'Build a lean MVP covering swap requests, coworker matching, and one-tap manager approval.',
    'Pilot with 2-3 local retail or restaurant locations before expanding.',
    'Price a simple per-location monthly plan and test willingness to pay with pilot partners.',
    'Set a 30-60-90 day plan: validate → pilot → refine compliance rules → expand to a second market.',
  ],
}
