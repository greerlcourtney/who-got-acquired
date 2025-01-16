import React from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
export const YearToDateSummary = () => {
  const sectorData = [
    { name: "AI/ML", value: 45 },
    { name: "Fintech", value: 25 },
    { name: "Healthcare", value: 15 },
    { name: "Enterprise", value: 15 },
  ];
  const marketData = [
    { name: "North America", value: 50 },
    { name: "Europe", value: 25 },
    { name: "Asia", value: 15 },
    { name: "Rest of World", value: 10 },
  ];
  const COLORS = ["#00FF41", "#00CC33", "#009926", "#006619"];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-6">Year To Date Summary</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl text-matrix-green mb-4 text-center">Top Sectors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sectorData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#00FF41"
                paddingAngle={5}
                dataKey="value"
              >
                {sectorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#0D1117", border: "1px solid #00FF41" }} />
              <Legend wrapperStyle={{ color: "#FFFFFF" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl text-matrix-green mb-4 text-center">Global Markets</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#00FF41"
                paddingAngle={5}
                dataKey="value"
              >
                {marketData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#0D1117", border: "1px solid #00FF41" }} />
              <Legend wrapperStyle={{ color: "#FFFFFF" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};