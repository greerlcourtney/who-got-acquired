import React from "react";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-matrix-dark">
      <header className="py-6 border-b border-matrix-green/30">
        <div className="container">
          <h1 className="text-4xl font-mono text-matrix-green">Contact Us</h1>
          <p className="text-white/80 mt-2">Get in touch with our team</p>
        </div>
      </header>

      <main className="container py-12">
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;