import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const skillGroups = [
  {
    category: 'Programming & Web',
    skills: ['Python', 'Java', 'HTML / CSS', 'SQL (Postgres)', 'JavaScript', 'Observable Framework'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Google Analytics', 'Parse.ly', 'Excel', 'Data Visualization', 'SEO Tracking', 'Metrics Reporting'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['VS Code', 'IntelliJ IDEA', 'Eclipse', 'MailChimp', 'PowerPoint', 'Google Workspace'],
  },
  {
    category: 'Strengths',
    skills: ['Bilingual (EN / ES)', 'Problem Solving', 'Client Communication', 'UI Design', 'Team Collaboration', 'Attention to Detail'],
  },
]

function SkillCard({ group, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`skill-card ${visible ? 'skill-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="skill-card__icon">{group.icon}</div>
      <h3 className="skill-card__title">{group.category}</h3>
      <ul className="skill-card__list">
        {group.skills.map(s => (
          <li key={s}><span className="skill-tag">{s}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">Skills</h2>
        </div>
        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.category} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
