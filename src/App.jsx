import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Menu,
  Network,
  PanelTop,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'path', label: 'Path' },
  { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Selected work' },
  { id: 'skills', label: 'Toolkit' },
];

const skillGroups = [
  { title: 'Build', icon: Code2, items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'Python', 'Flask', 'C++'] },
  { title: 'Think', icon: BrainCircuit, items: ['Logistic Regression', 'Random Forest', 'XGBoost', 'SHAP', 'Graph Algorithms', "Dijkstra's Algorithm", 'Chinese Postman Problem'] },
  { title: 'Ship', icon: Database, items: ['MySQL', 'SQLite', 'Git', 'GitHub', 'XAMPP', 'Leaflet', 'OpenStreetMap'] },
];

const timeline = [
  {
    year: '2022 — 2025',
    label: 'The foundation',
    title: 'B.Com CA',
    org: "Virudhunagar Hindu Nadars' Senthikumara Nadar College",
    detail: 'A commerce foundation that sharpened my relationship with systems, structure, and the way real-world decisions become data.',
    icon: GraduationCap,
  },
  {
    year: 'May — Jul 2025',
    label: 'The first full stack',
    title: 'PHP Full-Stack Development Training',
    org: 'Get-in Technology, Virudhunagar District',
    detail: 'Built a practical web foundation across interfaces, backend logic, databases, and the full loop between them.',
    icon: Terminal,
  },
  {
    year: '2025 — 2027',
    label: 'The next chapter',
    title: 'MCA · Currently pursuing',
    org: 'Hindusthan College of Arts and Science',
    detail: 'Going deeper into software development, algorithms, and the AI/ML work that now shapes my projects.',
    icon: Network,
  },
];

