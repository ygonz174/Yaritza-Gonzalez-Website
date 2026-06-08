import './Awards.css'

const awards = [
  'QuestBridge Scholar',
  'Tartan Scholar \'24',
  'Hagan Scholar \'24',
  'LEDA Scholar',
  'BPA Web Design — Top 8, Texas',
  'RGV Youth of the Year \'24',
  'Google Code Next Scholar',
]

export default function Awards() {
  return (
    <div className="awards-strip" aria-label="Honors and awards">
      <div className="awards-track">
        {[...awards, ...awards].map((a, i) => (
          <span key={i} className="awards-item">{a}</span>
        ))}
      </div>
    </div>
  )
}
