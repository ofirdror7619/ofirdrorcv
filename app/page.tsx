'use client';

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
      <h2 className="text-3xl font-bold tracking-tight text-white text-center">
        {title}
      </h2>
      <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 shadow-xl">
        {children}
      </div>
    </section>
  );
}

const technologies = [
  'AWS',
  'Lambda',
  'Step Functions',
  'DynamoDB',
  'Redis',
  'Java',
  'Spring Boot',
  'Node.js',
  'Angular',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Jenkins',
  'Copilot',
  'Claude',
  'Bedrock',
  'SaaS',
  'APIs',
  'microservices',
];

function highlightTechnologies(text: string) {
  const parts = text.split(new RegExp(`(${technologies.join('|')})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        technologies.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="text-blue-400 font-medium">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
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
    <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-slate-400">
          <Calendar size={16} className="text-blue-400" />
          {period}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 mb-4 text-slate-300">
        <Briefcase size={16} className="text-blue-400" />
        <span className="font-medium">{company}</span>
      </div>

      <ul className="space-y-2 list-disc list-inside text-slate-300 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{highlightTechnologies(b)}</li>
        ))}
      </ul>
    </div>
  );
}

/* ===========================
   Page
=========================== */

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'military'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'NICE',
      period: '2024 – Present',
      bullets: [
        'Architected and delivered AWS-based serverless microservices powering mission-critical enterprise workflows.',
        'Designed complex Step Functions and Lambda orchestration for distributed, high-availability business processes.',
        'Optimized DynamoDB and Redis layers to improve performance, scalability, and resilience.',
        'Led production architecture decisions emphasizing reliability, observability, and maintainability.',
        'Leveraged AI tools including Copilot, Claude, and Bedrock to accelerate engineering velocity.',
      ],
    },
    {
      title: 'Senior Software Developer',
      company: 'Locusview',
      period: '2022 – 2024',
      bullets: [
        'Led backend development of a distributed SaaS platform built on microservices architecture.',
        'Designed scalable backend services using Java (Spring Boot) and Node.js.',
        'Delivered production-grade Angular modules integrated with enterprise APIs.',
        'Implemented CI/CD pipelines and containerized deployments using Docker and Kubernetes.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Algosec',
      period: '2020 – 2022',
      bullets: [
        'Developed cybersecurity automation systems within distributed microservices environments.',
        'Improved reliability and maintainability of critical enterprise components.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'AT&T',
      period: '2017 – 2020',
      bullets: [
        'Built large-scale production systems serving U.S. enterprise customers.',
        'Designed distributed system components aligned with high-availability best practices.',
      ],
    },
  ];

  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#about" className="font-semibold text-white">
            Ofir Dror
          </a>

          <div className="hidden md:flex gap-6 text-sm">
            {['about', 'experience', 'skills', 'education', 'military'].map(
              (id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={
                    activeSection === id
                      ? 'text-blue-400 font-medium'
                      : 'text-slate-400'
                  }
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              )
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        {/* About */}
        <Section id="about" title="Senior Software Engineer">
          <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
            Senior Software Engineer specializing in large-scale distributed SaaS systems,
            microservices, and serverless cloud architectures. Expert in designing resilient,
            production-grade backend platforms and delivering scalable, business-critical
            solutions end-to-end. Background in QA and systems administration, bringing strong
            quality engineering and operational thinking into architecture decisions.
          </p>

          {/* Core Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              'AWS',
              'Node.js',
              'Java',
              'Spring Boot',
              'Microservices',
              'Serverless',
              'Docker',
              'Kubernetes',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm mt-8 text-slate-300">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              ofirdror7619@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              054-7550489
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              Petah Tikva, Israel
            </span>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Professional Experience">
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </div>

          <div className="mt-8 text-sm text-slate-400">
            <strong className="text-slate-300">Early Career:</strong> QA Analyst –
            AT&T, Retalix (2012–2017)
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="flex items-center gap-4">
            <GraduationCap size={20} className="text-blue-400" />
            <div>
              <h3 className="font-semibold text-white">LL.B in Law</h3>
              <p className="text-sm text-slate-400">
                Sha'arei Mishpat College · GPA 91
              </p>
              <p className="text-sm text-blue-400">Licensed Lawyer</p>
            </div>
          </div>
        </Section>

        {/* Military */}
        <Section id="military" title="Military Service">
          <div className="flex items-center gap-4">
            <Shield size={20} className="text-blue-400" />
            <div>
              <h3 className="font-semibold text-white">
                System Administrator (VAX/VMS)
              </h3>
              <p className="text-sm text-slate-300">
                Tel Hashomer Base · Managed mission-critical systems and ensured
                high availability of operational infrastructure.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}