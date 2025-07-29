import React, { useState, useEffect } from 'react';
import './App.css';

// Dummy portfolio data (would be replaced with real API data in prod)
const PROFILE = {
  name: "Jane Doe",
  title: "Full Stack Developer",
  summary: "Passionate about building scalable web solutions. Experienced in React, Node.js, and cloud infrastructure.",
  avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
  location: "New York, NY"
};

const SKILLS = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" }
];

const EXPERIENCE = [
  {
    company: "TechSolutions Inc",
    role: "Senior Frontend Engineer",
    period: "2021 - Present",
    description: "Lead UI development and architecture for enterprise SaaS solution. Mentored junior developers.",
    logo: "https://img.icons8.com/ios-filled/50/000000/source-code.png"
  },
  {
    company: "Innovate Labs",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Implemented full-stack features, managed CI/CD pipelines and contributed to business growth.",
    logo: "https://img.icons8.com/ios-filled/50/000000/lab-items.png"
  },
];

const PROJECTS = [
  {
    name: "Portfolio Generator",
    short: "Auto-generates portfolio websites using AI.",
    details: "A SaaS tool that lets users quickly deploy modern, responsive portfolios using their LinkedIn or GitHub profiles. Built with React, Express, and MongoDB. Supports theme switching and custom domains.",
    stack: "React, Express, MongoDB, Heroku",
    url: "https://portfolio-gen.app",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Real-Time ChatApp",
    short: "Modern secure web messenger.",
    details: "Private encrypted messenger built on MERN stack with Socket.IO for real-time updates, and PWA offline capabilities.",
    stack: "MongoDB, Express, React, Node, Socket.IO",
    url: "https://chatapp.example.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "E-Commerce Dashboard",
    short: "Analytics for online stores.",
    details: "Dashboard with live sales analytics and advanced filtering, focused on responsive design and high usability.",
    stack: "React, D3.js, Node.js, AWS",
    url: "https://ecom-dashboard.site",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Weather Insights",
    short: "Hyperlocal weather visualizations.",
    details: "Visualizes weather from multiple APIs; crisp UI; favorites feature with local storage.",
    stack: "React, Tailwind, REST APIs",
    url: "https://weatherinsights.app",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
  }
];

// PUBLIC_INTERFACE
function App() {
  const [theme] = useState('light');
  const [projectDetails, setProjectDetails] = useState(null); // project shown in modal/details view
  const [contactSent, setContactSent] = useState(false);

  // PUBLIC_INTERFACE
  const handleProjectClick = project => setProjectDetails(project);

  // PUBLIC_INTERFACE
  const closeProjectModal = () => setProjectDetails(null);

  // PUBLIC_INTERFACE
  const handleContactSubmit = e => {
    e.preventDefault();
    // Would integrate with real mail service/API here
    setContactSent(true);
    setTimeout(() => setContactSent(false), 3000);
    e.target.reset();
  };

  // Set palette CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty('--pf-primary', '#1976d2');
    document.documentElement.style.setProperty('--pf-secondary', '#424242');
    document.documentElement.style.setProperty('--pf-accent', '#ffb300');
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="pf-root">
      <Navigation />
      <MainSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection projects={PROJECTS} onProjectClick={handleProjectClick} />
      <ContactSection onContact={handleContactSubmit} contactSent={contactSent} />
      <FooterSection />

      {projectDetails && <ProjectModal project={projectDetails} onClose={closeProjectModal} />}
    </div>
  );
}

// PUBLIC_INTERFACE
function Navigation() {
  // Simple nav that scrolls to section IDs
  return (
    <nav className="pf-navbar" role="navigation" aria-label="Main Navigation">
      <div className="pf-navbar-logo">Portfolio</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// PUBLIC_INTERFACE
function MainSection() {
  return (
    <section className="pf-main" id="about">
      <img className="pf-avatar" src={PROFILE.avatar} alt={PROFILE.name + " avatar"} />
      <div>
        <h1>{PROFILE.name}</h1>
        <h2 className="pf-title">{PROFILE.title}</h2>
        <p className="pf-summary">{PROFILE.summary}</p>
        <p className="pf-location">{PROFILE.location}</p>
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function SkillsSection() {
  return (
    <section className="pf-section" id="skills">
      <h2>Skills</h2>
      <div className="pf-skills-grid">
        {SKILLS.map(skill => (
          <div key={skill.name} className="pf-skill-card">
            <span className="pf-skill-name">{skill.name}</span>
            <span className="pf-skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function ExperienceSection() {
  return (
    <section className="pf-section" id="experience">
      <h2>Work Experience</h2>
      <div className="pf-experience-list">
        {EXPERIENCE.map((exp, idx) => (
          <div key={exp.company + idx} className="pf-experience-card">
            <img className="pf-experience-logo" src={exp.logo} alt={exp.company + " logo"} />
            <div className="pf-experience-info">
              <h3>{exp.role}</h3>
              <div className="pf-experience-company-period">
                <span className="pf-experience-company">{exp.company}</span> <span>· {exp.period}</span>
              </div>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function ProjectsSection({ projects, onProjectClick }) {
  return (
    <section className="pf-section" id="projects">
      <h2>Projects</h2>
      <div className="pf-projects-grid">
        {projects.map((proj, idx) => (
          <div
            key={proj.name + idx}
            className="pf-project-card"
            onClick={() => onProjectClick(proj)}
            tabIndex={0}
            role="button"
            aria-label={`View project details: ${proj.name}`}
            onKeyPress={e => {
              if (e.key === "Enter") onProjectClick(proj);
            }}
          >
            <img src={proj.image} alt={proj.name} className="pf-project-image" />
            <div className="pf-project-content">
              <div className="pf-project-title">{proj.name}</div>
              <div className="pf-project-short">{proj.short}</div>
              <div className="pf-project-stack">{proj.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function ProjectModal({ project, onClose }) {
  // Modal styling handled in CSS
  return (
    <div className="pf-modal-backdrop" onClick={onClose} tabIndex={-1} role="dialog" aria-modal="true">
      <div className="pf-modal" onClick={e => e.stopPropagation()}>
        <button className="pf-modal-close" onClick={onClose} aria-label="Close project details">&times;</button>
        <img src={project.image} alt={project.name} className="pf-modal-image" />
        <h2 className="pf-modal-title">{project.name}</h2>
        <div className="pf-modal-stack">{project.stack}</div>
        <p className="pf-modal-details">{project.details}</p>
        <a className="pf-modal-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit project ↗</a>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function ContactSection({ onContact, contactSent }) {
  // Simple pure React contact form; real app would require backend/email API
  return (
    <section className="pf-section" id="contact">
      <h2>Contact</h2>
      <form className="pf-contact-form" onSubmit={onContact} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" required minLength={2} />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" required minLength={10} rows={4} />
        </label>
        <button className="pf-btn pf-btn-primary" type="submit" disabled={contactSent}>
          {contactSent ? "Message Sent!" : "Send Message"}
        </button>
      </form>
      <div className={"pf-contact-success " + (contactSent ? "visible" : "")}>Thanks for reaching out!</div>
    </section>
  );
}

// PUBLIC_INTERFACE
function FooterSection() {
  return (
    <footer className="pf-footer">
      <span>&copy; {new Date().getFullYear()} {PROFILE.name}. Built with React.</span>
      <span>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </span>
    </footer>
  );
}

export default App;
