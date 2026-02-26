'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Code,
  Database,
  Cloud,
  Wrench,
  Brain,
  GraduationCap,
  Shield,
  Briefcase,
  Calendar,
} from 'lucide-react';

/* ===========================
   Technical Skill Highlighting
=========================== */

const technicalSkills = [
  'AWS',
  'AWS Lambda',
  'Step Functions',
  'EventBridge',
  'SQS',
  'SNS',
  'DynamoDB',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'TypeScript',
  'Java',
  'Spring',
  'Spring Boot',
  'Node.js',
  'Angular',
  'Next.js',
  'Express',
  'CI/CD',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'ChatGPT',
  'GitHub Copilot',
  'Claude',
  'Amazon Bedrock',
];

const technicalSkillSet = new Set(technicalSkills.map((s) => s.toLowerCase()));

const technicalSkillRegex = new RegExp(
  `(${technicalSkills
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .sort((a, b) => b.length - a.length)
    .join('|')})`,
  'gi'
);

function highlightTechnicalSkills(text: string) {
  return text.split(technicalSkillRegex).map((part, i) => {
    if (technicalSkillSet.has(part.toLowerCase())) {
      return (
        <span key={i} className="text-blue-400 font-medium">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function AnimatedTitle({ text }: { text: string }) {
  return <span className="title-color-pulse">{text}</span>;
}

/* ===========================
   Data
=========================== */

const experiences = [
{
  title: 'Senior Software Developer',
  company: 'NICE',
  period: '2024 – Present',
  bullets: [
    'Architect and deliver AWS serverless application components using TypeScript and Node.js, powering mission-critical enterprise workflows at scale.',
    'Design and implement complex Step Functions and Lambda orchestration to manage distributed, stateful business processes across services.',
    'Optimize DynamoDB and Redis data layers for high availability, low latency, and horizontal scalability under production load.',
    'Lead production architecture decisions with strong emphasis on resilience, observability, performance, and long-term maintainability.',
    'Leverage modern AI engineering tools (GitHub Copilot, Claude, Amazon Bedrock) to accelerate development velocity and elevate code quality standards.',
    'Built and optimized event-driven workflows using EventBridge, SQS, and SNS, enabling asynchronous processing, improved system resilience, and horizontal scalability across services.',
  ],
},
  {
    title: 'Senior Software Developer',
    company: 'Locusview',
    period: '2022 – 2024',
    bullets: [
      'Led full-stack development of a distributed SaaS platform built on microservices architecture.',
      'Designed and implemented backend services in Java (Spring, Spring Boot) and Node.js.',
      'Delivered scalable Angular frontend modules integrated with enterprise APIs.',
      'Built CI/CD pipelines and containerized deployments using Docker and Kubernetes.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Algosec',
    period: '2020 – 2022',
    bullets: [
      'Developed cybersecurity and firewall automation systems in microservices environments.',
      'Improved service reliability and maintainability across distributed components.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'AT&T',
    period: '2017 – 2020',
    bullets: [
      'Built large-scale production systems serving U.S. enterprise customers.',
      'Designed distributed system components aligned with industry best practices.',
      'Collaborated with international engineering teams across multiple time zones.',
    ],
  },
  {
    title: 'QA Analyst',
    company: 'AT&T',
    period: '2015 – 2017',
    bullets: [
      'Testing Client/Server production systems.',
      'Writing STP/STD documentation.',
      'Designing comprehensive test plans.',
    ],
  },
  {
    title: 'QA Analyst',
    company: 'Retalix',
    period: '2012 – 2015',
    bullets: [
      'Testing POS (Point-of-Sale) systems for international clients.',
      'Writing test documents and acceptance criteria.',
    ],
  },
];

type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={20} className="text-blue-400 -translate-y-px" />,
    skills: ['Java', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Frameworks',
    icon: <Wrench size={20} className="text-blue-400 -translate-y-px" />,
    skills: ['Angular', 'Next.js', 'Spring', 'Spring Boot', 'Express'],
  },
  {
    title: 'Databases',
    icon: <Database size={20} className="text-blue-400 -translate-y-px" />,
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={20} className="text-blue-400 -translate-y-px" />,
    skills: ['AWS Lambda', 'Step Functions', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
  },
  {
    title: 'AI Tools',
    icon: <Brain size={20} className="text-blue-400 -translate-y-px" />,
    skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Amazon Bedrock'],
  },
];

/* ===========================
   Reusable Components
=========================== */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-10 scroll-mt-32">
      <h2 className="text-4xl font-bold text-white tracking-tight text-center">
        {title}
      </h2>
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-10 space-y-8">
        {children}
      </div>
    </section>
  );
}

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition">
      <div className="flex justify-between flex-wrap gap-2">
        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Calendar size={18} className="text-blue-400" />
          {exp.period}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 mb-5 text-slate-300">
        <Briefcase size={22} className="text-blue-400 align-middle" />
        <span className="font-medium">{exp.company}</span>
      </div>

      <ul className="space-y-3 list-disc list-inside text-sm text-slate-300 leading-relaxed">
        {exp.bullets.map((b: string, i: number) => (
          <li key={i}>{highlightTechnicalSkills(b)}</li>
        ))}
      </ul>
    </div>
  );
}

function getSkillLogoMeta(skill: string): { src: string; className?: string } | null {
  const logos: Record<string, { src: string; className?: string }> = {
    Java: { src: '/icons/java.svg', className: 'scale-[0.9]' },
    TypeScript: { src: '/icons/typescript.svg' },
    'Node.js': { src: '/icons/nodejs.svg', className: 'scale-[0.95]' },
    Angular: { src: '/icons/angular.svg', className: 'scale-[0.9]' },
    'Next.js': { src: '/icons/nextjs.svg' },
    Spring: { src: '/icons/spring.svg' },
    'Spring Boot': { src: '/icons/springboot.svg' },
    Express: { src: '/icons/express.svg' },
    PostgreSQL: { src: '/icons/postgresql.svg', className: 'scale-[0.92]' },
    MongoDB: { src: '/icons/mongodb.svg' },
    DynamoDB: { src: '/icons/aws.svg', className: 'scale-[0.86]' },
    Redis: { src: '/icons/redis.svg' },
    'AWS Lambda': { src: '/icons/aws.svg', className: 'scale-[0.86]' },
    'Step Functions': { src: '/icons/aws.svg', className: 'scale-[0.86]' },
    Docker: { src: '/icons/docker.svg' },
    Kubernetes: { src: '/icons/kubernetes.svg' },
    Jenkins: { src: '/icons/jenkins.svg', className: 'scale-[0.9]' },
    ChatGPT: { src: '/icons/openai.svg', className: 'scale-[0.9] rounded-[6px]' },
    'GitHub Copilot': { src: '/icons/githubcopilot.svg', className: 'scale-[0.9]' },
    Claude: { src: '/icons/anthropic.svg', className: 'scale-[0.94]' },
    'Amazon Bedrock': { src: '/icons/aws.svg', className: 'scale-[0.86]' },
  };

  return logos[skill] ?? null;
}

/* ===========================
   Page
=========================== */

export default function Page() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'military'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen scroll-smooth [&_h1]:text-slate-100 [&_h2]:text-slate-100 [&_h3]:text-slate-100 [&_h4]:text-slate-100 [&_h5]:text-slate-100 [&_h6]:text-slate-100">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-900">
        <div className="max-w-[820px] mx-auto px-6 py-5 flex justify-between items-center">
          <span className="font-semibold text-white">Ofir Dror</span>

          <div className="hidden md:flex gap-8 text-sm">
            {['about', 'experience', 'skills', 'education', 'military'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition hover:text-white ${
                  activeSection === id
                    ? 'text-blue-400 font-medium'
                    : 'text-slate-400'
                }`}
              >
                {id === 'skills'
                  ? 'Technical Skills'
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-[820px] mx-auto px-6 py-32 space-y-28">
        <Section
          id="about"
          title={<AnimatedTitle text="Ofir Dror - Senior Software Engineer" />}
        >
          <p className="text-lg text-slate-300 leading-relaxed text-center">
            Senior Software Engineer specializing in large-scale distributed SaaS
            systems, microservices and serverless cloud architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-6 text-slate-400">
            <span className="flex items-center gap-2 hover:text-white transition">
              <Mail size={20} className="text-blue-400" />
              ofirdror7619@gmail.com
            </span>
            <span className="flex items-center gap-2 hover:text-white transition">
              <Phone size={20} className="text-blue-400" />
              054-7550489
            </span>
            <span className="flex items-center gap-2 hover:text-white transition">
              <MapPin size={20} className="text-blue-400" />
              Petah Tikva, Israel
            </span>
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-slate-950/60 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition"
              >
                <div className="flex items-center gap-3 mb-5 leading-none">
                  <span className="flex items-center justify-center h-5 w-5 shrink-0">
                    {cat.icon}
                  </span>
                  <div className="text-lg font-semibold text-white leading-none">
                    {cat.title}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s, idx) => {
                    const logo = getSkillLogoMeta(s);

                    return (
                      <span
                        key={idx}
                        className="bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-sm hover:border-blue-400 transition inline-flex items-center gap-2"
                      >
                        {logo && (
                          <span className="w-[20px] h-[20px] shrink-0 inline-flex items-center justify-center">
                            <Image
                              src={logo.src}
                              alt={`${s} logo`}
                              width={20}
                              height={20}
                              className={`w-[20px] h-[20px] skill-icon-align ${logo.className ?? ''}`}
                            />
                          </span>
                        )}
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="flex items-center gap-4">
            <GraduationCap className="text-blue-400" size={22} />
            <div>
              <h3 className="font-semibold text-white">LL.B in Law</h3>
              <p className="text-sm text-slate-400 mb-0">
                Sha&apos;arei Mishpat College · GPA 91
                <br />
                <span className="text-blue-400">Licensed Lawyer</span>
              </p>
            </div>
          </div>
        </Section>

        <Section id="military" title="Military Service">
          <div className="flex items-center gap-4">
            <Shield className="text-blue-400" size={22} />
            <div>
              <h3 className="font-semibold text-white">
                System Administrator (VAX/VMS)
              </h3>
              <p className="text-sm text-slate-300">Tel Hashomer Base</p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}