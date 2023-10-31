import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import './index.css'

const index = ({ options, state, updateState }) => {
  const dispatch = useDispatch()

  const handleRadioSelect = useCallback(
    (event) => {
      dispatch(updateState(event.target.value))
    },
    [dispatch, updateState]
  )

  return (
    <div className="radio-group">
      {options.map((option) => (
        <label
          key={option}
          htmlFor={option}
          style={{
            borderBottom:
              option === state ? '2px solid var(--color-purple)' : 'none'
          }}
        >
          <input
            id={option}
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
