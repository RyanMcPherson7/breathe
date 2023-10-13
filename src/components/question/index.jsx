import PropTypes from 'prop-types'
import './index.css'

const index = ({ promptText, inputField }) => {
  return (
    <div id="question-container">
      <p>{promptText}</p>
      {inputField}
    </div>
  )
}

index.propTypes = {
  promptText: PropTypes.string.isRequired,
  inputField: PropTypes.node.isRequired
}

export default index
