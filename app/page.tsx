'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Menu,
  X,
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
  'Kafka',
  'MSSQL',
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
        <span key={i} className="text-purple-600 font-medium">
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
    skills: [
      'Amazon Bedrock',
      'AWS',
      'AWS Lambda',
      'Claude',
      'DynamoDB',
      'EventBridge',
      'GitHub Copilot',
      'Linux',
      'Node.js',
      'Redis',
      'SQS',
      'SNS',
      'Step Functions',
      'TypeScript',
      'Windows',
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
    skills: ['Angular', 'CI/CD', 'Docker', 'Java', 'Kafka', 'Kubernetes', 'Linux', 'Node.js', 'PostgreSQL', 'Spring', 'Spring Boot', 'Windows'],
  },
  {
    title: 'Software Developer',
    company: 'Algosec',
    period: '2020 – 2022',
    bullets: [
      'Developed cybersecurity and firewall automation systems in microservices environments.',
      'Improved service reliability and maintainability across distributed components.',
    ],
    skills: ['Cybersecurity', 'Java', 'Linux', 'Microservices', 'MongoDB', 'Windows'],
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
    skills: ['Angular', 'Client/Server', 'Distributed Systems', 'Java', 'MSSQL', 'MongoDB', 'PostgreSQL', 'Windows'],
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
    skills: ['Documentation', 'Testing'],
  },
  {
    title: 'QA Analyst',
    company: 'Retalix',
    period: '2012 – 2015',
    bullets: [
      'Testing POS (Point-of-Sale) systems for international clients.',
      'Writing test documents and acceptance criteria.',
    ],
    skills: ['POS', 'Testing'],
  },
];

type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  // list of technologies/tools used in this role (rendered under the bullets)
  skills?: string[];
};

