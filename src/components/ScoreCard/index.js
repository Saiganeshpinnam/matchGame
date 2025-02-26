import './index.css'

const ScoreCard = props => {
  const {score, isGameOver} = props
  return (
    isGameOver && (
      <div className="scorecard-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="score-card-image"
          alt="trophy"
        />
        <h1>Your Score</h1>
        <p>{score}</p>
      </div>
    )
  )
}
export default ScoreCard
