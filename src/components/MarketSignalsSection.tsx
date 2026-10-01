import { ExternalLink, Target } from 'lucide-react'
import type { DemoReport } from '../lib/types'

export default function MarketSignalsSection({ report }: { report: DemoReport }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-neutral-800">
        <Target size={16} className="text-orange-500" /> Market Research Signals
      </h3>
      <p className="mb-4 text-xs text-neutral-400">
        Illustrative example of the community &amp; market signals IdeaBot surfaces — linked to real communities you
        can explore yourself.
      </p>
      <ul className="space-y-3">
        {report.marketSignals.map((signal) => (
          <li key={signal.community} className="rounded-xl border border-orange-50 bg-orange-50/40 p-3">
            <a
              href={signal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1 flex items-center gap-1 text-sm font-semibold text-orange-600 hover:underline"
            >
              {signal.community} <ExternalLink size={12} />
            </a>
            <p className="text-sm text-neutral-600">{signal.insight}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
