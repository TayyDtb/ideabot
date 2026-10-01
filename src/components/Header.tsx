import { Lightbulb } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b border-orange-100 bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
          <Lightbulb size={22} strokeWidth={2.2} />
        </div>
        <div>
          <p className="text-lg font-bold leading-none text-neutral-900">
            Idea<span className="text-orange-500">Bot</span>
          </p>
          <p className="text-xs text-neutral-500">Research your next big idea</p>
        </div>
      </div>
    </header>
  )
}
