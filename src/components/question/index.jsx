import PropTypes from 'prop-types'
import './index.css'

const index = ({ promptText, inputField: InputField, updateState }) => {
  return (
    <div className="question-container">
      <p>{promptText}</p>
      <InputField updateState={updateState} />
    </div>
  )
}

index.propTypes = {
  promptText: PropTypes.string.isRequired,
  inputField: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired
}

export default index
