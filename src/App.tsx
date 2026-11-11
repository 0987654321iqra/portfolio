import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import {
  Brain,
  Briefcase,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
  Award,
  BarChart3,
  Cpu,
  Layers,
  Workflow,
} from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const education = {
  school: 'Dawood University of Engineering & Technology',
  degree: 'Bachelor of Science in Artificial Intelligence',
  location: 'Karachi, Pakistan',
  period: 'Oct 2022 – Aug 2026',
}

const experiences = [
  {
    role: 'AI Intern',
    company: 'Onestop Vendors',
    location: 'Karachi',
    period: 'Oct 2024 – Jan 2025',
    points: [
      'Developed and validated machine learning models for healthcare prediction tasks, improving classification accuracy by 20% through feature engineering and hyperparameter tuning.',
      'Deployed AI-driven solutions into active use by a cross-functional team, and collaborated with senior colleagues to clean and preprocess real-world healthcare datasets.',
    ],
    icon: Brain,
  },
  {
    role: 'Web Developer Intern',
    company: 'Cod-Soft',
    location: 'Karachi',
    period: 'Oct 2023 – Nov 2023',
    points: [
      'Designed and built 5+ responsive web pages using Flask and Streamlit, reducing average page load time by 30%.',
      'Implemented backend logic and front-end components, testing and refining features with design and QA counterparts to improve user experience.',
    ],
    icon: Code2,
  },
]

type Project = {
  title: string
  subtitle: string
  description: string
  image: string | null
  tags: string[]
  metric: string
  repo?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'PulmoOncoSight',
    subtitle: 'AI-Powered Lung Cancer Detection · FYP',
    description:
      'Full-stack AI application using a hybrid Vision Transformer and Attention U-Net on a localized DUHS dataset, achieving 94% diagnostic classification accuracy.',
    image: '/images/lung-cancer.jpg',
    tags: ['Vision Transformer', 'Attention U-Net', 'Full-Stack', 'Medical AI'],
    metric: '94% Accuracy',
    repo: 'https://github.com/0987654321iqra/pulmo_1',
    demo: 'https://pulmo-onco-scan.vercel.app/upload',
  },
  {
    title: 'Fruit Quality Classifier',
    subtitle: 'AI-Powered Food Classification',
    description:
      'Built a real-time fruit quality detection app using a fine-tuned EfficientNet CNN to classify produce as fresh or rotten from live camera capture or uploaded images, with an interactive training-performance dashboard covering accuracy/loss curves, confusion matrix, and classification report.',
    image: '/images/fruit-quality.svg',
    tags: ['EfficientNet', 'TensorFlow/Keras', 'Streamlit', 'Computer Vision'],
    metric: 'Real-Time Detection',
    repo: 'https://github.com/0987654321iqra/ML_PROJECT',
    demo: 'https://mlproject-8fqjbfx3c2bvxquka6zkb9.streamlit.app/',
  },
  {
    title: 'Canada Wait Times Dashboard',
    subtitle: 'Healthcare Analytics Dashboard',
    description:
      'Interactive Streamlit dashboard modeling how Canadian health authorities track wait-time performance across provinces. Filters a 560-row Pandas dataset by province, procedure, and year, then surfaces live KPIs, a benchmark-compliance trend line, and province/procedure comparison charts built with Plotly.',
    image: '/images/wait-times-dashboard.svg',
    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    metric: '10 Provinces · 7 Years',
    repo: 'https://github.com/0987654321iqra/wait-times-dashboard',
    demo: 'https://wait-times-dashboard-fvhapbfs2d6s2sgudtardh.streamlit.app/',
  },
  {
    title: 'Brain Cancer Detector',
    subtitle: 'SMART TECH EXHIBITION – IEEEP STEP’24',
    description:
      'Designed and presented a brain cancer detection system evaluated on 500 MRI scans with 85% accuracy. Showcased to 200+ visitors and earned commendations from 3+ judges.',
    image: '/images/brain-cancer.jpg',
    tags: ['MRI Analysis', 'Deep Learning', 'Exhibition'],
    metric: '85% Accuracy',
  },
  {
    title: 'Emotion Detector',
    subtitle: 'Machine Learning',
    description:
      'Built a real-time emotion recognition model classifying 7 emotions with 90% accuracy for interactive ML-powered experiences.',
    image: '/images/emotion-detector.jpg',
    tags: ['Computer Vision', 'Real-time ML', 'Classification'],
    metric: '90% Accuracy',
  },
  {
    title: 'Recipe Maker Application',
    subtitle: 'Desktop Application',
    description:
      'Engineered a recipe suggestion application using Tkinter and Python, supporting 100+ recipes and attracting 50 weekly active users.',
    image: '/images/recipe-app.jpg',
    tags: ['Python', 'Tkinter', 'UX'],
    metric: '100+ Recipes',
  },
  {
    title: 'Farmers Management System',
    subtitle: 'Database Application',
    description:
      'Designed a MySQL-backed management system adopted by 10+ farmers, improving resource organization and productivity by 25%.',
    image: '/images/farmers-system.jpg',
    tags: ['MySQL', 'Python', 'Management Systems'],
    metric: '+25% Productivity',
  },
]

