import './index.css'

const Header = props => {
  const {score, getFormattedTime} = props
  return (
    <div className="header-bg-container">
      <p className="score">{score}</p>
      <p className="timer">{getFormattedTime()}</p>
    </div>
  )
}

export default Header
