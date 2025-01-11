import React from "react";

const newsItems = [
  "OpenAI raises $100M in Series D funding",
  "Anthropic secures $750M investment",
  "New AI chip startup emerges with $50M seed round",
  "DeepMind announces breakthrough in quantum AI",
  "AI infrastructure company closes $200M round",
];

export const NewsTicker = () => {
  return (
    <div className="bg-matrix-dark border-y border-matrix-green/30 overflow-hidden py-2">
      <div className="animate-ticker whitespace-nowrap">
        {newsItems.map((item, index) => (
          <span key={index} className="inline-block mx-8 text-matrix-green font-mono">
            {item} • 
          </span>
        ))}
      </div>
    </div>
  );
};