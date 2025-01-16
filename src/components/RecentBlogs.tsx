import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export const RecentBlogs = () => {
  // This would be replaced with actual data from your database
  const recentPosts = [
    {
      title: "The Future of AI Investment",
      excerpt: "Analysis of emerging trends in AI venture capital",
      link: "/blog",
      date: "2024-03-01",
    },
    {
      title: "Startup Valuation Methods in 2024",
      excerpt: "New approaches to valuing early-stage companies",
      link: "/blog",
      date: "2024-02-28",
    },
    {
      title: "The Rise of DeepTech",
      excerpt: "How deep technology is reshaping venture investment",
      link: "/blog",
      date: "2024-02-27",
    },
  ];
  return (
    <Card className="bg-matrix-dark/50 border-matrix-green/30 p-6">
      <h2 className="text-2xl font-mono text-matrix-green mb-6">Recent Blog Posts</h2>
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <Link
            key={index}
            to={post.link}
            className="block border-b border-matrix-green/30 last:border-0 pb-4 last:pb-0 hover:bg-matrix-green/5 transition-colors rounded p-2 -mx-2"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-matrix-green hover:brightness-125 transition-all">
                {post.title}
              </h3>
              <ArrowRight className="text-matrix-green h-4 w-4" />
            </div>
            <p className="text-white/80 text-sm mb-2">{post.excerpt}</p>
            <span className="text-matrix-green/60 text-xs">{post.date}</span>
          </Link>
        ))}
      </div>
    </Card>
  );
};