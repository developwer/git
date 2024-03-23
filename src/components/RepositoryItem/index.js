import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, imageUrl, starsCount, forksCount, issueCount} = repositoryDetails

  return (
    <li className="repository-item">
      <img className="repository-img" src={imageUrl} alt={name} />
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="stats-text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="stats-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="stats-text">{issueCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
