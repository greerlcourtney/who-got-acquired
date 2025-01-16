import React from "react";
import { Card } from "@/components/ui/card";
const About = () => {
  return (
    <div className="min-h-screen bg-matrix-dark">
      <div className="container py-12">
        <Card className="bg-matrix-dark/50 border-matrix-green/30 p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-mono text-matrix-green mb-8">About Infiniti-minds</h1>
          
          <article className="prose prose-invert max-w-none">
            <div className="space-y-6 text-white/80">
              <p className="text-lg">Welcome to the byte-sized world of startup insights!</p>
              
              <p>
                It all started with a flood of headlines. You know the type—big valuations, new funding rounds, 
                jargon-packed updates that felt like they were written in a secret language.
              </p>
              
              <p>
                At some point, I decided to stop trying to keep up and start breaking things down instead. 
                I started jotting down what I learned—quick notes, little insights, moments that clicked. 
                That one conversation with a founder that changed how I thought about scaling. The event 
                where I stumbled into a panel that explained terms I'd been pretending to understand. 
                The day I realized how much storytelling goes into a pitch.
              </p>
              
              <p>
                Those notes turned into this site. It's a collection of the things I've picked up along 
                the way. You'll find quick market insights right on the homepage, because we all want to 
                look smart but have limited time. Blog posts capturing my experiences: events I've attended, 
                things I've overheard in crowded startup meetups. It's not perfect. It's not polished. 
                But it's real. It's what I wish I'd had when I started, somewhere to go when you're 
                curious but don't know where to start.
              </p>
              
              <p>So here it is. My journey, scribbled down, shared out loud. Let's see where it goes.</p>
            </div>
          </article>
        </Card>
      </div>
    </div>
  );
};
export default About;
