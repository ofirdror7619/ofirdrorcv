'use client';

import { useState } from 'react';
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
} from 'lucide-react';

/* ===========================
   Reusable Components
=========================== */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-white mb-4 text-center">{title}</h2>
      <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 space-y-6">
        {children}
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="text-sm text-slate-400">{period}</span>
      </div>

      <div className="flex items-center gap-2 mt-2 mb-4 text-slate-300">
        <Briefcase className="text-blue-400" />
        <span className="font-medium">{company}</span>
      </div>

      <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillCategory({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) {
  return (
    <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-slate-900/50">
      <div className="flex items-center gap-3 mb-4 text-slate-300">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, idx) => (
          <span
            key={idx}
            className="bg-slate-800/40 border border-slate-700 rounded-full px-3 py-1 text-sm text-slate-200"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===========================
   Page
=========================== */

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'NICE',
      period: '2024 – Present',
      bullets: [
        'Architect and deliver AWS serverless microservices powering mission-critical enterprise workflows.',
        'Design complex Step Functions and Lambda orchestration handling distributed business processes.',
        'Optimize DynamoDB and Redis data layers for high availability and horizontal scalability.',
        'Drive production architecture decisions focused on resilience, performance, and maintainability.',
        'Leverage AI engineering tools (Copilot, Claude, Bedrock) to accelerate development and improve code quality.',
      ],
    },
    {
      title: 'Senior Software Developer',
      company: 'Locusview',
      period: '2022 – 2024',
      bullets: [
        'Led full-stack development of a distributed SaaS platform built on microservices architecture.',
        'Designed and implemented backend services in Java (Spring Boot) and Node.js.',
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
  ];

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code size={24} className="text-blue-400" />,
      skills: ['Java', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Frameworks',
      icon: <Wrench size={24} className="text-blue-400" />,
      skills: ['Angular', 'Next.js', 'Spring Boot', 'Express'],
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-blue-400" />,
      skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={24} className="text-blue-400" />,
      skills: ['AWS Lambda', 'Step Functions', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
    },
    {
      title: 'AI Tools',
      icon: <Brain size={24} className="text-blue-400" />,
      skills: ['Prompt Engineering', 'ChatGPT', 'GitHub Copilot', 'Claude', 'Amazon Bedrock'],
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-white">Ofir Dror</span>

          <div className="hidden md:flex gap-6 text-sm text-slate-400">
            {['about', 'experience', 'skills', 'education', 'military'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-blue-400 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2 text-slate-400">
            {['about', 'experience', 'skills', 'education', 'military'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block hover:text-blue-400"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        {/* About */}
        <Section id="about" title="Ofir Dror - Senior Software Engineer">
            <p className="text-slate-400 leading-relaxed text-justify">
        Senior Software Engineer specializing in distributed SaaS platforms, microservices and serverless architectures, 
        and enterprise backend systems. Skilled at tackling complex engineering problems, enhancing system performance,
         and architecting resilient production-grade solutions. Consistently delivers scalable, maintainable,
          and mission-critical software.
            </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 mt-6">
            <span className="flex items-center gap-2"><Mail size={14} /> ofirdror7619@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={14} /> 054-7550489</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Petah Tikva, Israel</span>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Professional Experience">
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section id="skills" title="Technical Skills">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <SkillCategory key={i} {...cat} />
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="flex items-center gap-4">
            <GraduationCap className="text-blue-400" size={24} />
            <div>
              <h3 className="font-semibold text-white">LL.B in Law</h3>
              <p className="text-sm text-slate-400">Sha'arei Mishpat College – GPA: 91.2</p>
            </div>
          </div>
        </Section>

        {/* Military */}
        <Section id="military" title="Military Service">
          <div className="flex items-center gap-4">
            <Shield className="text-blue-400" size={24} />
            <div>
              <h3 className="font-semibold text-white">System Administrator (VAX/VMS)</h3>
              <p className="text-sm text-slate-400">Tel Hashomer Base</p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}