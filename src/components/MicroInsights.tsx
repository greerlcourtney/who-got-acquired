import React from "react";
import { Card } from "@/components/ui/card";

export const MicroInsights = () => {
  const insights = [
    {
      title: "AI Chip Demand Surges",
      content: "TSMC reports 300% increase in AI chip orders. Major tech companies securing supply chains through 2025.",
      link: "#",
    },
    {
      title: "New AI Regulation",
      content: "EU announces comprehensive AI governance framework. Impact on startups expected to be minimal.",
      link: "#",
    },
    {
      title: "Emerging Tech Trend",
      content: "Multimodal AI models gaining traction with investors. Five new startups raised $100M+ this month.",
      link: "#",
    },
  ];

  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-4">Micro-Insights</h2>
      <div className="space-y-6">
        {insights.map((insight, index) => (
          <div key={index} className="border-b border-matrix-green/30 last:border-0 pb-4 last:pb-0">
            <h3 className="text-matrix-green/80 mb-2">{insight.title}</h3>
            <p className="text-white/80 mb-2">{insight.content}</p>
            <a href={insight.link} className="text-matrix-green hover:brightness-125 transition-all">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </Card>
  );
};