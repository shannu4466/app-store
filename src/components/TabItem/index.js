import './index.css'

const TabItem = props => {
  const {tab, clicktabItem, isActive} = props
  const {displayText, tabId} = tab
  const onClicktabItem = () => {
    clicktabItem(tabId)
  }
  const activeButtonClassStyle = isActive ? 'active-btn' : ''
  return (
    <li>
      <button
        onClick={onClicktabItem}
        type="button"
        className={`tab-btn ${activeButtonClassStyle}`}
      >
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
