import { Tag } from 'lucide-react'
import type { DemoReport } from '../lib/types'

export default function PricingSection({ report }: { report: DemoReport }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/50">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-800">
        <Tag size={16} className="text-orange-500" /> Suggested Pricing
      </h3>
      <p className="text-2xl font-bold text-orange-600">
        ${report.pricing.low} – ${report.pricing.high}
        <span className="ml-1 text-sm font-medium text-neutral-400">{report.pricing.unit}</span>
      </p>
      <p className="mt-2 text-xs text-neutral-400">{report.pricing.basis}</p>
    </div>
  )
}