// NOTE: the standalone "Technical Skills" matrix has been removed in favor of
// listing skills directly within each experience entry.  Keep the helper
// `getSkillLogoMeta` around in case we want to render logos later.


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
      <h2 className="text-4xl font-bold text-black tracking-tight text-center">
        {title}
      </h2>
      <div className="bg-gray-50 border border-gray-300 rounded-2xl p-10 space-y-8">
        {children}
      </div>
    </section>
  );
}

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-xl p-8 hover:border-gray-400 transition">
      <div className="flex justify-between flex-wrap gap-2">
        <h3 className="text-xl font-semibold text-black">{exp.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={18} className="text-purple-600" />
          {exp.period}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 mb-5 text-gray-400">
        <Briefcase size={22} className="text-purple-600 align-middle" />
        <span className="font-medium text-purple-600">{exp.company}</span>
      </div>

      <ul className="space-y-3 list-disc list-inside text-sm text-gray-400 leading-relaxed">
        {exp.bullets.map((b: string, i: number) => (
          <li key={i}>{highlightTechnicalSkills(b)}</li>
        ))}
      </ul>

      {/* per‑role technology list */}
      {exp.skills && exp.skills.length > 0 && (
        <div className="mt-4">
          <span className="font-medium text-black">Technologies & Skills:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {exp.skills.map((s, idx) => {
              const logo = getSkillLogoMeta(s);
              return (
                <span
                  key={idx}
                  className="bg-gray-100 border border-gray-300 rounded-full px-3 py-1 text-sm inline-flex items-center gap-1 hover:border-purple-600 hover:bg-purple-100/10 transition"
                >
                  {logo && (
                    <span className="w-[16px] h-[16px] inline-flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={`${s} icon`}
                        width={16}
                        height={16}
                        className={`${logo.className ?? ''}`}
                      />
                    </span>
                  )}
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function getSkillLogoMeta(skill: string): { src: string; className?: string } | null {
  const logos: Record<string, { src: string; className?: string }> = {
    Java: { src: '/icons/java.svg', className: 'scale-[0.9]' },
    TypeScript: { src: '/icons/typescript.svg' },
    AWS: { src: '/icons/aws.svg', className: 'scale-[0.86] filter brightness-150' },
    'Node.js': { src: '/icons/nodejs.svg', className: 'scale-[0.95]' },
    Angular: { src: '/icons/angular.svg', className: 'scale-[0.9]' },
    'Next.js': { src: '/icons/nextjs.svg' },
    Spring: { src: '/icons/spring.svg' },
    'Spring Boot': { src: '/icons/springboot.svg' },
    Express: { src: '/icons/express.svg' },
    PostgreSQL: { src: '/icons/postgresql.svg', className: 'scale-[0.92]' },
    MongoDB: { src: '/icons/mongodb.svg' },
    DynamoDB: { src: '/icons/aws.svg', className: 'scale-[0.86] filter brightness-150' },
    Redis: { src: '/icons/redis.svg' },
    'AWS Lambda': { src: '/icons/aws.svg', className: 'scale-[0.86] filter brightness-150' },
    'Step Functions': { src: '/icons/aws.svg', className: 'scale-[0.86] filter brightness-150' },
    Docker: { src: '/icons/docker.svg' },
    Kubernetes: { src: '/icons/kubernetes.svg' },
    Jenkins: { src: '/icons/jenkins.svg', className: 'scale-[0.9]' },
    ChatGPT: { src: '/icons/openai.svg', className: 'scale-[0.9] rounded-[6px]' },
    'GitHub Copilot': { src: '/icons/githubcopilot.svg', className: 'scale-[0.9]' },
    Claude: { src: '/icons/anthropic.svg', className: 'scale-[0.94]' },
    'Amazon Bedrock': { src: '/icons/aws.svg', className: 'scale-[0.86]' },
    Kafka: { src: '/icons/kafka.svg', className: 'scale-[0.9] filter brightness-200 contrast-150' },
    MSSQL: { src: '/icons/mssql.svg', className: 'scale-[0.9] filter brightness-150' },
    Windows: { src: '/icons/windows.svg', className: 'filter brightness-150' },
    Linux: { src: '/icons/linux.svg', className: 'filter brightness-150' },
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
    <main className="bg-white text-black min-h-screen scroll-smooth [&_h1]:text-black [&_h2]:text-black [&_h3]:text-black [&_h4]:text-black [&_h5]:text-black [&_h6]:text-black">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-300">
        <div className="max-w-[820px] mx-auto px-6 py-5 flex justify-between items-center">
          <span className="font-semibold text-black">Ofir Dror</span>

          <div className="hidden md:flex gap-8 text-sm">
            {['about', 'experience', 'skills', 'education', 'military'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition hover:text-purple-600 ${
                  activeSection === id
                    ? 'text-purple-600 font-medium'
                    : 'text-gray-500'
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
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            Senior Software Engineer specializing in large-scale distributed SaaS
            systems, microservices and serverless cloud architectures.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-6 text-gray-500">
            <span className="flex items-center gap-2 hover:text-purple-600 transition">
              <Mail size={20} className="text-purple-600" />
              ofirdror7619@gmail.com
            </span>
            <span className="flex items-center gap-2 hover:text-purple-600 transition">
              <Phone size={20} className="text-purple-600" />
              054-7550489
            </span>
            <span className="flex items-center gap-2 hover:text-purple-600 transition">
              <MapPin size={20} className="text-purple-600" />
              Petah Tikva, Israel
            </span>
            <a
              href="https://www.linkedin.com/in/ofir-d-a2a414204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 transition"
            >
              <Linkedin size={20} className="text-purple-600" />
              linkedin.com/in/ofir-d-a2a414204
            </a>
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </div>
        </Section>


        <Section id="education" title="Education">
          <div className="flex items-center gap-4">
            <GraduationCap className="text-purple-600" size={22} />
            <div>
              <h3 className="font-semibold text-white">LL.B in Law</h3>
              <p className="text-sm text-gray-500 mb-0">
                Sha&apos;arei Mishpat College · GPA 91
                <br />
                <span className="text-purple-600">Licensed Lawyer</span>
              </p>
            </div>
          </div>
        </Section>

        <Section id="military" title="Military Service">
          <div className="flex items-center gap-4">
            <Shield className="text-purple-600" size={22} />
            <div>
              <h3 className="font-semibold text-white">
                System Administrator (VAX/VMS)
              </h3>
              <p className="text-sm text-gray-400">Tel Hashomer Base</p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}