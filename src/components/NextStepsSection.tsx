import { ListChecks } from 'lucide-react'
import type { DemoReport } from '../lib/types'

export default function NextStepsSection({ report }: { report: DemoReport }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-800">
        <ListChecks size={16} className="text-orange-500" /> Recommended Next Steps
      </h3>
      <ol className="space-y-2 text-sm text-neutral-600">
        {report.nextSteps.map((step, i) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-700">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}
