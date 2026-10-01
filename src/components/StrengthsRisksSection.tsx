import { AlertTriangle, Target } from 'lucide-react'
import type { DemoReport } from '../lib/types'

export default function StrengthsRisksSection({ report }: { report: DemoReport }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-800">
          <Target size={16} className="text-orange-500" /> Strengths
        </h3>
        <ul className="space-y-2 text-sm text-neutral-600">
          {report.strengths.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="text-orange-500">+</span> {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-800">
          <AlertTriangle size={16} className="text-orange-500" /> Risks & Challenges
        </h3>
        <ul className="space-y-2 text-sm text-neutral-600">
          {report.risks.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-orange-500">!</span> {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
