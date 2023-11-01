import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { colorsHex } from '../../constants'
import './index.css'

const index = ({
  handleClick,
  text,
  icon: Icon,
  isGradient = false,
  isIconRight = false,
  isDisabled = false,
  disabledToolTip = ''
}) => {
  const color = useSelector((state) => state.form.color)

  return (
    <button
      title={isDisabled ? disabledToolTip : ''}
      disabled={isDisabled}
      onClick={handleClick}
      className="button"
      type="submit"
      style={{
        background: isGradient
          ? `linear-gradient(130deg, ${colorsHex.brandPurple} 30%, ${colorsHex[color]} 100%)`
          : colorsHex.brandPurple,
        opacity: isDisabled ? '0.2' : '1'
      }}
    >
      {isIconRight ? (
        <>
          {text} <Icon className="button-icon" />
        </>
      ) : (
        <>
          <Icon className="button-icon" /> {text}
        </>
      )}
    </button>
  )
}

index.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  isGradient: PropTypes.bool,
  isIconRight: PropTypes.bool,
  isDisabled: PropTypes.bool,
  disabledToolTip: PropTypes.string
}

export default index
