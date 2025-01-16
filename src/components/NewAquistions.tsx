import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
export const NewAcquisitions = () => {
  // This would be replaced with actual data from your database
  const acquisitions = [
    { acquired: "Tech Startup A", acquirer: "Big Tech Inc", value: "$1B", date: "2024-03-01" },
    { acquired: "AI Company B", acquirer: "Tech Giant Co", value: "$500M", date: "2024-02-28" },
    { acquired: "Data Firm C", acquirer: "Enterprise Corp", value: "$300M", date: "2024-02-27" },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h3 className="text-xl font-mono text-matrix-green mb-4">New Acquisitions This Week</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-matrix-green">Acquired</TableHead>
            <TableHead className="text-matrix-green">Acquirer</TableHead>
            <TableHead className="text-matrix-green">Value</TableHead>
            <TableHead className="text-matrix-green">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {acquisitions.map((acq, index) => (
            <TableRow key={index}>
              <TableCell className="text-white">{acq.acquired}</TableCell>
              <TableCell className="text-white">{acq.acquirer}</TableCell>
              <TableCell className="text-white">{acq.value}</TableCell>
              <TableCell className="text-white">{acq.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};