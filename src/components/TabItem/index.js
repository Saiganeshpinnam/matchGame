import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {tabId, displayText} = tabDetails
  return (
    <li className="tab-list-element">
      <button type="button" className="tab-item-container">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
