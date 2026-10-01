import { Sparkles } from 'lucide-react'
import { demoReport } from '../data/demoReport'

interface IdeaPreviewProps {
  onResearchClick: () => void
}

// Read-only preview: visitors can't type here, it just demonstrates the flow.
export default function IdeaPreview({ onResearchClick }: IdeaPreviewProps) {
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-orange-100 bg-white p-2 shadow-lg shadow-orange-100/50">
        <textarea
          value={demoReport.idea}
          readOnly
          rows={4}
          className="w-full cursor-default resize-none rounded-xl border-none bg-transparent p-3 text-base text-neutral-900 focus:outline-none"
        />
        <div className="flex items-center justify-end px-2 pb-1">
          <button
            type="button"
            onClick={onResearchClick}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600"
          >
            <Sparkles size={16} />
            Research My Idea
          </button>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-neutral-400">
        This is a sample idea — scroll down to see exactly how IdeaBot researches it.
      </p>
    </div>
  )
}
