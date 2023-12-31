import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import './index.css'

const index = ({ min, max, state, updateState }) => {
  const dispatch = useDispatch()

  const handleSliderChange = useCallback(
    (event) => {
      dispatch(updateState(event.target.value))
    },
    [dispatch, updateState]
  )

  return (
    <div className="slider-container">
      <div className="slider-value">
        <p>{state}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={state}
        onChange={handleSliderChange}
      />
    </div>
  )
}

const { number, string, func } = PropTypes
index.propTypes = {
  min: number.isRequired,
  max: number.isRequired,
  state: string.isRequired,
  updateState: func.isRequired
}

export default index
