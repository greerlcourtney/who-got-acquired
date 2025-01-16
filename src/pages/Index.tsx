
import { NewsTicker } from "@/components/NewsTicker";
import { TopInvestments } from "@/components/TopInvestments";
import { NewAcquisitions } from "@/components/NewAquistions";
import { YearToDateSummary } from "@/components/YearToDateSummary";
import { TopNews } from "@/components/TopNews";
import { RecentBlogs } from "@/components/RecentBlogs";


const Index = () => {
  return (
    <div className="min-h-screen bg-matrix-dark">
      <header className="py-6 border-b border-matrix-green/30">
        <div className="container">
          <h1 className="text-4xl font-mono text-matrix-green animate-glow">Infiniti-minds</h1>
          <p className="text-white/80 mt-2">AI Investment Intelligence</p>
        </div>
      </header>
      <NewsTicker />
      <main className="container py-12">
      <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopInvestments />
            <NewAcquisitions />
          </div>
          <YearToDateSummary />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopNews />
            <RecentBlogs />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;