import React, { useState, useEffect } from "react";

interface NewsArticle {
  _id: string;
  title: string;
  summary: string;
  contentlink: string;
}

const TestData: React.FC = () => {
  const [data, setData] = useState<NewsArticle[]>([]); // State for fetched data
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    // Simulate fetching data from the database
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setData([
          {
            _id: "1",
            title: "AI Startup Raises $20M",
            summary: "An AI startup has secured funding to revolutionize healthcare.",
            contentlink: "https://example.com/ai-startup-raises-20m",
          },
          {
            _id: "2",
            title: "Tech Giant Acquires Robotics Firm",
            summary: "The acquisition is set to boost automation in manufacturing.",
            contentlink: "https://example.com/tech-giant-acquires-robotics-firm",
          },
          {
            _id: "3",
            title: "Blockchain Startup Expands",
            summary: "The startup plans to expand into emerging markets.",
            contentlink: "https://example.com/blockchain-startup-expands",
          },
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-matrix-dark">
      {/* Header Section */}
      <header className="py-6 border-b border-matrix-green/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-mono text-matrix-green">Latest AI Investment News</h1>
          <p className="text-white/80 mt-2">
            Keep up to date on investment news, bookmark Infiniti Minds.
          </p>
        </div>
      </header>

      {/* Main Section */}
      <main id="test-data" className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-matrix-green">Loading data...</p>
          </div>
        ) : (
          <ul className="text-white space-y-6">
            {data.map((item) => (
              <li key={item._id} className="border-b border-matrix-green/30 pb-4">
                <h2 className="text-xl font-bold text-matrix-green">{item.title}</h2>
                <p className="text-white/80 mt-2">{item.summary}</p>
                <a
                  href={item.contentlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-matrix-green hover:underline mt-4 inline-block"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default TestData;
