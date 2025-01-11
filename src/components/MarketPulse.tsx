import React from "react";
import { Card } from "@/components/ui/card";

export const MarketPulse = () => {
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-4">Quick Market Pulse</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-matrix-green/80 mb-2">Top Deal of the Week</h3>
          <p className="text-white/80">Anthropic secures $750M investment led by Sequoia Capital</p>
        </div>
        <div>
          <h3 className="text-matrix-green/80 mb-2">Market Valuation</h3>
          <p className="text-white/80">Global AI market cap: $1.2T</p>
        </div>
      </div>
    </Card>
  );
};