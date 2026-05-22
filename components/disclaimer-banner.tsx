"use client"

import { useEffect, useState } from "react"
import { X, Pause, Play } from "lucide-react"

export function DisclaimerBanner() {
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-destructive/10 border-b border-destructive/20 py-2 relative overflow-hidden">
      <div className="flex items-center gap-4 px-4">
        <span className="bg-destructive text-destructive-foreground px-2 py-0.5 text-xs font-bold rounded shrink-0">
          DISCLAIMER
        </span>
        
        <div className="flex-1 overflow-hidden">
          <div 
            className={`whitespace-nowrap ${isPaused ? '' : 'animate-marquee'}`}
            style={{ display: 'inline-block' }}
          >
            <span className="text-sm text-foreground/80">
              Investing and trading in securities markets involves risk. Capital Gainer (Research Analyst) does not guarantee returns or provide profit-sharing services. Always use proper risk management and stop-loss orders. We never request your trading account details. Report suspicious activity to our official support line.
              {" "}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{" "}
              Investing and trading in securities markets involves risk. Capital Gainer (Research Analyst) does not guarantee returns or provide profit-sharing services. Always use proper risk management and stop-loss orders. We never request your trading account details. Report suspicious activity to our official support line.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 hover:bg-muted rounded"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
          <a 
            href="tel:+91 7280980028" 
            className="hidden sm:block bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium hover:bg-primary/90"
          >
            Call Support
          </a>
        </div>
      </div>
    </div>
  )
}
