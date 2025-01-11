import React from "react";
import { Card } from "@/components/ui/card";

export const InvestmentMetrics = () => {
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-4">Investment Metrics</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-matrix-green/80 mb-2">Global VC Funding</h3>
          <p className="text-white/80">$45.2B in AI startups YTD</p>
        </div>
        <div>
          <h3 className="text-matrix-green/80 mb-2">Top Sectors</h3>
          <ul className="text-white/80 list-disc list-inside">
            <li>Enterprise AI: 35%</li>
            <li>Healthcare AI: 25%</li>
            <li>AI Infrastructure: 20%</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};