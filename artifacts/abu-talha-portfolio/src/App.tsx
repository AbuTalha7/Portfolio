import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  ExternalLink,
  Globe2,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';
import { SiDocker, SiExpress, SiGit, SiGithub, SiJavascript, SiLinux, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';
import type { IconType } from 'react-icons';
import profileImage from '@assets/0_WhatsApp_Image_2026-09-12_at_10.45.21_PM_1789281392834.jpeg';

const navItems = [
  { label: 'About', href: '#about', icon: CircleDot },
  { label: 'Services', href: '#services', icon: Layers3 },
  { label: 'Work', href: '#work', icon: BriefcaseBusiness },
  { label: 'Credentials', href: '#credentials', icon: Award },
];

const skills = [
  'MERN Stack Development',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'REST API Development',
  'Git & GitHub',
  'Linux',
  'DevOps',
  'CI/CD',
  'Docker',
  'Web Deployment',
  'Bug Fixing & Troubleshooting',
];

const skillIcons: Record<string, IconType> = {
  'MERN Stack Development': SiReact,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  JavaScript: SiJavascript,
  'Git & GitHub': SiGit,
  Linux: SiLinux,
  Docker: SiDocker,
};

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'MERN stack builds',
    copy: 'Fast, focused web products with React on the front and Node.js at the core. Built to be understood, extended, and trusted.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    tone: 'lavender',
  },
  {
    number: '02',
    icon: ServerCog,
    title: 'DevOps that ships',
    copy: 'Deployment pipelines, Docker environments, Linux servers, and the practical systems that move an app from localhost to live.',
    tags: ['Docker', 'CI/CD', 'Linux'],
    tone: 'blush',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Fixes without fuss',
    copy: 'A second pair of eyes for the stubborn bug, the slow endpoint, or the deployment that should have worked yesterday.',
    tags: ['Debugging', 'REST APIs', 'Support'],
    tone: 'blue',
  },
];

const certificates = [
  { title: 'META Frontend', detail: 'Professional Certificate', mark: 'FE', tone: 'certificate-lilac' },
  { title: 'META Backend', detail: 'Professional Certificate', mark: 'BE', tone: 'certificate-blush' },
  { title: 'KAMYAB Freelancing Full Stack', detail: 'Full Stack Development', mark: 'FS', tone: 'certificate-purple' },
  { title: 'OEC & ICMPD Soft Skills', detail: 'Professional Development', mark: 'SS', tone: 'certificate-blue' },
];

const contactFiles = [
  { name: 'Hero_BG.png', meta: 'PNG / 4.2 MB', kind: 'image' },
  { name: 'Promo_Cut.mp4', meta: 'MP4 / 128 MB', kind: 'video' },
  { name: 'app_config.json', meta: 'JSON / 12 KB', kind: 'code' },
  { name: 'Q3_Report.pdf', meta: 'PDF / 1.1 MB', kind: 'document' },
  { name: 'Pitch_Deck.pptx', meta: 'PPTX / 8.4 MB', kind: 'presentation' },
];

function ContactFolder() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const visibleFiles = contactFiles.filter((file) => file.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={`contact-folder ${isOpen ? 'contact-folder-open' : ''}`} data-testid="card-contact-folder">
      <div className="folder-hint" aria-hidden={isOpen}><span>Click to open</span><ArrowDown className="h-4 w-4" /></div>
      <button type="button" className="folder-stage" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label={isOpen ? 'Close project files' : 'Open project files'}>
        <div className="folder-back" />
        <div className="folder-search"><Search className="h-3.5 w-3.5 shrink-0" /><input value={query} onChange={(event) => setQuery(event.target.value)} onClick={(event) => event.stopPropagation()} placeholder="Search files..." aria-label="Search project files" /></div>
        <div className="folder-files" aria-hidden={!isOpen}>
          {visibleFiles.map((file, index) => <div key={file.name} className={`folder-file folder-file-${index + 1}`}><span className="folder-file-icon">{file.kind === 'image' ? <Globe2 /> : file.kind === 'video' ? <Rocket /> : file.kind === 'code' ? <Code2 /> : file.kind === 'document' ? <ExternalLink /> : <Layers3 />}</span><strong>{file.name}</strong><small>{file.meta}</small></div>)}
          {visibleFiles.length === 0 && <span className="folder-empty">No matching files</span>}
        </div>
        <div className="folder-front"><span className="folder-tab" /><span className="folder-counter"><span className="availability-dot" /> {visibleFiles.length.toString().padStart(2, '0')} FILES</span></div>
      </button>
    </div>
  );
}

