import React from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
export const TopNews = () => {
  // This would be replaced with actual data from your database
  const newsArticles = [
    {
      headline: "Revolutionary AI Startup Secures Record Funding",
      summary: "A breakthrough in natural language processing leads to unprecedented investment round.",
      link: "#",
      source: "TechCrunch",
    },
    {
      headline: "Fintech Disruption in Emerging Markets",
      summary: "How new financial technologies are transforming banking in developing nations.",
      link: "#",
      source: "Forbes",
    },
    {
      headline: "Healthcare Tech Merger Creates Industry Giant",
      summary: "Major consolidation in the digital health space signals market maturity.",
      link: "#",
      source: "Reuters",
    },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-6">Top Startup News</h2>
      <div className="space-y-4">
        {newsArticles.map((article, index) => (
          <div key={index} className="border-b border-matrix-green/30 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-matrix-green hover:brightness-125 transition-all">
                {article.headline}
              </h3>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-green hover:brightness-125 transition-all"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-white/80 text-sm mb-2">{article.summary}</p>
            <span className="text-matrix-green/60 text-xs">{article.source}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};