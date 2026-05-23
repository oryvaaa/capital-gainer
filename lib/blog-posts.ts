export const blogPosts = [
  {
    id: "1",
    title: "Understanding Options Trading: A Practical Guide for Beginners",
    excerpt:
      "Learn the fundamentals of call and put options, how payoffs work, and which strategies make sense for new traders entering the derivatives market.",
    category: "Education",
    date: "May 18, 2026",
    content: [
      "Options can be useful tools for defined-risk trading when they are matched with a clear view on direction, volatility, and time. Beginners should start by understanding the payoff of a call or put before using spreads or multi-leg strategies.",
      "A practical approach begins with position sizing, a maximum loss threshold, and a written exit plan. Traders should avoid oversized positions and should not treat option premiums as low-risk simply because the upfront cost appears small.",
      "Capital Gainer focuses on clear levels, risk boundaries, and disciplined execution so clients can evaluate opportunities with a structured process.",
    ],
  },
  {
    id: "2",
    title: "Risk Management Strategies for Volatile Markets",
    excerpt:
      "Discover how to protect your portfolio during market uncertainty with proven risk management techniques.",
    category: "Strategy",
    date: "May 15, 2026",
    content: [
      "Volatile markets reward preparation. Before entering a trade, investors should define the reason for the trade, the invalidation level, and the amount of capital at risk.",
      "Diversification, staggered entries, and stop-loss discipline can reduce the impact of sharp intraday moves. Review periods also matter because short-term noise can distort decisions that were originally made for a longer horizon.",
      "A consistent risk framework helps keep individual trades from driving portfolio-level outcomes.",
    ],
  },
  {
    id: "3",
    title: "IPO Analysis: From Application to Listing Day Decisions",
    excerpt:
      "A comprehensive guide to evaluating IPO opportunities and making informed decisions on new listings.",
    category: "Analysis",
    date: "May 12, 2026",
    content: [
      "IPO decisions should include more than subscription data. Investors should review the business model, revenue quality, valuation, promoter history, and stated use of proceeds.",
      "Listing-day price action can be emotional, so a plan should be prepared before allotment. Investors should decide whether they are applying for a listing gain, a medium-term allocation, or a long-term position.",
      "Research-led decision making helps separate momentum from durable opportunity.",
    ],
  },
]

export type BlogPost = (typeof blogPosts)[number]
