import { ArrowRight, Check, Gauge, Lock, Menu, Play, Rocket, Shield, Sparkles, Star, Wand2, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  { label: "Project shipped", value: "4.8k+" },
  { label: "Avg. conversion lift", value: "+42%" },
  { label: "Design-to-code speed", value: "3x" },
];

const features = [
  {
    icon: Wand2,
    title: "AI-powered design cloning",
    description: "Transform any live website into a clean, editable React UI in minutes.",
  },
  {
    icon: Gauge,
    title: "Build faster",
    description: "Move from mockup to front-end with reusable sections and production-ready code.",
  },
  {
    icon: Shield,
    title: "Production-safe",
    description: "Output is structured, maintainable, and aligned with modern Next.js conventions.",
  },
];

const steps = [
  "Paste your target URL",
  "AI maps the structure and sections",
  "Review and fine-tune the visual details",
  "Ship the polished front-end",
];

const testimonials = [
  {
    quote:
      "We reduced our landing page delivery time from days to a few hours without sacrificing quality.",
    author: "Maya Chen",
    role: "VP of Product",
  },
  {
    quote:
      "This is the closest thing to a design-to-code accelerator for marketing pages and product UI.",
    author: "Daniel Ruiz",
    role: "Creative Director",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="rounded-full border border-border/80 bg-background/80 px-4 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">Website Clone</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
              <a href="#features" className="transition hover:text-foreground">Features</a>
              <a href="#workflow" className="transition hover:text-foreground">Workflow</a>
              <a href="#reviews" className="transition hover:text-foreground">Reviews</a>
              <a href="#pricing" className="transition hover:text-foreground">Pricing</a>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Log in
              </Button>
              <Button size="sm">Start free</Button>
              <button className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden">
                <Menu className="size-4" />
              </button>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden pb-12 pt-18 sm:pt-20">
          <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(120,119,198,0.18),_transparent_55%)]" />

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-primary">
              <Star className="size-3.5 fill-current" />
              Build production-ready UI from any website
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-5xl lg:text-7xl">
              Turn inspiration into a polished front-end.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Design, inspect, and rebuild landing pages with AI-assisted analysis and modern Next.js foundations.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Get started
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="size-4 fill-current" />
                Watch demo
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                  <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Everything you need</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Made for modern product teams</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Workflow</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">From inspiration to implementation</h2>

            <div className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-border/80 bg-background/80 p-4">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Launch checklist</p>
                <h3 className="mt-1 text-2xl font-semibold">Ready to ship</h3>
              </div>
              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-500">
                <Rocket className="size-5" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Responsive layout system",
                "Accessible interactive states",
                "Reusable section architecture",
                "Tailwind + shadcn conventions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/80 p-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <Check className="size-4" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-dashed border-border bg-background/60 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Design quality</span>
                <span className="text-sm font-semibold">96/100</span>
              </div>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-primary to-violet-500" />
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Customer stories</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Loved by fast-moving teams</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.author} className="rounded-[2rem] border border-border bg-card p-7 shadow-sm">
                <div className="mb-5 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-foreground">“{item.quote}”</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Zap className="size-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-12">
          <div className="rounded-[2rem] border border-border bg-gradient-to-r from-primary/10 via-background to-card p-8 text-center shadow-sm sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start free. Upgrade when you scale.</h2>
            <div className="mt-8 flex items-end justify-center gap-2">
              <span className="text-5xl font-semibold tracking-tight">$29</span>
              <span className="pb-2 text-muted-foreground">/ month</span>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">Start 14-day trial</Button>
              <Button variant="outline" size="lg">Talk to sales</Button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-border py-10 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Website Clone</p>
          <div className="flex items-center gap-5">
            <a href="#features" className="transition hover:text-foreground">Features</a>
            <a href="#workflow" className="transition hover:text-foreground">Workflow</a>
            <a href="#reviews" className="transition hover:text-foreground">Reviews</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
