import { TrendingUp } from 'lucide-react'
import type { DemoReport } from '../lib/types'

export default function ScoreBreakdownSection({ report }: { report: DemoReport }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-800">
        <TrendingUp size={16} className="text-orange-500" /> Score Breakdown
      </h3>
      <div className="space-y-4">
        {report.scores.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium text-neutral-800">{item.label}</span>
              <span className="font-semibold text-orange-600">{item.score}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-orange-50">
              <div
                className="h-full rounded-full bg-orange-500 transition-all duration-700"
                style={{ width: `${item.score}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-neutral-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
