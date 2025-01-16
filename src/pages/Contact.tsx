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
        <div className="max-w-2xl mx-auto mb-12 space-y-4 text-matrix-green/90">
          <p>
            Your feedback and insights are invaluable to me! I'd love to hear from you about:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your thoughts on the site and its content</li>
            <li>Topics you'd like to see covered in future updates</li>
            <li>Suggestions for improving the user experience</li>
            <li>Any advice or insights from your own startup journey</li>
          </ul>
          <p className="mt-6">
            Whether you're a founder, investor, or just passionate about the startup ecosystem,
            your perspective helps make this platform better for everyone.
          </p>
        </div>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;