import '../styles/Achievements.css'

export default function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'Finalist – Airbus Aerothon 5.0',
      description: 'Recognized as a finalist in one of India\'s biggest aeronautical engineering competitions',
    },
    {
      icon: '⭐',
      title: '6★ HackerRank',
      description: 'Problem Solving – Achieved the highest rating on HackerRank\'s problem-solving challenges',
    },
    {
      icon: '🔗',
      title: '200+ LeetCode Problems',
      description: 'Solved over 200 coding challenges on LeetCode, demonstrating strong DSA skills',
    },
    {
      icon: '💾',
      title: 'Gold Badge – SQL',
      description: 'HackerRank Gold Badge in SQL, showcasing expertise in database queries and optimization',
    },
  ]

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognitions and milestones</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
