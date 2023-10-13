import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import './index.css'

const index = ({ options, state, updateState }) => {
  const dispatch = useDispatch()

  const handleRadioSelect = (event) => {
    dispatch(updateState(event.target.value))
  }

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            type="radio"
            value={option}
            checked={option === state}
            onChange={handleRadioSelect}
          />
          {option}
        </label>
      ))}
    </div>
  )
}

index.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired
}

export default index
