import './index.css'

const index = () => {
  return (
    <div id="loading-container">
      <h5>Calculating...</h5>
      <div id="loading-spinner-container">
        <div className="loading-ball" />
        <div className="loading-ball" />
        <div className="loading-ball" />
        <div className="loading-ball" />
        <div className="loading-ball" />
      </div>
    </div>
  )
}

export default index
