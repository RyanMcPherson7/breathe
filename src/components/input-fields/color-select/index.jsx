import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AiFillCheckCircle } from 'react-icons/ai'
import { colors, colorsHex } from '../../../constants'
import './index.css'

const index = ({ state, updateState }) => {
  const dispatch = useDispatch()

  const handleColorSelect = useCallback(
    (event) => {
      dispatch(updateState(event.target.value))
    },
    [dispatch, updateState]
  )

  return (
    <div className="color-select">
      <button
        type="button"
        className="color-option"
        value={colors.red}
        style={{ background: colorsHex.red }}
        onClick={handleColorSelect}
      >
        {colors.red === state && (
          <AiFillCheckCircle className="color-check-icon" />
        )}
      </button>

      <button
        type="button"
        className="color-option"
        value={colors.orange}
        style={{ background: colorsHex.orange }}
        onClick={handleColorSelect}
      >
        {colors.orange === state && (
          <AiFillCheckCircle className="color-check-icon" />
        )}
      </button>

      <button
        type="button"
        className="color-option"
        value={colors.yellow}
        style={{ background: colorsHex.yellow }}
        onClick={handleColorSelect}
      >
        {colors.yellow === state && (
          <AiFillCheckCircle className="color-check-icon" />
        )}
      </button>

      <button
        type="button"
        className="color-option"
        value={colors.green}
        style={{ background: colorsHex.green }}
        onClick={handleColorSelect}
      >
        {colors.green === state && (
          <AiFillCheckCircle className="color-check-icon" />
        )}
      </button>

      <button
        type="button"
        className="color-option"
        value={colors.blue}
        style={{ background: colorsHex.blue }}
        onClick={handleColorSelect}
      >
        {colors.blue === state && (
          <AiFillCheckCircle className="color-check-icon" />
        )}
      </button>

      <button
        type="button"
        className="color-option"
        value={colors.purple}
        style={{ background: colorsHex.purple }}
        onClick={handleColorSelect}
      >
        {colors.purple === state && (
          <AiFillCheckCircle className="color-check-icon" />
        )}
      </button>
    </div>
  )
}

index.propTypes = {
  state: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired
}

export default index
