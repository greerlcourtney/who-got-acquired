import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-mono text-matrix-green mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-matrix-green/80 block mb-2">Email</label>
          <Input
            type="email"
            className="bg-matrix-light border-matrix-green/30 text-white"
            required
          />
        </div>
        <div>
          <label className="text-matrix-green/80 block mb-2">Message</label>
          <Textarea
            className="bg-matrix-light border-matrix-green/30 text-white min-h-[150px]"
            required
          />
        </div>
        <Button
          type="submit"
          className="bg-matrix-green/20 border border-matrix-green text-matrix-green hover:bg-matrix-green/30 transition-colors"
        >
          Send Message
        </Button>
      </form>
    </Card>
  );
};