const skillGroups = [
  {
    title: 'Programming & Frameworks',
    icon: Code2,
    items: ['Python', 'SQL', 'HTML', 'Flask', 'Streamlit'],
  },
  {
    title: 'Machine Learning & AI',
    icon: Cpu,
    items: ['CNN', 'Vision Transformers', 'Attention U-Net', 'LLMs', 'Scikit-learn', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Data Analysis & Visualization',
    icon: BarChart3,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'EDA'],
  },
  {
    title: 'Developer Tools',
    icon: Workflow,
    items: ['GitHub', 'MySQL', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Twilio'],
  },
]

const certifications = [
  {
    title: 'Data Analytics Professional Certificate',
    issuer: 'Google',
    icon: BarChart3,
  },
  {
    title: 'Gen-AI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    icon: Sparkles,
  },
  {
    title: 'Data Analytics Job Simulation (Forensic Technology)',
    issuer: 'Deloitte via Forage',
    icon: Layers,
  },
  {
    title: 'AI Essentials and Prompt Essentials',
    issuer: 'Google',
    icon: Cpu,
  },
  {
    title: 'Excel Accounting Problem Certification',
    issuer: 'Udemy',
    icon: Database,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="section-title text-lg tracking-tight text-white">
          Iqra<span className="text-violet-400">.</span>Ahmed
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
          >
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0d1424]/90 px-5 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/70 via-[#070b14]/85 to-[#070b14]" />
      <div className="glow-orb left-[-10%] top-20 h-72 w-72 bg-violet-600/30" />
      <div className="glow-orb right-[-5%] top-40 h-80 w-80 bg-cyan-500/20" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-5 pb-16">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0} className="mb-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200">
              <Sparkles size={16} />
              AI & ML Engineer · LLMs · Data Analytics
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="section-title text-5xl leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I’m <span className="gradient-text">Iqra Ahmed</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            I build machine learning models and LLM applications, and turn complex data into clear,
            measurable results — from medical imaging AI to healthcare analytics dashboards.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/20 transition hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              Get In Touch
            </a>
            <a
              href="/Iqra-Ahmed-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-white">5+</span>
              <span>Impactful Projects</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-white">6</span>
              <span>Certifications</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-400 md:block"
        >
          <ChevronDown className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About Me
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
            Building intelligent solutions with purpose
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-5 text-base leading-relaxed text-slate-300">
            I'm an AI graduate who likes building things that actually work outside a notebook. My
            thesis project combined a Vision Transformer and an Attention U-Net to catch lung cancer
            in real clinical scans, holding up at 94% accuracy on data it had never seen before.
            That's the standard I hold every project to: does it solve the actual problem.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="mt-4 text-base leading-relaxed text-slate-300">
            I'm a Canadian citizen currently based in Pakistan and relocating to Canada, and I'm
            looking to join a team solving real problems with AI, not just chasing benchmark
            numbers.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Education
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
            Academic Background
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 card-hover sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                <p className="mt-1 text-cyan-300">{education.school}</p>
                <p className="mt-1 text-sm text-slate-400">{education.location}</p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
              <Briefcase size={14} />
              {education.period}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
            Professional Journey
          </motion.h2>

          <div className="mt-10 space-y-6">
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <motion.article
                  key={exp.role + exp.company}
                  variants={fadeUp}
                  custom={i + 2}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 card-hover"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="mt-1 text-cyan-300">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                      <Briefcase size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2 pl-1">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repo && !project.demo) return null
  return (
    <div className="mt-5 flex flex-wrap gap-5" onClick={(e) => e.stopPropagation()}>
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          <Github size={16} />
          View Code
          <ExternalLink size={14} />
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
        >
          <Sparkles size={16} />
          Live Demo
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1424] shadow-2xl shadow-black/50"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
        >
          <X size={18} />
        </button>

        <div className="relative overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-violet-500/20 via-[#0d1424] to-cyan-500/20">
              <Cpu size={56} className="text-cyan-300/60" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
          <span className="absolute bottom-4 left-6 rounded-full bg-cyan-400/90 px-3 py-1 text-xs font-semibold text-slate-950">
            {project.metric}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm text-violet-300">{project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Projects
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
            Selected Work
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl text-slate-300">
            From medical AI diagnostics to practical management tools—projects designed for real impact.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                custom={i + 2}
                onClick={() => setSelected(project)}
                className={`cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0d1424] card-hover ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`grid ${i === 0 ? 'md:grid-cols-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover ${i === 0 ? 'h-64 md:h-full' : 'h-52'}`}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`flex w-full items-center justify-center bg-gradient-to-br from-violet-500/20 via-[#0d1424] to-cyan-500/20 ${
                          i === 0 ? 'h-64 md:h-full' : 'h-52'
                        }`}
                      >
                        <Cpu size={48} className="text-cyan-300/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-cyan-400/90 px-3 py-1 text-xs font-semibold text-slate-950">
                      {project.metric}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-violet-300">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Skills
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
            Technical Toolkit
          </motion.h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const Icon = group.icon
              return (
                <motion.div
                  key={group.title}
                  variants={fadeUp}
                  custom={i + 2}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 card-hover"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="skill-chip rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Certifications
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
            Learning & Credentials
          </motion.h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.title}
                  variants={fadeUp}
                  custom={i + 2}
                  className="rounded-2xl border border-white/10 bg-[#0d1424]/80 p-5 card-hover"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <Award size={14} className="text-cyan-300" />
                    {cert.issuer}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-[#0d1424] to-cyan-500/10 p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
                Let’s build something intelligent together
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-4 text-slate-300">
                If you're building something real in AI, ML, or data, and want someone who cares
                about results over buzzwords, let's talk.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} custom={3} className="space-y-4">
              <a
                href="mailto:iqraahmed.sk@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
                  <p className="text-white">iqraahmed.sk@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+16395541272"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Phone</p>
                  <p className="text-white">+1 639 554 1272</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/iqra-ahmed-434147295"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/15 text-blue-300">
                  <Linkedin size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400">LinkedIn</p>
                  <p className="text-white">linkedin.com/in/iqra-ahmed-434147295</p>
                </div>
                <ExternalLink size={16} className="text-slate-400" />
              </a>

              <a
                href="https://github.com/0987654321iqra"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-400/15 text-slate-200">
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400">GitHub</p>
                  <p className="text-white">github.com/0987654321iqra</p>
                </div>
                <ExternalLink size={16} className="text-slate-400" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Iqra Ahmed. All rights reserved.</p>
        <div className="flex items-center gap-2 text-slate-500">
          <Brain size={16} />
          <span>AI & Data Portfolio</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Analytics />
      <Footer />
    </div>
  )
}
