import React from "react";
import { NewsTicker } from "@/components/NewsTicker";
import { MarketPulse } from "@/components/MarketPulse";
import { InvestmentMetrics } from "@/components/InvestmentMetrics";
import { MicroInsights } from "@/components/MicroInsights";
import { EmergingTrends } from "@/components/EmergingTrends";

const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-dark">
      <header className="py-6 border-b border-matrix-green/30">
        <div className="container">
          <h1 className="text-4xl font-mono text-matrix-green animate-glow">Infiniti-minds</h1>
          <p className="text-white/80 mt-2">AI Investment Intelligence</p>
        </div>
      </header>

      <NewsTicker />

      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MarketPulse />
          <InvestmentMetrics />
          <MicroInsights />
          <EmergingTrends />
        </div>
      </main>
    </div>
  );
};

export default Index;