export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Modern Landing Page</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A polished, high-performance marketing homepage built with Next.js 14+,
          TypeScript, and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}