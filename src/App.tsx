import { useEffect, useState } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import type { Content, TDocumentDefinitions } from 'pdfmake/interfaces'
import { content, type Locale } from './content'
import {
  trackLanguageSwitch,
  trackPdfDownload,
  trackResumeView,
} from './lib/umami'

;(pdfMake as typeof pdfMake & { vfs: Record<string, string> }).vfs =
  pdfFonts as unknown as Record<string, string>

function initialLocale(): Locale {
  const query = new URLSearchParams(window.location.search).get('lang')
  if (query === 'es' || query === 'en') return query
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

function App() {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [exporting, setExporting] = useState(false)
  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', t.metaTitle)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', t.metaDescription)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', url)
    // Record a virtual pageview + custom event so ES/EN show up as
    // distinct rows in Umami's Pages report and we can count views per
    // locale. Runs on mount and on every locale change.
    trackResumeView(locale)
  }, [locale, t.metaDescription, t.metaTitle])

  const handleLanguageSwitch = () => {
    const next: Locale = locale === 'en' ? 'es' : 'en'
    trackLanguageSwitch(locale, next)
    setLocale(next)
  }

  const downloadPdf = async () => {
    setExporting(true)
    try {
      pdfMake
        .createPdf(createPdfDefinition(locale))
        .download(`Diego_Minetti_Resume_${locale.toUpperCase()}.pdf`)
      trackPdfDownload(locale)
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="page">
      <a className="skip-link" href="#resume">
        {t.skipLabel}
      </a>
      <header className="toolbar">
        <div className="brand">{t.brandLabel}</div>
        <div className="actions">
          <button
            className="btn language-switch"
            type="button"
            onClick={handleLanguageSwitch}
            aria-label={`${locale === 'en' ? 'Change language to' : 'Cambiar idioma a'} ${t.switchLabel}`}
          >
            {t.switchLabel}
          </button>
          <a
            className="btn"
            href="https://github.com/DiegoMinetti"
            target="_blank"
            rel="noreferrer noopener"
            data-umami-event="outbound-github"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/diegominetti"
            target="_blank"
            rel="noreferrer noopener"
            data-umami-event="outbound-linkedin"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="btn btn--primary"
            onClick={downloadPdf}
            disabled={exporting}
            aria-label={t.downloadAria}
          >
            {exporting ? (
              <>
                <span className="spinner" aria-hidden="true" /> {t.generating}
              </>
            ) : (
              <>
                <span aria-hidden="true">↓</span> {t.download}
              </>
            )}
          </button>
        </div>
      </header>

      <main id="resume" className="resume" tabIndex={-1}>
        <header className="resume__header">
          <h1 className="resume__name">Diego Minetti</h1>
          <p className="resume__title">{t.title}</p>
          <p className="resume__contacts">
            {t.locationLine}
            <br />
            <a href="mailto:diegominetti@gmail.com">diegominetti@gmail.com</a>
            <span className="sep">·</span>
            <a href="https://www.linkedin.com/in/diegominetti">linkedin.com/in/diegominetti</a>
            <span className="sep">·</span>
            <a href="https://github.com/DiegoMinetti">github.com/DiegoMinetti</a>
          </p>
        </header>

        <Section title={t.profileTitle}>
          <p>{t.profile}</p>
        </Section>
        <Section title={t.expertiseTitle}>
          <GroupedContent groups={t.expertise} />
        </Section>
        <Section title={t.stackTitle}>
          <GroupedContent groups={t.stack} tags />
        </Section>
        <Section title={t.achievementsTitle}>
          <ul className="list">
            {t.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title={t.experienceTitle}>
          {t.experience.map((item) => (
            <article className="experience-item" key={item.role}>
              <div className="exp-role">{item.role}</div>
              <div className="exp-meta">{item.period}</div>
              <div className="exp-desc">{item.description}</div>
              <ul className="list compact">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </Section>
        <Section title={t.projectsTitle}>
          <div className="project-grid">
            {t.projects.map((project) => (
              <article className="project" id={projectId(project.name)} key={project.name}>
                <div className="exp-role">{project.name}</div>
                <p>{project.description}</p>
                <div className="project-tech">{project.technologies}</div>
              </article>
            ))}
          </div>
        </Section>
        <Section title={t.educationTitle}>
          <ul className="list">
            {t.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title={t.languagesTitle}>
          <ul className="list inline-list">
            {t.languages.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>
      </main>
      <p className="footer-note">React + TypeScript · GitHub Pages · {new Date().getFullYear()}</p>
    </div>
  )
}

function createPdfDefinition(locale: Locale): TDocumentDefinitions {
  const t = content[locale]
  const section = (title: string, body: Content | Content[]): Content[] => [
    { text: title.toUpperCase(), style: 'sectionTitle', margin: [0, 12, 0, 5] },
    ...(Array.isArray(body) ? body : [body]),
  ]
  const experience: Content[] = t.experience.flatMap((item) => [
    { text: item.role, style: 'itemTitle', margin: [0, 6, 0, 1] },
    { text: item.period, style: 'meta' },
    { text: item.description, margin: [0, 3, 0, 2] },
    { ul: item.bullets, margin: [8, 0, 0, 2] },
  ])
  const projects: Content[] = t.projects.flatMap((project) => [
    { text: project.name, style: 'itemTitle', margin: [0, 5, 0, 1] },
    { text: project.description },
    { text: project.technologies, style: 'projectTech' },
  ])

  return {
    pageSize: 'A4',
    pageMargins: [38, 34, 38, 34],
    info: {
      title: `Diego Minetti Resume ${locale.toUpperCase()}`,
      author: 'Diego Minetti',
      subject: t.title,
    },
    defaultStyle: { font: 'Roboto', fontSize: 9.2, color: '#1e293b', lineHeight: 1.18 },
    styles: {
      name: { fontSize: 25, bold: true, color: '#0f172a' },
      headline: { fontSize: 10.5, bold: true, color: '#475569' },
      contact: { fontSize: 8.6, color: '#4338ca' },
      sectionTitle: { fontSize: 9.2, bold: true, color: '#4338ca', characterSpacing: 1.3 },
      itemTitle: { fontSize: 10, bold: true, color: '#0f172a' },
      meta: { fontSize: 8.5, color: '#64748b' },
      projectTech: { fontSize: 8.3, bold: true, color: '#4338ca', margin: [0, 1, 0, 2] },
    },
    content: [
      { text: 'Diego Minetti', style: 'name' },
      { text: t.title, style: 'headline', margin: [0, 2, 0, 5] },
      { text: t.locationLine, margin: [0, 0, 0, 2] },
      {
        text: [
          { text: 'diegominetti@gmail.com', link: 'mailto:diegominetti@gmail.com' },
          '  ·  ',
          { text: 'linkedin.com/in/diegominetti', link: 'https://www.linkedin.com/in/diegominetti' },
          '  ·  ',
          { text: 'github.com/DiegoMinetti', link: 'https://github.com/DiegoMinetti' },
        ],
        style: 'contact',
      },
      {
        canvas: [
          { type: 'line', x1: 0, y1: 8, x2: 519, y2: 8, lineWidth: 0.5, lineColor: '#cbd5e1' },
        ],
        margin: [0, 0, 0, 8],
      },
      ...section(t.profileTitle, { text: t.profile }),
      ...section(t.expertiseTitle, t.expertise.map((group) => ({
        text: [{ text: `${group.title}: `, bold: true }, group.items.join(' · ')], margin: [0, 1, 0, 1],
      }))),
      ...section(t.stackTitle, t.stack.map((group) => ({
        text: [{ text: `${group.title}: `, bold: true }, group.items.join(' · ')], color: '#312e81', margin: [0, 1, 0, 1],
      }))),
      ...section(t.achievementsTitle, { ul: t.achievements }),
      ...section(t.experienceTitle, experience),
      ...section(t.projectsTitle, projects),
      ...section(t.educationTitle, { ul: t.education }),
      ...section(t.languagesTitle, { ul: t.languages }),
    ],
  }
}

function GroupedContent({ groups, tags = false }: { groups: { title: string; items: string[] }[]; tags?: boolean }) {
  return <div className="group-grid">
    {groups.map((group) => <div className="content-group" key={group.title}>
      <h3>{group.title}</h3>
      {tags ? <div className="tags">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
        : <ul className="list compact">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>}
    </div>)}
  </div>
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__body">{children}</div>
    </section>
  )
}

function projectId(name: string): string {
  if (name.startsWith('FewLines')) return 'fewlines'
  if (name === 'Tu Evento en Fotos') return 'tu-evento-en-fotos'
  if (name.includes('Hardware') || name.includes('Ferreterías')) return 'pwa-ferreterias'
  return name.toLowerCase().replace(/\s+/g, '-')
}

export default App
