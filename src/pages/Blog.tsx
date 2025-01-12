import { BlogGrid } from "@/components/BlogGrid";

const Blog = () => {
  return (
    <div className="min-h-screen bg-matrix-dark">
      <header className="py-6 border-b border-matrix-green/30">
        <div className="container">
          <h1 className="text-4xl font-mono text-matrix-green">Blog</h1>
          <p className="text-white/80 mt-2">Latest insights and analysis</p>
        </div>
      </header>

      <main className="container py-12">
        <BlogGrid />
      </main>
    </div>
  );
};

export default Blog;