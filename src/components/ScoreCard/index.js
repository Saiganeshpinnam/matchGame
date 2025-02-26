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

        <button type="button" className="play-again-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          <span>PLAY AGAIN</span>
        </button>
      </div>
    )
  )
}
export default ScoreCard
