import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface BlogPost {
  title: string;
  excerpt: string;
  type: "article" | "podcast" | "video";
  industry: "fintech" | "healthcare" | "enterprise" | "consumer" | "general";
  link: string;
  image?: string;
}

const posts: BlogPost[] = [
  {
    title: "The Future of AI Investment",
    excerpt: "Analysis of emerging trends in AI venture capital",
    type: "article",
    industry: "general",
    link: "#",
  },
  {
    title: "AI Startup Valuation Methods",
    excerpt: "How to value AI companies in 2024",
    type: "podcast",
    industry: "fintech",
    link: "#",
  },
  {
    title: "Interview: Leading AI VC",
    excerpt: "Insights from top investors",
    type: "video",
    industry: "enterprise",
    link: "#",
  },
];

export const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "all" || post.type === selectedType;
    const matchesIndustry = selectedIndustry === "all" || post.industry === selectedIndustry;

    return matchesSearch && matchesType && matchesIndustry;
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-matrix-dark/50 border-matrix-green/30 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Content Type</Label>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger
              id="type"
              className="bg-matrix-dark/50 border-matrix-green/30 text-white"
            >
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-matrix-dark border-matrix-green/30">
              <SelectItem value="all" className="text-white">All Types</SelectItem>
              <SelectItem value="article" className="text-white">Articles</SelectItem>
              <SelectItem value="podcast" className="text-white">Podcasts</SelectItem>
              <SelectItem value="video" className="text-white">Videos</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger
              id="industry"
              className="bg-matrix-dark/50 border-matrix-green/30 text-white"
            >
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent className="bg-matrix-dark border-matrix-green/30">
              <SelectItem value="all" className="text-white">All Industries</SelectItem>
              <SelectItem value="fintech" className="text-white">Fintech</SelectItem>
              <SelectItem value="healthcare" className="text-white">Healthcare</SelectItem>
              <SelectItem value="enterprise" className="text-white">Enterprise</SelectItem>
              <SelectItem value="consumer" className="text-white">Consumer</SelectItem>
              <SelectItem value="general" className="text-white">General</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <Card
            key={index}
            className="bg-matrix-dark/50 border-matrix-green/30 hover:border-matrix-green transition-colors cursor-pointer group"
          >
            <a href={post.link} className="block p-6">
              <div className="mb-4 flex justify-between">
                <span className="text-matrix-green/80 text-sm uppercase">{post.type}</span>
                <span className="text-matrix-green/60 text-sm">{post.industry}</span>
              </div>
              <h3 className="text-matrix-green group-hover:brightness-125 transition-all text-xl mb-2">
                {post.title}
              </h3>
              <p className="text-white/80">{post.excerpt}</p>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};