import { useRef } from 'react'
import Header from './components/Header'
import IdeaPreview from './components/IdeaPreview'
import MarketSignalsSection from './components/MarketSignalsSection'
import NextStepsSection from './components/NextStepsSection'
import PricingSection from './components/PricingSection'
import ResearchVisual from './components/ResearchVisual'
import Reveal from './components/Reveal'
import ScoreBreakdownSection from './components/ScoreBreakdownSection'
import StrengthsRisksSection from './components/StrengthsRisksSection'
import SummaryCard from './components/SummaryCard'
import { demoReport } from './data/demoReport'

function App() {
  const researchRef = useRef<HTMLDivElement>(null)

  const scrollToResearch = () => {
    researchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/60 via-white to-white">
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col items-center gap-16 px-6 py-12">
        <section className="w-full text-center">
          <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Got an idea? Let's <span className="text-orange-500">research it.</span>
          </h1>
          <p className="mt-3 text-neutral-500">
            Here's a walkthrough of exactly how IdeaBot researches an idea from start to finish.
          </p>
          <div className="mt-8">
            <IdeaPreview onResearchClick={scrollToResearch} />
          </div>
        </section>

        <div ref={researchRef} className="w-full scroll-mt-24">
          <Reveal>
            <ResearchVisual />
          </Reveal>
        </div>

        <Reveal className="w-full">
          <SummaryCard report={demoReport} />
        </Reveal>

        <Reveal className="w-full">
          <ScoreBreakdownSection report={demoReport} />
        </Reveal>

        <Reveal className="w-full">
          <MarketSignalsSection report={demoReport} />
        </Reveal>

        <Reveal className="w-full">
          <PricingSection report={demoReport} />
        </Reveal>

        <Reveal className="w-full">
          <StrengthsRisksSection report={demoReport} />
        </Reveal>

        <Reveal className="w-full">
          <NextStepsSection report={demoReport} />
        </Reveal>
      </main>
      <footer className="pb-12 text-center text-xs text-neutral-400">
        IdeaBot gives directional insight, not financial advice — always validate with real customers.
      </footer>
    </div>
  )
}

export default App
