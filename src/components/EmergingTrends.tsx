import React from "react";
import { Card } from "@/components/ui/card";

export const EmergingTrends = () => {
  const trends = [
    {
      trend: "Multimodal AI",
      description: "Systems capable of processing multiple types of data simultaneously gaining traction",
      impact: "High adoption in enterprise solutions",
    },
    {
      trend: "Edge Computing AI",
      description: "Shift towards deploying AI models on edge devices",
      impact: "Growing market for specialized hardware",
    },
    {
      trend: "AI Governance Tools",
      description: "Rise in platforms for managing AI deployments",
      impact: "Increased investment in compliance solutions",
    },
  ];

  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-4">Emerging Technology Trends</h2>
      <div className="space-y-4">
        {trends.map((item, index) => (
          <div key={index} className="border-b border-matrix-green/30 last:border-0 pb-4 last:pb-0">
            <h3 className="text-matrix-green/80 mb-2">{item.trend}</h3>
            <p className="text-white/80 mb-1">{item.description}</p>
            <p className="text-matrix-green/60 text-sm">{item.impact}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};