const projects = [
  {
    index: '01',
    type: 'AI / ML · CURRENT',
    title: 'AI-Based Fraud Detection System for UPI Transaction',
    copy: 'A transaction intelligence project in progress — using machine learning to help identify suspicious UPI activity and make its reasoning visible.',
    tags: ['Python / Flask', 'MySQL', 'Logistic Regression', 'Random Forest', 'XGBoost', 'SHAP'],
    accent: 'lime',
    icon: ShieldCheck,
  },
  {
    index: '02',
    type: 'FULL-STACK · PHP',
    title: 'AI-Based Price Comparison System',
    copy: 'A rule-based PHP full-stack project designed to bring product comparison into one clear, useful experience.',
    tags: ['PHP', 'HTML / CSS', 'JavaScript', 'MySQL'],
    accent: 'orange',
    icon: Layers3,
  },
  {
    index: '03',
    type: 'E-COMMERCE · PHP',
    title: "Online Men's Wear Store",
    copy: 'An e-commerce build exploring product browsing, a storefront flow, and the practical details behind an online catalogue.',
    tags: ['PHP', 'HTML / CSS', 'JavaScript', 'MySQL'],
    accent: 'cyan',
    icon: PanelTop,
  },
  {
    index: '04',
    type: 'TRAINING / PRACTICE',
    title: 'Headphone Zone UI Clone',
    copy: 'A UI practice project focused on translating a commerce interface into a responsive frontend. Not affiliated with the original brand.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    accent: 'violet',
    icon: BriefcaseBusiness,
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { rootMargin: '-22% 0px -64% 0px', threshold: 0 },
    );
    const sections = document.querySelectorAll('main section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    const nodes = document.querySelectorAll('.reveal');
    nodes.forEach((node) => revealObserver.observe(node));
    return () => revealObserver.disconnect();
  }, []);

  const currentMilestone = timeline[selectedMilestone];
  const allSkills = useMemo(() => skillGroups.flatMap((group) => group.items), []);

  return (
    <div className="portfolio-shell min-h-[100dvh] bg-background text-foreground">
      <div className="site-grid pointer-events-none absolute inset-x-0 top-0 h-[42rem] opacity-70" />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border/80 bg-background/75 px-4 py-3 backdrop-blur-xl sm:px-5">
          <button type="button" onClick={() => scrollToSection('home')} className="group flex items-center gap-3 text-left" data-testid="button-logo-home" aria-label="Scroll to home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground transition-transform group-hover:rotate-6">M</span>
            <span className="hidden text-sm font-bold tracking-tight sm:block">Mohammed Anas<span className="text-primary">.</span></span>
          </button>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-lg px-3 py-2 font-mono-ui text-[11px] tracking-wide transition-colors ${activeSection === item.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a href="mailto:mohammedanas5673@gmail.com" className="hidden items-center gap-2 rounded-lg border border-primary/40 px-3 py-2 font-mono-ui text-[11px] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:flex" data-testid="link-header-email">
            Let’s connect <ArrowUpRight size={14} />
          </a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden" data-testid="button-mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border bg-card p-2 shadow-2xl md:hidden">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => { scrollToSection(item.id); setMenuOpen(false); }} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-muted-foreground hover:bg-muted hover:text-foreground" data-testid={`button-mobile-nav-${item.id}`}>
                {item.label}<ChevronRight size={15} />
              </button>
            ))}
            <a href="mailto:mohammedanas5673@gmail.com" onClick={() => setMenuOpen(false)} className="mt-1 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground" data-testid="link-mobile-email">Let’s connect <ArrowUpRight size={16} /></a>
          </div>
        )}
      </header>

      <main className="relative">
        <section id="home" className="mx-auto flex min-h-[100dvh] max-w-7xl scroll-mt-28 items-center px-6 pb-20 pt-36 lg:px-10">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.07fr_.93fr] lg:gap-10">
            <div>
              <div className="reveal flex items-center gap-3 section-kicker">
                <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
                MCA student · software developer in progress
              </div>
              <h1 className="reveal delay-1 mt-7 max-w-4xl font-display text-[clamp(3.6rem,8vw,7.6rem)] font-medium leading-[.91] tracking-[-.07em] text-balance">
                Building a <span className="text-primary">sharper</span> way forward<span className="text-accent">.</span>
              </h1>
              <p className="reveal delay-2 mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                I’m Mohammed Anas — an MCA student learning in public through full-stack systems, algorithms, and AI/ML projects that solve concrete problems.
              </p>
              <div className="reveal delay-3 mt-9 flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => scrollToSection('work')} className="group inline-flex items-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5" data-testid="button-hero-work">
                  See selected work <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </button>
                <a href="mailto:mohammedanas5673@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/70 hover:bg-primary/5" data-testid="link-hero-email">Email me <ArrowUpRight size={16} /></a>
              </div>
              <div className="reveal delay-3 mt-16 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono-ui text-[10px] uppercase tracking-[.16em] text-muted-foreground">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Currently building with Python + Flask</span>
              </div>
            </div>
            <div className="reveal delay-2 relative mx-auto w-full max-w-[30rem] lg:ml-auto">
              <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,hsl(67_86%_60%/.15),transparent_65%)] blur-2xl" />
              <div className="glass relative aspect-square overflow-hidden rounded-[2rem] p-6 sm:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.5%,hsl(var(--border)/.55)_50%,transparent_50.5%)] bg-[length:2.6rem_2.6rem] opacity-30" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="font-mono-ui text-[10px] uppercase tracking-[.2em] text-muted-foreground">/profile /01</span>
                    <Sparkles size={19} className="text-primary" />
                  </div>
                  <div className="relative mx-auto flex aspect-square w-[73%] items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-primary/35" />
                    <div className="absolute inset-[12%] rounded-full border border-dashed border-accent/55 orbit" />
                    <div className="absolute inset-[24%] rounded-full bg-primary/10 shadow-[0_0_5rem_hsl(67_86%_60%/.14)]" />
                    <div className="relative text-center">
                      <div className="font-display text-7xl font-semibold tracking-[-.1em] text-primary sm:text-8xl">MA</div>
                      <div className="mt-2 font-mono-ui text-[9px] uppercase tracking-[.22em] text-muted-foreground">learn · build · iterate</div>
                    </div>
                    <span className="absolute -right-1 top-[15%] h-2 w-2 rounded-full bg-accent" />
                    <span className="absolute bottom-[12%] left-[5%] h-1.5 w-1.5 rounded-full bg-secondary" />
                  </div>
                  <div className="flex items-end justify-between border-t border-border/70 pt-4">
                    <div><p className="font-mono-ui text-[10px] text-muted-foreground">NEXT FOCUS</p><p className="mt-1 text-sm font-semibold">Fraud detection / AI</p></div>
                    <span className="font-mono-ui text-[10px] text-primary">2025—27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-border/70 bg-card/35">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
            <span className="font-mono-ui text-[10px] uppercase tracking-[.2em] text-muted-foreground">A progress log, not a finished story</span>
            <div className="flex items-center gap-6 font-mono-ui text-[10px] uppercase tracking-[.12em] text-muted-foreground"><span>commerce</span><ChevronRight size={13} className="text-primary" /><span>full-stack</span><ChevronRight size={13} className="text-primary" /><span>intelligence</span></div>
          </div>
        </div>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-10 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
            <div className="reveal">
              <p className="section-kicker">01 / the point of view</p>
              <h2 className="mt-5 max-w-sm font-display text-4xl leading-[1.02] tracking-[-.05em] sm:text-5xl">Curiosity, made practical.</h2>
            </div>
            <div className="reveal delay-1">
              <p className="max-w-3xl text-2xl leading-[1.35] tracking-[-.025em] text-foreground sm:text-3xl">
                My path started in <span className="text-primary">B.Com CA</span>, moved through PHP full-stack training, and is now opening into Python, Flask, and AI/ML.
              </p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">I’m learning by making things: understanding the shape of a problem, building the system behind it, then staying close to the details until it feels useful. The goal is straightforward — become a successful software developer with the range to work from interface to intelligence.</p>
              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {['Understand the problem', 'Build the system', 'Keep getting better'].map((item, index) => <div key={item} className="border-l border-primary/60 pl-4"><span className="font-mono-ui text-[10px] text-primary">0{index + 1}</span><p className="mt-2 text-sm font-semibold">{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="path" className="scroll-mt-24 border-y border-border/70 bg-card/20">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <div className="reveal max-w-3xl">
              <p className="section-kicker">02 / the progression</p>
              <h2 className="mt-4 font-display text-4xl tracking-[-.05em] sm:text-5xl">From full-stack foundations to intelligent systems<span className="text-primary">.</span></h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">The same curiosity keeps widening the surface area: first learning how to ship a web experience, then how the backend supports it, and now how models can help make a difficult decision more understandable.</p>
            </div>
            <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              <div className="reveal delay-1 rounded-2xl border border-border bg-background/45 p-6 sm:p-8">
                <div className="flex items-center justify-between"><span className="section-kicker text-accent">PHP full stack</span><span className="font-mono-ui text-[10px] text-muted-foreground">01</span></div>
                <h3 className="mt-10 font-display text-3xl tracking-[-.045em]">Learning to ship the whole loop.</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">HTML + CSS + JavaScript + Bootstrap on the frontend, with PHP + MySQL + XAMPP behind the experience.</p>
                <div className="mt-7 flex flex-wrap gap-2">{['PHP', 'MySQL', 'Bootstrap', 'XAMPP'].map((item) => <span key={item} className="rounded-md border border-border px-2.5 py-1.5 font-mono-ui text-[10px] text-muted-foreground">{item}</span>)}</div>
              </div>
              <div className="reveal delay-2 flex items-center justify-center text-primary"><ArrowDownRight className="rotate-[-45deg] lg:rotate-0" size={24} /></div>
              <div className="reveal delay-3 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
                <div className="flex items-center justify-between"><span className="section-kicker">Python full stack</span><span className="font-mono-ui text-[10px] text-muted-foreground">02</span></div>
                <h3 className="mt-10 font-display text-3xl tracking-[-.045em]">Building toward useful intelligence.</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">HTML + CSS + JavaScript + Bootstrap paired with Python + Flask + MySQL, now applied to AI/ML projects.</p>
                <div className="mt-7 flex flex-wrap gap-2">{['Python', 'Flask', 'MySQL', 'AI / ML'].map((item) => <span key={item} className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1.5 font-mono-ui text-[10px] text-primary">{item}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai" className="scroll-mt-24 border-b border-border/70">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <div className="reveal grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div><p className="section-kicker">03 / the current focus</p><h2 className="mt-4 max-w-md font-display text-4xl leading-[.98] tracking-[-.05em] sm:text-6xl">Making model reasoning visible<span className="text-primary">.</span></h2></div>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">I’m currently applying Logistic Regression, Random Forest, XGBoost, and SHAP in my UPI fraud detection project — exploring not only a prediction, but the signals behind it.</p>
            </div>
            <div className="reveal delay-1 mt-14 grid gap-2 sm:grid-cols-5">
              {[
                ['01', 'Machine learning', BrainCircuit],
                ['02', 'Model training', Layers3],
                ['03', 'Prediction', Network],
                ['04', 'Fraud detection', ShieldCheck],
                ['05', 'SHAP explainability', Sparkles],
              ].map(([number, label, Icon]) => (
                <div key={label} className="relative rounded-xl border border-border bg-card/55 p-5 sm:min-h-36"><span className="font-mono-ui text-[10px] text-primary">{number}</span><Icon className="mt-8 text-muted-foreground" size={18} /><p className="mt-3 text-sm font-semibold">{label}</p>{number !== '05' && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden text-primary sm:block" size={15} />}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 border-y border-border/70 bg-card/20">
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
            <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="section-kicker">04 / the journey</p><h2 className="mt-4 font-display text-4xl tracking-[-.05em] sm:text-5xl">The route so far<span className="text-primary">.</span></h2></div>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">Different chapters, one continuous pull toward building better software.</p>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <div className="reveal delay-1">
                <div className="relative ml-2 border-l border-border pb-3">
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    return <button type="button" key={item.year} onClick={() => setSelectedMilestone(index)} className={`relative flex w-full gap-5 pb-10 pl-7 text-left transition-opacity ${selectedMilestone === index ? 'opacity-100' : 'opacity-45 hover:opacity-75'}`} data-testid={`button-milestone-${index}`}>
                      <span className={`absolute -left-[7px] top-0 flex h-3 w-3 rounded-full border-2 border-background ${selectedMilestone === index ? 'bg-primary shadow-[0_0_0_4px_hsl(67_86%_60%/.12)]' : 'bg-muted-foreground'}`} />
                      <span className="w-28 shrink-0 font-mono-ui text-[10px] leading-5 text-muted-foreground">{item.year}</span>
                      <span><span className="block font-mono-ui text-[10px] uppercase tracking-wider text-primary">{item.label}</span><span className="mt-1 block text-sm font-semibold">{item.title}</span></span>
                      <Icon size={16} className="ml-auto mt-1 shrink-0 text-muted-foreground" />
                    </button>;
                  })}
                </div>
              </div>
              <div className="reveal delay-2">
                <div className="glass relative min-h-[20rem] overflow-hidden rounded-2xl p-7 sm:p-10">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between"><span className="font-mono-ui text-[10px] uppercase tracking-[.2em] text-primary">{currentMilestone.label}</span><span className="font-mono-ui text-xs text-muted-foreground">{String(selectedMilestone + 1).padStart(2, '0')} / 03</span></div>
                    <h3 className="mt-12 max-w-md font-display text-4xl leading-none tracking-[-.05em] sm:text-5xl">{currentMilestone.title}</h3>
                    <p className="mt-4 max-w-lg text-sm font-medium text-muted-foreground">{currentMilestone.org}</p>
                    <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground">{currentMilestone.detail}</p>
                    <div className="mt-10 flex items-center gap-3 text-xs text-primary"><CircleDot size={15} /> A chapter that changed the next one</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-10 lg:py-40">
          <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">05 / selected work</p><h2 className="mt-4 font-display text-4xl tracking-[-.05em] sm:text-5xl">Ideas, in working form<span className="text-primary">.</span></h2></div><span className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-muted-foreground">04 projects / no shortcuts</span></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => { const Icon = project.icon; return <article key={project.title} className={`reveal delay-${(index % 3) + 1} group relative overflow-hidden rounded-2xl border border-border bg-card/65 p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8`}>
              <div className={`absolute -right-14 -top-14 h-40 w-40 rounded-full blur-3xl ${project.accent === 'lime' ? 'bg-primary/10' : project.accent === 'orange' ? 'bg-accent/10' : project.accent === 'cyan' ? 'bg-secondary/15' : 'bg-violet-400/10'}`} />
              <div className="relative flex min-h-[21rem] flex-col">
                <div className="flex items-start justify-between"><span className="font-mono-ui text-[10px] tracking-[.16em] text-muted-foreground">{project.index} / {project.type}</span><Icon size={21} className={`${project.accent === 'lime' ? 'text-primary' : project.accent === 'orange' ? 'text-accent' : project.accent === 'cyan' ? 'text-secondary' : 'text-violet-300'} transition-transform group-hover:rotate-12`} /></div>
                {project.index === '01' && <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-2.5 py-1 font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />Currently building</span>}
                <h3 className="mt-12 max-w-md font-display text-3xl leading-[1.02] tracking-[-.045em]">{project.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{project.copy}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-border bg-background/40 px-2.5 py-1.5 font-mono-ui text-[10px] text-muted-foreground">{tag}</span>)}</div>
              </div>
            </article>; })}
          </div>
        </section>

        <section className="border-y border-border/70 bg-[linear-gradient(110deg,hsl(193_49%_35%/.12),transparent_45%,hsl(67_86%_60%/.07))]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="reveal grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div><p className="section-kicker text-accent">A moment worth marking</p><h2 className="mt-5 max-w-md font-display text-4xl leading-[.98] tracking-[-.05em] sm:text-6xl">4th place.<br /><span className="text-primary">36 hours.</span></h2></div>
              <div className="border-l border-accent/50 pl-6 sm:pl-10"><div className="flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.18em] text-accent"><Sparkles size={14} /> Thiran 36-Hour Hackathon · August 2026</div><h3 className="mt-5 max-w-xl text-2xl font-semibold tracking-[-.03em]">Smart Garbage Collection Route Optimization</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">At Hindusthan College of Arts and Science, I worked on a route-optimization challenge using CPP with C++, graph algorithms, Dijkstra’s Algorithm, Leaflet, OpenStreetMap, and MySQL/SQLite. The result: 4th place and a cash prize.</p><div className="mt-7 flex flex-wrap gap-2">{['C++', 'CPP', 'Dijkstra’s Algorithm', 'Leaflet', 'OpenStreetMap'].map((item) => <span key={item} className="rounded-md bg-background/50 px-2.5 py-1.5 font-mono-ui text-[10px] text-foreground">{item}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-10 lg:py-40">
          <div className="reveal"><p className="section-kicker">06 / the toolkit</p><h2 className="mt-4 max-w-xl font-display text-4xl leading-[.98] tracking-[-.05em] sm:text-6xl">Tools I’m using to get better<span className="text-primary">.</span></h2></div>
          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {skillGroups.map((group, index) => { const Icon = group.icon; return <div key={group.title} className={`reveal delay-${index + 1} rounded-2xl border border-border bg-card/55 p-6 sm:p-7`}><div className="flex items-center justify-between"><span className="flex items-center gap-3 font-semibold"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon size={18} /></span>{group.title}</span><span className="font-mono-ui text-[10px] text-muted-foreground">0{index + 1}</span></div><div className="mt-8 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-md border border-border/80 px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">{item}</span>)}</div></div>; })}
          </div>
          <div className="reveal delay-2 mt-16 grid gap-8 border-t border-border pt-8 lg:grid-cols-[.7fr_1.3fr]"><div><span className="section-kicker">Currently learning</span><p className="mt-4 text-sm leading-6 text-muted-foreground">The active queue behind the next project.</p></div><div className="flex flex-wrap content-start gap-2">{['Python', 'Flask', 'Artificial Intelligence', 'Machine Learning', 'Fraud Detection', 'Full-Stack Development', 'Algorithms', 'Problem Solving', 'Git / GitHub', 'Software Development'].map((item) => <span key={item} className="flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/5 px-3 py-2.5 text-xs text-primary"><Check size={13} />{item}</span>)}</div></div>
          <p className="sr-only" data-testid="text-skill-count">{allSkills.length} skills listed</p>
        </section>

        <section id="github" className="scroll-mt-24 border-t border-border/70 bg-card/20">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="reveal flex flex-col gap-8 rounded-2xl border border-border bg-card/55 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-start gap-5"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><Github size={22} /></span><div><p className="section-kicker">07 / the public notebook</p><h2 className="mt-3 font-display text-3xl tracking-[-.045em]">Follow the work as it gets built.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">No fabricated activity counts — just the real profile where projects, experiments, and future repositories can live.</p></div></div>
              <a href="https://github.com/MoammedAnas5673" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg border border-primary/40 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground" data-testid="link-github-profile">Visit GitHub <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-border/70 px-6 py-28 lg:px-10 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="reveal relative overflow-hidden rounded-[2rem] border border-primary/30 bg-primary p-7 text-primary-foreground sm:p-12 lg:p-16">
              <div className="absolute -right-16 -top-28 h-72 w-72 rounded-full border-[2rem] border-primary-foreground/10" />
              <div className="absolute -bottom-40 left-[42%] h-72 w-72 rounded-full border-[3rem] border-primary-foreground/10" />
              <div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]"><div><p className="font-mono-ui text-[10px] uppercase tracking-[.2em] text-primary-foreground/65">08 / next conversation</p><h2 className="mt-6 max-w-3xl font-display text-5xl leading-[.9] tracking-[-.07em] sm:text-7xl">Let’s build<br />the next chapter<span className="text-accent">.</span></h2><p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/75">I’m open to conversations around software development, full-stack work, and the problems AI can make more understandable.</p><p className="mt-8 font-mono-ui text-[10px] uppercase tracking-[.16em] text-primary-foreground/65">Career goal / <span className="text-primary-foreground">Become a successful software developer.</span></p></div><a href="mailto:mohammedanas5673@gmail.com" className="group inline-flex items-center justify-between gap-8 rounded-xl bg-background px-5 py-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-1 sm:min-w-64" data-testid="link-contact-email">mohammedanas5673@gmail.com <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-display text-lg font-semibold">Mohammed Anas<span className="text-primary">.</span></p><p className="mt-1 font-mono-ui text-[10px] uppercase tracking-[.13em] text-muted-foreground">Software developer in progress</p></div>
          <div className="flex items-center gap-3"><a href="https://github.com/MoammedAnas5673" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" data-testid="link-footer-github" aria-label="Mohammed Anas on GitHub"><Github size={16} /></a><a href="https://www.linkedin.com/in/mohammedanas5673/" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" data-testid="link-footer-linkedin" aria-label="Mohammed Anas on LinkedIn"><Linkedin size={16} /></a><a href="mailto:mohammedanas5673@gmail.com" className="ml-2 font-mono-ui text-[10px] text-muted-foreground transition-colors hover:text-primary" data-testid="link-footer-email">mohammedanas5673@gmail.com</a></div>
          <p className="font-mono-ui text-[10px] text-muted-foreground sm:text-right">Mohammed Anas<br />Keep building.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;