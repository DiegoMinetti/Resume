import { useRef, useState } from 'react'
import html2pdf from 'html2pdf.js'

const PROFILE = `Senior Software Engineer with 20+ years of experience building business-critical applications,
leading end-to-end product development, and designing scalable software architectures. Specialized in
.NET, React, TypeScript, SQL Server, AWS and Docker. Proven track record delivering CRM platforms,
PWAs, API integrations, automation solutions and cloud-based systems.`

const CORE_EXPERTISE = [
  'Solution Architecture',
  'Full-Stack Development',
  'Product Engineering',
  'API Integrations',
  'Cloud & DevOps (AWS, Docker, CI/CD)',
  'Database Design',
  'Security & Authentication',
  'Process Automation',
  'Agile Development',
  'Technical Leadership',
]

const TECH_STACK = [
  '.NET Core', 'C#', 'ASP.NET MVC', 'Web APIs', 'Entity Framework',
  'React', 'TypeScript', 'JavaScript', 'SQL Server', 'DynamoDB',
  'Docker', 'AWS', 'Git', 'GitHub Actions', 'XUnit', 'Linux', 'Windows Server',
  'SOAP/REST APIs', 'SignalR',
]

const ACHIEVEMENTS = [
  'Architected and developed a custom CRM platform covering invoicing, purchasing, inventory and financial tracking.',
  'Integrated AFIP/ARCA services for fiscal validation and business automation.',
  'Led development of a large-scale retail PWA for a national hardware store chain.',
  'Designed and deployed production solutions using AWS, Docker and modern web technologies.',
  'Built infrastructure, networking and automation solutions for SMB environments.',
]

const EXPERIENCE = [
  {
    role: 'Senior Software Developer (Freelance)',
    period: '2020 – Present',
    desc: 'CRM architecture, .NET Core, React, TypeScript, SQL Server, Docker, XUnit, AFIP integrations.',
  },
  {
    role: 'Senior Software Developer (Freelance)',
    period: '2018 – 2020',
    desc: 'Technical lead for retail PWA project. ASP.NET MVC, AWS, DynamoDB, Agile XP.',
  },
  {
    role: 'Smmart Internet',
    period: '2004 – 2018',
    desc: 'Progressed from Trainee Developer to Semi Senior Developer and IT Specialist, delivering CRM, management systems, infrastructure and automation projects.',
  },
]

const SOFT_SKILLS = [
  'Analytical Thinking',
  'Problem Solving',
  'Product Mindset',
  'Technical Leadership',
  'Adaptability',
  'Stakeholder Communication',
  'Negotiation',
  'Project Ownership',
  'Decision Making',
]

const EDUCATION = [
  'UADE – Computer Engineering (2005–2010)',
  'EF SET English Certificate: 75/100 (C2 Proficient)',
  'Spanish: Native | English: Professional Working Proficiency',
]

function App() {
  const resumeRef = useRef<HTMLDivElement | null>(null)
  const [exporting, setExporting] = useState(false)

  const handleDownloadPdf = async () => {
    const node = resumeRef.current
    if (!node) return
    setExporting(true)
    try {
      document.body.classList.add('pdf-mode')
      // Wait a tick so the print styles apply before html2pdf snapshots
      await new Promise((r) => setTimeout(r, 50))
      await html2pdf()
        .set({
          margin: [10, 10, 10, 10],
          filename: 'Diego_Minetti_Resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['css', 'legacy'] },
        })
        .from(node)
        .save()
    } finally {
      document.body.classList.remove('pdf-mode')
      setExporting(false)
    }
  }

  return (
    <div className="page">
      <a className="skip-link" href="#resume">
        Skip to resume content
      </a>
      <header className="toolbar" role="banner">
        <div className="brand">Diego Minetti · Resume</div>
        <div className="actions">
          <a
            className="btn"
            href="https://github.com/DiegoMinetti"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/diegominetti"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleDownloadPdf}
            disabled={exporting}
            aria-label="Download resume as PDF"
          >
            {exporting ? (
              <>
                <span className="spinner" aria-hidden="true" /> Generating…
              </>
            ) : (
              <>
                <span aria-hidden="true">⬇</span> Download PDF
              </>
            )}
          </button>
        </div>
      </header>

      <main id="resume" className="resume" ref={resumeRef} tabIndex={-1}>
        <header className="resume__header">
          <h1 className="resume__name">Diego Minetti</h1>
          <p className="resume__title">
            Senior Product Engineer | Solution Architect | .NET • React • AWS • Docker
          </p>
          <p className="resume__contacts">
            Argentina &amp; Italy Citizenship
            <span className="sep">·</span>
            Buenos Aires, Argentina
            <span className="sep">·</span>
            <a href="mailto:diegominetti@gmail.com">diegominetti@gmail.com</a>
            <span className="sep">·</span>
            <a href="tel:+5491165177711">+54 9 11 6517-7711</a>
            <br />
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/diegominetti" target="_blank" rel="noreferrer noopener">
              linkedin.com/in/diegominetti
            </a>
            <span className="sep">·</span>
            GitHub:{' '}
            <a href="https://github.com/DiegoMinetti" target="_blank" rel="noreferrer noopener">
              github.com/DiegoMinetti
            </a>
          </p>
        </header>

        <section className="section">
          <h2 className="section__title">Profile</h2>
          <div className="section__body">
            <p>{PROFILE}</p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Core Expertise</h2>
          <div className="section__body">
            <ul className="list">
              {CORE_EXPERTISE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Tech Stack</h2>
          <div className="section__body">
            <div className="tags">
              {TECH_STACK.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Selected Achievements</h2>
          <div className="section__body">
            <ul className="list">
              {ACHIEVEMENTS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Experience</h2>
          <div className="section__body">
            {EXPERIENCE.map((e) => (
              <div className="experience-item" key={`${e.role}-${e.period}`}>
                <div className="exp-role">{e.role}</div>
                <div className="exp-meta">{e.period}</div>
                <div className="exp-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Leadership &amp; Soft Skills</h2>
          <div className="section__body">
            <div className="tags">
              {SOFT_SKILLS.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Education &amp; Certifications</h2>
          <div className="section__body">
            <ul className="list">
              {EDUCATION.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <p className="footer-note">
        Built with React + Vite · Deployed via GitHub Actions · © {new Date().getFullYear()} Diego Minetti
      </p>
    </div>
  )
}

export default App
