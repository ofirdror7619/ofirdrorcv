'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Cpu,
  Server,
  Cloud,
  Terminal,
  Activity,
  Book,
  Shield,
  Zap,
} from 'lucide-react';

export default function Page() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  };

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === '~') setTerminalOpen(prev => !prev);
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <>
      <div
        className="spotlight"
        style={{ left: mouse.x - 250, top: mouse.y - 250 }}
      />

      <pre className="code-backdrop" aria-hidden="true">
{`const profile = {
  name: 'Ofir Dror',
  role: 'Senior Software Engineer',
  stack: ['TypeScript', 'Node.js', 'AWS', 'Java'],
  focus: ['Distributed Systems', 'Serverless', 'Reliability'],
};
function buildAtScale(input) {
  return orchestrate(input)
    .map(validate)
    .reduce(optimize)
    .deploy('production');
}
on('event', async payload => {
  await process(payload);
  await observe('latency', payload.id);
  await publish('metrics.ready', payload.id);
});
class EngineeringMindset {
  constructor() {
    this.principles = ['clarity', 'resilience', 'ownership'];
  }
}
const services = {
  api: { runtime: 'nodejs20.x', memory: 1024 },
  worker: { runtime: 'nodejs20.x', memory: 2048 },
  scheduler: { cron: 'rate(5 minutes)' },
};
const pipelines = ['build', 'test', 'scan', 'deploy'];
async function bootstrap() {
  const env = await loadEnv();
  const client = createClient(env.region);
  await client.connect();
  return client;
}
async function executePipeline(name) {
  for (const stage of pipelines) {
    await runStage(name, stage);
  }
}
function latencyP95(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length * 0.95)] ?? 0;
}
const architecture = {
  events: ['EventBridge', 'SQS', 'SNS'],
  storage: ['DynamoDB', 'Redis', 'S3'],
  observability: ['CloudWatch', 'X-Ray', 'Tracing'],
};
export { profile, services, architecture, executePipeline };`}
      </pre>

      <nav className="navbar">
        <button type="button" className="nav-link" onClick={() => scrollToSection('about')}>About</button>
        <button type="button" className="nav-link" onClick={() => scrollToSection('experience')}>Experience</button>
        <button type="button" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
        <button type="button" className="nav-link" onClick={() => scrollToSection('education')}>Education</button>
        <button type="button" className="nav-link" onClick={() => scrollToSection('military')}>Military</button>
      </nav>

      <main className="page">

        <div className="status-bar">
          <div>
            <Activity size={14} /> Status: <span>Ready for challenges</span>
          </div>
        </div>

        {/* HERO */}
        <section id="about" className="hero">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="name"
          >
            <span className="name-main">Ofir Dror</span>
            <span className="name-role">Senior Software Engineer</span>
          </motion.h1>

          <p className="headline">
            Senior Software Engineer specializing in large-scale distributed SaaS systems,
            microservices and serverless cloud architectures.
          </p>

          <div className="contact">
            <span><Mail size={14} /> ofirdror7619@gmail.com</span>
            <span><Phone size={14} /> 054-7550489</span>
            <span><MapPin size={14} /> Petah Tikva, Israel</span>
            <a href="https://linkedin.com/in/ofir-d-a2a414204" target="_blank" rel="noreferrer">
              <Linkedin size={14} /> linkedin.com/in/ofir-d-a2a414204
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <h2 className="section-title"><Terminal size={16} /> Professional Experience</h2>

          {/* NICE */}
          <div className="timeline">
            <h3>Senior Software Engineer</h3>
            <span className="date">2024 — Present</span>
            <p className="company">NICE</p>
            <ul>
              <li>Architect and deliver <span className="skill-highlight">AWS</span> serverless application components using <span className="skill-highlight">TypeScript</span> and <span className="skill-highlight">Node.js</span>, powering mission-critical enterprise workflows at scale.</li>
              <li>Design and implement complex <span className="skill-highlight">Step Functions</span> and <span className="skill-highlight">Lambda</span> orchestration.</li>
              <li>Optimize <span className="skill-highlight">DynamoDB</span> and <span className="skill-highlight">Redis</span> for high availability and low latency under load.</li>
              <li>Lead architecture decisions with emphasis on resilience, observability, and long-term maintainability.</li>
              <li>Leverage modern AI engineering tools to accelerate development velocity.</li>
              <li>Built event-driven workflows with <span className="skill-highlight">EventBridge</span>, <span className="skill-highlight">SQS</span>, and <span className="skill-highlight">SNS</span>.</li>
            </ul>
            <div className="timeline-tech">
              <span className="tech-chip"><Terminal size={14} /> TypeScript · Node.js</span>
              <span className="tech-chip"><Cloud size={14} /> AWS Lambdas · Step Functions · SNS · SQS · EventBridge</span>
              <span className="tech-chip"><Server size={14} /> DynamoDB · Redis</span>
              <span className="tech-chip"><Zap size={14} /> Github Copilot · Claude · AWS Bedrock </span>
              <span className="tech-chip"><Server size={14} /> Linux · Windows </span>
            </div>
          </div>

          {/* Locusview */}
          <div className="timeline">
            <h3>Senior Software Engineer</h3>
            <span className="date">2022 — 2024</span>
            <p className="company">Locusview</p>
            <ul>
              <li>Led full-stack development of distributed SaaS platform built on microservices.</li>
              <li>Designed backend services in <span className="skill-highlight">Java</span> (<span className="skill-highlight">Spring</span> & <span className="skill-highlight">Spring Boot</span>) and <span className="skill-highlight">Node.js</span>.</li>
              <li>Delivered scalable <span className="skill-highlight">Angular</span> frontend modules.</li>
              <li>Built CI/CD pipelines and deployments with <span className="skill-highlight">Docker</span> and <span className="skill-highlight">Kubernetes</span>.</li>
            </ul>
            <div className="timeline-tech">
              <span className="tech-chip"><Server size={14} /> Java · Spring Boot · Node.js</span>
              <span className="tech-chip"><Cpu size={14} /> Angular · Next.js</span>
              <span className="tech-chip"><Cloud size={14} /> Docker · Kubernetes · CI/CD</span>
              <span className="tech-chip"><Server size={14} /> PostgreSQL</span>
              <span className="tech-chip"><Server size={14} /> Linux · Windows </span>
            </div>
          </div>

          {/* Algosec */}
          <div className="timeline">
            <h3>Software Engineer</h3>
            <span className="date">2020 — 2022</span>
            <p className="company">Algosec</p>
            <ul>
              <li>Developed <span className="skill-highlight">cybersecurity</span> & firewall automation systems in <span className="skill-highlight">microservices</span> environments.</li>
              <li>Improved service reliability and maintainability across distributed components.</li>
            </ul>
            <div className="timeline-tech">
              <span className="tech-chip"><Server size={14} /> Java · Spring · Spring Boot · Hibernate</span>
              <span className="tech-chip"><Activity size={14} /> Cybersecurity</span>
              <span className="tech-chip"><Server size={14} /> MongoDB</span>
              <span className="tech-chip"><Server size={14} /> Linux · Windows </span>
            </div>
          </div>

          {/* AT&T */}
          <div className="timeline">
            <h3>Software Engineer</h3>
            <span className="date">2017 — 2020</span>
            <p className="company">AT&T</p>
            <ul>
              <li>Built large-scale production systems serving U.S. enterprise customers.</li>
              <li>Designed <span className="skill-highlight">distributed systems</span> components following best practices.</li>
              <li>Collaborated with international engineering teams across time zones.</li>
            </ul>
            <div className="timeline-tech">
              <span className="tech-chip"><Server size={14} /> Java · Node.Js · TypeScript</span>
              <span className="tech-chip"><Cloud size={14} /> AWS </span>
              <span className="tech-chip"><Server size={14} /> MSSQL · MongoDB</span>
              <span className="tech-chip"><Server size={14} /> Linux · Windows </span>
            </div>
          </div>

          {/* AT&T - QA */}
          <div className="timeline">
            <h3>QA Analyst</h3>
            <span className="date">2015 — 2017</span>
            <p className="company">AT&T</p>
            <ul>
              <li>QA testing for client/server production systems.</li>
              <li>Designed comprehensive test plans and documentation.</li>
            </ul>
            <div className="timeline-tech">
              <span className="tech-chip"><Activity size={14} /> QA Testing</span>
              <span className="tech-chip"><Terminal size={14} /> Test Planning & Documentation</span>
              <span className="tech-chip"><Server size={14} /> Client/Server Production Systems</span>
            </div>
          </div>

          {/* Retalix */}
          <div className="timeline">
            <h3>QA Analyst</h3>
            <span className="date">2012 — 2015</span>
            <p className="company">Retalix</p>
            <ul>
              <li>Tested POS systems for global clients.</li>
              <li>Created acceptance criteria and test documentation.</li>
            </ul>
            <div className="timeline-tech">
              <span className="tech-chip"><Server size={14} /> POS Systems</span>
              <span className="tech-chip"><Activity size={14} /> Acceptance Testing</span>
              <span className="tech-chip"><Terminal size={14} /> QA Documentation</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title"><Cpu size={16} /> Skills</h2>
          <div className="metrics-grid">
            <MetricBar icon={<Terminal size={14} />} label="Languages & Frameworks" value={100} detail="Node.js · TypeScript · Java · Angular · Next.js · Spring" />
            <MetricBar icon={<Cloud size={14} />} label="Cloud & Serverless" value={100} detail="AWS Lambdas · Step Functions · EventBridge · SQS · SNS" />
            <MetricBar icon={<Server size={14} />} label="Databases" value={100} detail="DynamoDB · PostgreSQL · MongoDB · Redis" />
            <MetricBar icon={<Cpu size={14} />} label="Architecture" value={100} detail="Distributed SaaS · Microservices · Scalability" />
            <MetricBar icon={<Cpu size={14} />} label="Architecture" value={100} detail="Distributed SaaS · Microservices · Scalability" />
            <MetricBar icon={<Activity size={14} />} label="Tools" value={100} detail="Docker · Kubernetes · Jenkins · Github" />
            <MetricBar icon={<Zap size={14} />} label="AI Productivity" value={100} detail="Github Copilot · Claude · AWS Bedrock" />
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <h2 className="section-title"><Book size={16} /> Education</h2>
          <div className="timeline">
            <h3>LL.B Law</h3>
            <p className="company">Sha'arei Mishpat Academic College</p>
            <p>Graduated with honors.</p>
            <p>Licensed Lawyer.</p>
          </div>
        </section>

        {/* MILITARY EXPERIENCE */}
        <section id="military" className="section">
          <h2 className="section-title"><Shield size={16} /> Military Experience</h2>
          <div className="timeline">
            <h3>Systems Administrator & Software Engineer</h3>
            <p className="company">Israel Defense Forces</p>
            <ul>
              <li>Administered systems and network infrastructure.</li>
              <li>Developed internal tools and automation scripts.</li>
              <li>Provided tech support to unit personnel.</li>
            </ul>
          </div>
        </section>

      </main>

      {terminalOpen && (
        <div className="terminal">
          <p>{'> system.boot()'}</p>
          <p>{'> loading profile...'}</p>
          <p>{'> ofir_dror.cv loaded'}</p>
          <p>{'> operational'}</p>
          <p className="blink">_</p>
        </div>
      )}
    </>
  );
}

function MetricBar({
  icon,
  label,
  value,
  detail,
}: {
  icon: ReactNode;
  label: string;
  value: number;
  detail: string;
}) {
  return (
    <div className="metric-card">
      <div className="metric-top">
        <div className="metric-label">{icon}{label}</div>
      </div>
      <div className="metric-track">
        <motion.div
          className="metric-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <p className="metric-detail">{detail}</p>
    </div>
  );
}