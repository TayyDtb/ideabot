import { Loader2, Search } from 'lucide-react'

const SOURCES = ['Reddit communities', 'Facebook groups', 'Niche forums & Hacker News', 'Competitor pricing pages', 'App store reviews']

export default function ResearchVisual() {
  return (
    <div className="w-full rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-lg shadow-orange-100/50">
      <div className="pulse-ring mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white">
        <Loader2 size={26} className="animate-spin" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900">Gathering Market Intelligence</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-neutral-500">
        IdeaBot goes through Reddit, Facebook, and other forums to find the best idea possible.
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {SOURCES.map((source) => (
          <li
            key={source}
            className="flex items-center gap-2 rounded-xl border border-orange-50 bg-orange-50/40 px-3 py-2 text-left text-sm text-neutral-600"
          >
            <Search size={14} className="shrink-0 text-orange-500" /> {source}
          </li>
        ))}
      </ul>
    </div>
  )
}
