import './index.css'

const Header = props => {
  const {score, getFormattedTime} = props

  return (
    <div className="header-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />

      <div className="score-timer-container">
        <p className="score">
          Score: <span className="score-count">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer">{getFormattedTime()} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
