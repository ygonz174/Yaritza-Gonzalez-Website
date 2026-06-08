import { useEffect, useRef, useState } from 'react'
import './Experience.css'

const timeline = [
  {
    year: 'May 2025 – Aug 2025',
    title: 'Audience Engagement & Data Analytics Intern',
    org: "Pittsburgh's PublicSource",
    type: 'Experience',
    bullets: [
      'Improved search visibility of evergreen content by 10% over 3 months through SEO metadata, headline, and internal linking recommendations',
      'Tracked pageviews, session duration, bounce rates, and engagement metrics for monthly reports using Parse.ly and Google Analytics',
    ],
  },
  {
    year: 'Sep 2024 – Present',
    title: 'Undergraduate Admissions Assistant',
    org: 'Carnegie Mellon University',
    type: 'Experience',
    bullets: [
      'Facilitated collection and organization of registration forms for counseling sessions, improving processing efficiency by 25%',
      'Greeted office visitors and assisted prospective students and families via in-person, phone, and email',
    ],
  },
  {
    year: 'Sep 2023 – Jun 2024',
    title: 'Scholar — Google Code Next',
    org: 'Google',
    type: 'Experience',
    bullets: [
      'Selected as 1 of 250 scholars nationwide for Web Development, Game Design, and Breakbeat Creative coding clubs taught by Google engineers',
      'Led design and development of three unique projects, showcased at Demo Day to peers and industry professionals',
    ],
  },
  {
    year: 'Apr 2025',
    title: 'Posture Your Focus — CMU Hackathon',
    org: 'Carnegie Mellon University',
    type: 'Project',
    bullets: [
      'Built a real-time computer vision app using OpenCV, Mediapipe, PIL, and Tkinter to improve study habits with live feedback',
      'Led UI design, notification logic, and modular code structure in a collaborative team setting',
    ],
  },
  {
    year: 'Mar 2023',
    title: 'Dakota Motors — Web Design Team',
    org: 'Business Professionals of America',
    type: 'Project',
    bullets: [
      'Designed and implemented a used car website with HTML, CSS, and JavaScript',
      'Built a Python chatbot increasing customer satisfaction by 24%; awarded Top 8 Finalist in Texas State competition',
    ],
  },
]

const typeColors = {
  Education: '#406e29',
  Experience: '#406e29',
  Achievement: '#5a8f3a',
  Project: '#2f5220',
}

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'} ${visible ? 'timeline-item--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline-item__dot" style={{ background: typeColors[item.type] }} />
      <div className="timeline-card">
        <div className="timeline-card__meta">
          <span className="timeline-card__year">{item.year}</span>
          <span
            className="timeline-card__type"
            style={{ background: typeColors[item.type] + '22', color: typeColors[item.type] }}
          >
            {item.type}
          </span>
        </div>
        <h3 className="timeline-card__title">{item.title}</h3>
        <p className="timeline-card__org">{item.org}</p>
        <ul className="timeline-card__bullets">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">Experience</h2>
        </div>
        <div className="timeline">
          <div className="timeline__line" />
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
