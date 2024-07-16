import './index.css'

const AppItem = props => {
  const {app} = props
  const {imageUrl, appName} = app
  return (
    <li>
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