function DevEmblem({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-emblem ${compact ? 'brand-emblem-compact' : ''}`} aria-hidden="true">
      <span className="brand-emblem-orbit">
        <span className="brand-emblem-orbit-dot" />
      </span>
      <span className="brand-emblem-orbit brand-emblem-orbit-two">
        <span className="brand-emblem-orbit-dot" />
      </span>
      <svg className="brand-emblem-svg" viewBox="0 0 64 64" fill="none">
        <path d="M17 15.5h25.5a5 5 0 0 1 5 5v23a5 5 0 0 1-5 5H17a5 5 0 0 1-5-5v-23a5 5 0 0 1 5-5Z" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12.5 25h35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".74" />
        <path d="m23 33-5 5 5 5m18-10 5 5-5 5m-5-12-4 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 9v12m0 0 4-4m-4 4-4-4" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="20" r="1.5" fill="hsl(var(--cream))" />
        <circle cx="24" cy="20" r="1.5" fill="hsl(var(--accent))" />
      </svg>
      <span className="brand-emblem-spark" />
    </span>
  );
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className={`brand-mark flex items-center ${compact ? 'justify-center' : 'gap-3'}`} aria-label="Abu Talha home" data-testid="link-brand-home">
      <DevEmblem compact={compact} />
      {!compact && (
        <span className="brand-lockup">
          <span className="brand-name block font-display text-base font-bold tracking-tight">Abu Talha<span className="text-accent">.</span></span>
          <span className="brand-subline"><span className="brand-status-dot" /> build / ship</span>
        </span>
      )}
    </a>
  );
}

function SectionLabel({ number, children, light = false }: { number: string; children: string; light?: boolean }) {
  return (
    <div className={`section-label mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.18em] ${light ? 'text-secondary' : 'text-primary'}`} data-testid={`text-section-${number}`}>
      <span className={`section-number flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${light ? 'bg-secondary text-foreground' : 'bg-secondary text-foreground'}`}>{number}</span>
      <span>{children}</span>
      <span className={`h-px w-10 ${light ? 'bg-secondary/50' : 'bg-primary/30'}`} />
    </div>
  );
}

function DesktopRail() {
  return (
    <aside className="desktop-rail fixed inset-y-0 left-0 z-40 hidden w-[94px] flex-col items-center py-7 lg:flex" data-testid="navigation-desktop-rail">
      <BrandMark compact />
      <div className="mt-20 flex flex-1 flex-col items-center gap-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.href} href={item.href} className="rail-link group flex h-12 w-12 items-center justify-center rounded-2xl text-muted-foreground" aria-label={item.label} data-testid={`link-rail-${item.label.toLowerCase()}`}>
              <Icon className="h-[19px] w-[19px]" />
              <span className="rail-tooltip pointer-events-none absolute left-[68px] rounded-lg bg-foreground px-2 py-1 font-mono-ui text-[9px] uppercase tracking-wider text-background opacity-0 transition-opacity group-hover:opacity-100">{item.label}</span>
            </a>
          );
        })}
      </div>
      <a href="#contact" className="rail-contact flex h-12 w-12 items-center justify-center rounded-2xl text-foreground" aria-label="Contact Abu Talha" data-testid="link-rail-contact">
        <Mail className="h-[19px] w-[19px]" />
      </a>
      <span className="mt-5 font-mono-ui text-[9px] tracking-[.2em] text-muted-foreground [writing-mode:vertical-rl]">PESHAWAR / PK</span>
    </aside>
  );
}

function MobileNavigation({ open, onClose, onToggle }: { open: boolean; onClose: () => void; onToggle: () => void }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 lg:hidden" data-testid="header-mobile-navigation">
      <nav className="mobile-nav relative flex items-center justify-between rounded-2xl px-4 py-3" aria-label="Mobile navigation">
        <BrandMark />
        <button type="button" onClick={onToggle} className="soft-control flex h-10 w-10 items-center justify-center rounded-xl" aria-label={open ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className={`mobile-menu absolute left-0 right-0 top-[calc(100%+10px)] rounded-2xl p-3 ${open ? 'mobile-menu-open' : ''}`} data-testid="menu-mobile-navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return <a key={item.href} href={item.href} onClick={onClose} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground/75 hover:bg-secondary/50" data-testid={`link-mobile-${item.label.toLowerCase()}`}><Icon className="h-4 w-4 text-primary" />{item.label}</a>;
          })}
          <a href="#contact" onClick={onClose} className="mt-2 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground" data-testid="link-mobile-hire">Hire Abu Talha <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </nav>
    </header>
  );
}

function StackIcon({ name }: { name: string }) {
  const Icon = skillIcons[name];
  return Icon ? <Icon aria-hidden="true" /> : <Code2 aria-hidden="true" />;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.title = 'Abu Talha — MERN Stack Developer & DevOps Engineer';
    const descriptionContent = 'Portfolio of Abu Talha, a MERN Stack Developer and DevOps Engineer building dependable web products and deployment systems.';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', descriptionContent);
    else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div id="top" className="portfolio-shell grain min-h-[100dvh]" data-testid="portfolio-page">
      <DesktopRail />
      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} onToggle={() => setMobileOpen((value) => !value)} />

      <main className="lg:pl-[94px]">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="hidden items-center justify-between border-b border-border/60 py-5 lg:flex" data-testid="header-site-navigation">
             <div className="flex items-center gap-3">
               <BrandMark compact />
               <span className="h-4 w-px bg-border/80" />
               <p className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-muted-foreground">Personal portfolio / 2025</p>
             </div>
            <div className="flex items-center gap-5 font-mono-ui text-[10px] uppercase tracking-[.14em] text-muted-foreground">
              <div className="flex items-center gap-4">
                {navItems.map((item) => <a key={item.href} href={item.href} className="text-foreground/60 transition-colors hover:text-primary" data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
                <a href="#contact" className="mini-cta rounded-lg px-3 py-2 text-primary-foreground" data-testid="link-nav-hire">Hire Abu Talha</a>
              </div>
              <span className="flex items-center gap-2"><span className="availability-dot h-2 w-2 rounded-full" /> Open to select projects</span>
              <a href="mailto:abutalha.dev70@gmail.com" className="text-primary hover:underline" data-testid="link-utility-email">abutalha.dev70@gmail.com</a>
            </div>
          </div>

          <section className="relative grid min-h-[760px] items-center gap-14 py-28 sm:py-32 lg:grid-cols-[1fr_.82fr] lg:gap-20 lg:py-24" aria-labelledby="hero-title">
            <div className="ambient-orb ambient-orb-one" />
            <div className="relative z-10 reveal">
              <div className="status-pill mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono-ui text-[10px] uppercase tracking-[.16em] text-primary" data-testid="status-availability"><span className="availability-dot h-2 w-2 rounded-full" /> Available for select projects</div>
              <p className="mb-4 font-mono-ui text-[11px] uppercase tracking-[.2em] text-muted-foreground" data-testid="text-hero-kicker">Hello, I&apos;m Abu Talha</p>
              <h1 id="hero-title" className="max-w-3xl font-display text-[clamp(3.5rem,8.4vw,7.7rem)] font-bold leading-[.88] tracking-[-.08em] text-foreground" data-testid="text-hero-heading">Software<br /><span className="text-primary">with a pulse.</span></h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg" data-testid="text-hero-description"><strong className="font-bold text-foreground">MERN Stack Developer | DevOps Engineer</strong><br />I turn clear ideas into reliable, live products — from the first component to the final deployment.</p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href="#contact" className="button-lift inline-flex items-center rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground" data-testid="link-hero-contact">Hire Abu Talha <ArrowUpRight className="ml-3 h-4 w-4" /></a>
                <a href="#work" className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-foreground" data-testid="link-hero-work">Explore featured work <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
              <div className="proof-strip mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border/80 pt-5" data-testid="text-hero-proof">
                <div><p className="font-display text-xl font-bold text-primary">MERN</p><p className="mt-1 font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Full-stack</p></div>
                <div><p className="font-display text-xl font-bold text-primary">DevOps</p><p className="mt-1 font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Deployment</p></div>
                <div><p className="font-display text-xl font-bold text-primary">PK</p><p className="mt-1 font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Peshawar</p></div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px] reveal reveal-delay-2 lg:justify-self-end">
              <div className="portrait-backdrop absolute -right-2 top-2 h-full w-full rounded-[2.4rem] sm:-right-6 sm:top-6" />
              <div className="portrait-frame relative overflow-hidden rounded-[2.4rem] p-2">
                <img src={profileImage} alt="Abu Talha wearing a dark green jacket and cap" className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-top" data-testid="img-profile-portrait" />
                <div className="portrait-caption absolute inset-x-6 bottom-6 flex items-end justify-between rounded-2xl p-4">
                  <div><p className="font-mono-ui text-[9px] uppercase tracking-[.18em] text-secondary" data-testid="text-profile-location">Peshawar, Pakistan</p><p className="mt-1 font-display text-lg font-bold text-background" data-testid="text-profile-role">Code with a human pulse.</p></div>
                  <div className="icon-tile icon-tile-blush flex h-9 w-9 items-center justify-center rounded-xl text-foreground"><Terminal className="h-4 w-4" /></div>
                </div>
              </div>
              <div className="float-slow neu absolute -bottom-8 -left-5 hidden rounded-2xl px-4 py-3 sm:block" data-testid="card-hero-stack"><div className="mb-1 flex items-center gap-2"><MonitorCog className="h-4 w-4 text-primary" /><span className="font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Current stack</span></div><p className="font-display text-sm font-bold">MERN <span className="text-accent">+</span> DevOps</p></div>
              <div className="drift icon-tile icon-tile-blush absolute -right-4 top-10 flex h-16 w-16 items-center justify-center rounded-2xl text-foreground" data-testid="badge-hero-engineer"><Rocket className="h-7 w-7" /></div>
            </div>
            <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[.18em] text-muted-foreground lg:flex" data-testid="link-scroll-about">Scroll to explore <ArrowDown className="h-4 w-4 text-accent" /></a>
          </section>

          <section id="about" className="scroll-mt-8 border-y border-border/60 py-24 lg:py-28" aria-labelledby="about-title">
            <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
              <div><SectionLabel number="01">A little context</SectionLabel><h2 id="about-title" className="max-w-md font-display text-4xl font-bold leading-[.98] tracking-[-.06em] sm:text-6xl" data-testid="text-about-heading">The person behind the pull request.</h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground" data-testid="text-about-copy">Good software is more than a list of technologies. It is curiosity, communication, and the discipline to finish what you start.</p><div className="mt-8 flex flex-wrap items-center gap-4"><a href="mailto:abutalha.dev70@gmail.com" className="inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4" data-testid="link-about-email"><Mail className="h-4 w-4" /> Say hello</a><a href="tel:+923147040080" className="inline-flex items-center gap-2 text-sm font-bold text-foreground/70 hover:text-primary" data-testid="link-about-phone"><Phone className="h-4 w-4" /> Call directly</a></div></div>
              <div className="grid gap-5 sm:grid-cols-[1.1fr_.9fr]">
                <div className="neu rounded-[1.8rem] p-7 sm:translate-y-8" data-testid="card-about-approach"><div className="icon-tile icon-tile-lilac mb-12 flex h-12 w-12 items-center justify-center rounded-2xl text-primary"><Sparkles className="h-5 w-5" /></div><p className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-muted-foreground">How I work</p><h3 className="mt-3 font-display text-2xl font-bold" data-testid="text-about-approach-title">Practical by default.</h3><p className="mt-3 text-sm leading-6 text-muted-foreground" data-testid="text-about-approach-copy">I care about clean architecture, sensible choices, and a product that still feels good to use six months later.</p></div>
                <div className="neu purple-card rounded-[1.8rem] p-7 text-primary-foreground" data-testid="card-about-education"><div className="icon-tile icon-tile-cream mb-12 flex h-12 w-12 items-center justify-center rounded-2xl text-foreground"><BriefcaseBusiness className="h-5 w-5" /></div><p className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-primary-foreground/65" data-testid="text-education-label">Currently grounded in</p><h3 className="mt-3 font-display text-2xl font-bold" data-testid="text-education-title">BS Software Engineering</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70" data-testid="text-education-school">COMSATS University Islamabad</p></div>
              </div>
            </div>
            <div className="mt-20 grid gap-4 sm:grid-cols-3" data-testid="list-about-details">
              <div className="neu-inset rounded-2xl px-5 py-4"><p className="font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Based in</p><p className="mt-2 flex items-center gap-2 text-sm font-bold"><MapPin className="h-4 w-4 text-accent" /> Peshawar, Pakistan</p></div>
              <div className="neu-inset rounded-2xl px-5 py-4"><p className="font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Best at</p><p className="mt-2 flex items-center gap-2 text-sm font-bold"><Code2 className="h-4 w-4 text-primary" /> Products that ship</p></div>
              <div className="neu-inset rounded-2xl px-5 py-4"><p className="font-mono-ui text-[9px] uppercase tracking-wider text-muted-foreground">Reach me</p><a href="mailto:abutalha.dev70@gmail.com" className="mt-2 flex items-center gap-2 text-sm font-bold text-primary" data-testid="link-about-email-detail"><Mail className="h-4 w-4" /> Email Abu</a></div>
            </div>
          </section>

          <section className="py-24 lg:py-28" aria-labelledby="skills-title">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><SectionLabel number="02">Tools I bring</SectionLabel><h2 id="skills-title" className="font-display text-4xl font-bold tracking-[-.06em] sm:text-6xl" data-testid="text-skills-heading">A stack with range.</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground sm:text-right" data-testid="text-skills-intro">From interface to infrastructure, I like knowing how the whole thing holds together.</p></div>
            <div className="mt-10 flex flex-wrap gap-3" data-testid="list-skills">
              {skills.map((skill, index) => <span key={skill} className={`skill-chip neu-sm rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 ${index === 0 ? 'skill-chip-featured' : ''}`} data-testid={`tag-skill-${skill.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}><StackIcon name={skill} />{skill}</span>)}
            </div>
          </section>
        </div>

        <section id="services" className="scroll-mt-8 services-band px-5 py-24 text-foreground sm:px-8 lg:py-28 lg:pl-[calc(3rem+94px)] lg:pr-12" aria-labelledby="services-title">
          <div className="mx-auto max-w-[1386px]"><div className="flex flex-col justify-between gap-7 border-b border-foreground/15 pb-12 sm:flex-row sm:items-end"><div><SectionLabel number="03" light>How I help</SectionLabel><h2 id="services-title" className="max-w-2xl font-display text-4xl font-bold leading-[.95] tracking-[-.06em] sm:text-6xl" data-testid="text-services-heading">Useful work.<br /><span className="text-secondary">No theatre.</span></h2></div><p className="max-w-sm text-sm leading-7 text-foreground/65" data-testid="text-services-intro">Whether you need a whole product or the one missing piece, the goal stays the same: make the next step easier.</p></div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.number} className={`service-card group min-h-[350px] rounded-[1.8rem] border p-6 sm:p-8 ${service.tone}`} data-testid={`card-service-${service.number}`}><div className="flex items-start justify-between"><span className="font-mono-ui text-xs text-secondary">{service.number}</span><span className="service-icon"><Icon className="h-6 w-6 text-secondary transition-transform duration-300 group-hover:rotate-12" /></span></div><h3 className="mt-20 font-display text-2xl font-bold" data-testid={`text-service-title-${service.number}`}>{service.title}</h3><p className="mt-4 text-sm leading-7 text-foreground/65" data-testid={`text-service-copy-${service.number}`}>{service.copy}</p><div className="mt-7 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full border border-foreground/20 px-3 py-1.5 font-mono-ui text-[10px] text-foreground/70" data-testid={`tag-service-${service.number}-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{tag}</span>)}</div></article>; })}</div>
          </div>
        </section>

        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <section id="work" className="scroll-mt-8 py-24 lg:py-32" aria-labelledby="work-title"><SectionLabel number="04">Selected work</SectionLabel><div className="grid items-end gap-7 lg:grid-cols-[1fr_1.1fr]"><h2 id="work-title" className="max-w-xl font-display text-4xl font-bold leading-[.95] tracking-[-.06em] sm:text-6xl" data-testid="text-work-heading">One project.<br /><span className="text-primary">A meaningful one.</span></h2><p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end" data-testid="text-work-intro">A digital learning space designed to make Quran education more accessible and approachable for its community.</p></div>
            <article className="neu project-card group mt-14 overflow-hidden rounded-[2rem] p-3 sm:p-5" data-testid="card-project-jamia"><div className="project-surface relative overflow-hidden rounded-[1.5rem]"><div className="project-dots absolute inset-0" /><div className="relative grid min-h-[420px] items-center gap-10 p-8 sm:p-14 lg:grid-cols-[1.1fr_.9fr]"><div><div className="mb-8 flex flex-wrap items-center gap-3"><span className="rounded-full bg-primary px-3 py-1.5 font-mono-ui text-[10px] uppercase tracking-[.14em] text-primary-foreground" data-testid="badge-project-featured">Featured project</span><span className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-foreground/55" data-testid="text-project-type">Education platform</span></div><h3 className="max-w-2xl font-display text-4xl font-bold leading-[.9] tracking-[-.07em] text-foreground sm:text-7xl" data-testid="text-project-title">Jamia<br /><span className="text-primary">Taleem-ul-Quran</span></h3><p className="mt-6 max-w-md text-sm leading-7 text-foreground/65" data-testid="text-project-description">A focused web presence for Quran learning, built to connect students with a clear path to knowledge.</p><a href="https://jamiataleemulquran.online/" target="_blank" rel="noreferrer" className="button-lift mt-8 inline-flex items-center rounded-xl bg-foreground px-5 py-3.5 text-sm font-bold text-background" data-testid="link-project-jamia">Visit live project <ExternalLink className="ml-3 h-4 w-4" /></a></div><div className="relative hidden h-72 lg:block" aria-label="Abstract project interface illustration" data-testid="illustration-project-interface"><div className="project-window absolute right-2 top-4 h-48 w-72 rotate-[-7deg] rounded-2xl p-4 transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:translate-x-2"><div className="flex items-center justify-between border-b border-border pb-3"><span className="font-mono-ui text-[9px] text-primary">JAMIA</span><span className="h-2 w-2 rounded-full bg-accent" /></div><div className="mt-6 h-2 w-28 rounded-full bg-primary/20" /><div className="mt-3 h-2 w-40 rounded-full bg-primary/10" /><div className="mt-7 flex gap-2"><span className="h-10 w-10 rounded-xl bg-secondary" /><span className="h-10 flex-1 rounded-xl bg-primary/15" /></div></div><div className="project-globe absolute bottom-0 left-0 flex h-36 w-48 rotate-[7deg] items-center justify-center rounded-2xl text-center text-primary-foreground transition-transform duration-500 group-hover:rotate-[3deg]"><Globe2 className="h-10 w-10 text-secondary" /></div></div></div></div></article>
          </section>

          <section id="credentials" className="scroll-mt-8 border-y border-border/60 py-24 lg:py-32" aria-labelledby="credentials-title"><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><SectionLabel number="05">Proof of practice</SectionLabel><h2 id="credentials-title" className="max-w-md font-display text-4xl font-bold leading-[.95] tracking-[-.06em] sm:text-6xl" data-testid="text-credentials-heading">Always learning.<br /><span className="text-accent">Already shipping.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground" data-testid="text-credentials-copy">Formal study builds the foundation. Real builds, broken builds, and fixing them again are where the craft gets sharper.</p><div className="neu-inset mt-10 rounded-2xl p-5" data-testid="card-credentials-education"><div className="flex items-start gap-4"><div className="icon-tile icon-tile-purple flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground"><Award className="h-5 w-5" /></div><div><p className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-muted-foreground">Education</p><p className="mt-1 text-sm font-bold" data-testid="text-credential-degree">BS Software Engineering</p><p className="mt-1 text-xs text-muted-foreground" data-testid="text-credential-university">COMSATS University Islamabad</p></div></div></div></div><div className="grid gap-4 sm:grid-cols-2" data-testid="list-certificates">{certificates.map((certificate, index) => <div key={certificate.title} className={`neu certificate-card rounded-[1.5rem] p-6 ${index % 2 === 1 ? 'sm:translate-y-8' : ''}`} data-testid={`card-certificate-${index + 1}`}><div className="flex items-start justify-between"><span className={`flex h-11 w-11 items-center justify-center rounded-xl font-mono-ui text-xs font-bold text-foreground ${certificate.tone}`} data-testid={`badge-certificate-${index + 1}`}>{certificate.mark}</span><span className="font-mono-ui text-[10px] text-muted-foreground">0{index + 1}</span></div><h3 className="mt-12 font-display text-lg font-bold leading-tight" data-testid={`text-certificate-title-${index + 1}`}>{certificate.title}</h3><p className="mt-2 text-xs text-muted-foreground" data-testid={`text-certificate-detail-${index + 1}`}>{certificate.detail}</p><Check className="certificate-check h-4 w-4 text-primary" /></div>)}</div></div></section>

          <section id="contact" className="scroll-mt-8 py-24 lg:py-32" aria-labelledby="contact-title"><div className="contact-panel relative overflow-hidden rounded-[2rem] p-8 text-foreground sm:p-14 lg:p-20"><div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[32px] border-secondary/60" /><div className="pointer-events-none absolute -bottom-28 right-48 h-52 w-52 rounded-full border-[20px] border-primary/20" /><div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end"><div><div className="mb-6 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[.18em] text-foreground/65"><span className="availability-dot h-2 w-2 rounded-full" /> Have a project in mind?</div><h2 id="contact-title" className="max-w-2xl font-display text-5xl font-bold leading-[.9] tracking-[-.07em] sm:text-7xl" data-testid="text-contact-heading">Let&apos;s make<br /><span className="text-secondary">something solid.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-foreground/70" data-testid="text-contact-copy">Tell me what you&apos;re building, where it&apos;s stuck, or where you want it to go. I&apos;ll bring the technical plan and a straight answer.</p><a href="mailto:abutalha.dev70@gmail.com?subject=Project%20enquiry%20for%20Abu%20Talha" className="button-lift mt-8 inline-flex items-center rounded-xl bg-background px-6 py-4 text-sm font-bold text-foreground" data-testid="link-contact-email">Start an email <Mail className="ml-3 h-4 w-4" /></a></div><div className="space-y-4 lg:pb-1"><a href="mailto:abutalha.dev70@gmail.com" className="contact-line flex items-center gap-4 border-b border-foreground/15 pb-4 text-sm font-semibold" data-testid="link-contact-email-detail"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10"><Mail className="h-4 w-4" /></span><span data-testid="text-contact-email">abutalha.dev70@gmail.com</span></a><a href="tel:+923147040080" className="contact-line flex items-center gap-4 border-b border-foreground/15 pb-4 text-sm font-semibold" data-testid="link-contact-phone-detail"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10"><Phone className="h-4 w-4" /></span><span data-testid="text-contact-phone">+92 3147040080</span></a><div className="flex items-center gap-4 text-sm font-semibold" data-testid="text-contact-location"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10"><MapPin className="h-4 w-4" /></span><span>Post Office Shabqadar Road Naguman Peshawar</span></div></div></div></div></section>
        </div>
        <div className="contact-folder-dock" aria-label="Project files"><ContactFolder /></div>
      </main>

      <footer className="border-t border-border/70 px-5 py-8 lg:pl-[calc(5rem+94px)] lg:pr-12" data-testid="footer-site"><div className="mx-auto flex max-w-[1386px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><BrandMark /><p className="mt-3 text-xs text-muted-foreground" data-testid="text-footer-copyright">© 2025 Abu Talha. Built with care in Peshawar.</p></div><div className="flex items-center gap-3"><a href="https://github.com/" target="_blank" rel="noreferrer" className="neu-sm flex h-10 w-10 items-center justify-center rounded-xl text-foreground" aria-label="Abu Talha on GitHub" data-testid="link-footer-github"><SiGithub className="h-4 w-4" /></a><a href="https://www.instagram.com/abu.talha40080/?hl=en" target="_blank" rel="noreferrer" className="neu-sm flex h-10 w-10 items-center justify-center rounded-xl text-foreground" aria-label="Abu Talha on Instagram" data-testid="link-footer-instagram"><Instagram className="h-4 w-4" /></a><a href="mailto:abutalha.dev70@gmail.com" className="ml-2 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-primary-foreground" data-testid="link-footer-email"><Mail className="h-3.5 w-3.5" /> Get in touch</a><a href="#top" className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground transition-transform hover:-translate-y-1" aria-label="Back to top" data-testid="link-back-to-top"><ArrowUp className="h-4 w-4" /></a></div></div></footer>
    </div>
  );
}

export default App;