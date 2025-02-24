import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  // console.log(tabDetails)
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-list-element">
      <button
        type="button"
        className="tab-item-container"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
