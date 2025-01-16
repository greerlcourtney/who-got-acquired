import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
export const TopInvestments = () => {
  // This would be replaced with actual data from your database
  const investments = [
    { company: "AI Startup X", amount: "$50M", investor: "Sequoia Capital", date: "2024-03-01" },
    { company: "Tech Corp Y", amount: "$30M", investor: "Andreessen Horowitz", date: "2024-02-28" },
    { company: "Data Co Z", amount: "$25M", investor: "Accel", date: "2024-02-27" },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h3 className="text-xl font-mono text-matrix-green mb-4">Top Investments of the Week</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-matrix-green">Company</TableHead>
            <TableHead className="text-matrix-green">Amount</TableHead>
            <TableHead className="text-matrix-green">Lead Investor</TableHead>
            <TableHead className="text-matrix-green">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {investments.map((inv, index) => (
            <TableRow key={index}>
              <TableCell className="text-white">{inv.company}</TableCell>
              <TableCell className="text-white">{inv.amount}</TableCell>
              <TableCell className="text-white">{inv.investor}</TableCell>
              <TableCell className="text-white">{inv.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};