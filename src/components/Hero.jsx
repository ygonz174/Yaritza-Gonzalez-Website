import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

// ── SWAP YOUR PHOTO HERE ──────────────────────────────────────────
// 1. Drop your image into: public/yaritza.jpg  (or .png, .webp)
// 2. Change the line below to: const PHOTO = '/personal-website/yaritza.jpg'
// 3. Save — the placeholder circle will be replaced with your photo!
const PHOTO = null
// ─────────────────────────────────────────────────────────────────

const roles = ['Aspiring Product Manager', 'Data Analytics Enthusiast', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="about" className="hero">
      <div className="hero__bg-circles">
        <div className="circle circle--1" />
        <div className="circle circle--2" />
        <div className="circle circle--3" />
      </div>

      <div className="hero__layout">
        {/* ── Left: text ── */}
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">Yaritza Gonzalez</h1>
          <div className="hero__role-wrapper">
            <span className="hero__role">{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__bio">
            An Information Systems student minoring in Product Management at
            Carnegie Mellon University, utilizing data-driven insights to guide decisions
            into solutions.
          </p>
          <div className="hero__actions">
            <Link to="contact" smooth duration={600} offset={-70} className="btn btn--primary">
              Get in Touch
            </Link>
            <a
              href="/personal-website/Yaritza-Gonzalez-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              View Résumé ↗
            </a>
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className="hero__photo-wrapper">
          {PHOTO ? (
            <img src={PHOTO} alt="Yaritza Gonzalez" className="hero__photo" />
          ) : (
            <div className="hero__photo-placeholder">
              <span>YG</span>
            </div>
          )}
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
