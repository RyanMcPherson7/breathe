import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import './index.css'

const index = ({ options, state, updateState }) => {
  const dispatch = useDispatch()

  const handleOptionSelect = useCallback(
    (event) => {
      dispatch(updateState(event.target.value))
    },
    [dispatch, updateState]
  )

  return (
    <select onChange={handleOptionSelect} value={state}>
      <option value="">Please select an option</option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

index.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired
}

export default index
