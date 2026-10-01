import type { DemoReport } from '../lib/types'
import ScoreGauge from './ScoreGauge'

const verdictStyles: Record<DemoReport['verdict'], string> = {
  'Strong Potential': 'bg-orange-500 text-white',
  'Worth Exploring': 'bg-orange-400 text-white',
  'Needs Refinement': 'bg-orange-100 text-orange-700',
  'High Risk': 'bg-neutral-100 text-neutral-600',
}

export default function SummaryCard({ report }: { report: DemoReport }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <ScoreGauge score={report.overallScore} />
        <div className="flex-1 text-center sm:text-left">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${verdictStyles[report.verdict]}`}>
            {report.verdict}
          </span>
          <h2 className="mt-2 text-xl font-bold text-neutral-900">"{report.idea}"</h2>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-neutral-500 sm:justify-start">
            <span>
              Category: <b className="text-neutral-700">{report.category}</b>
            </span>
            <span>
              Competition: <b className="text-neutral-700">{report.competitionLevel}</b>
            </span>
            <span>
              Audience: <b className="text-neutral-700">{report.targetAudience}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
