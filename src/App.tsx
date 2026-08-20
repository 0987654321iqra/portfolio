import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  Brain,
  Briefcase,
  ChevronDown,
  Code2,
  Database,
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
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

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

const projects = [
  {
    title: 'PulmoOncoSight',
    subtitle: 'AI-Powered Lung Cancer Detection · FYP',
    description:
      'Full-stack AI application using a hybrid Vision Transformer and Attention U-Net on a localized DUHS dataset, achieving 94% diagnostic classification accuracy.',
    image: '/images/lung-cancer.jpg',
    tags: ['Vision Transformer', 'Attention U-Net', 'Full-Stack', 'Medical AI'],
    metric: '94% Accuracy',
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
            Hire Me
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
              AI Undergraduate · ML & Web Developer
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-200">
              <Award size={16} />
              Canadian Citizen
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
            I build machine learning models, analyze data, and craft intelligent web applications
            that turn real-world challenges into measurable results.
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
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-white">94%</span>
              <span>FYP Model Accuracy</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
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
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              About Me
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="section-title text-3xl text-white sm:text-4xl">
              Building intelligent solutions with purpose
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-5 text-base leading-relaxed text-slate-300">
              Artificial Intelligence graduate with hands-on experience in machine learning, computer
              vision, and full-stack development. I've delivered production-grade models and tools with
              measurable impact, including a diagnostic AI system reaching 94% accuracy and web
              applications that cut page load times by 30%.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-4 text-base leading-relaxed text-slate-300">
              Whether it’s improving prediction accuracy, deploying AI systems for professional teams,
              or crafting responsive web experiences, I love turning complex problems into clear,
              usable outcomes.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} custom={2} className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Focus Areas', value: 'AI · ML · Web Apps' },
              { label: 'Strength', value: 'Measurable Results' },
              { label: 'Work Authorization', value: 'Canadian Citizen' },
              { label: 'Open To', value: 'Internships & Roles' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 card-hover"
              >
                <p className="text-xs uppercase tracking-wider text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
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

function Projects() {
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
                className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0d1424] card-hover ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`grid ${i === 0 ? 'md:grid-cols-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover ${i === 0 ? 'h-64 md:h-full' : 'h-52'}`}
                      loading="lazy"
                    />
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
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
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
                Open to internships, collaborations, and opportunities in AI, machine learning, and
                web development.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} custom={3} className="space-y-4">
              <a
                href="mailto:pc6041.iqraahmed@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
                  <p className="text-white">pc6041.iqraahmed@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+16399997639"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Phone</p>
                  <p className="text-white">+1 (639) 999-7639</p>
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
          <GraduationCap size={16} />
          <span>AI Undergraduate Portfolio</span>
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
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
