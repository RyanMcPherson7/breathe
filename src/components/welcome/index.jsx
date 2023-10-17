import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../button'
import './index.css'

const index = ({ designVersion }) => {
  const navigate = useNavigate()

  return (
    <div id="welcome-container">
      <h1>breathe.</h1>
      <h5>Discover inner peace with tailored mindfulness recommendations</h5>
      <Button
        handleClick={() => navigate(`/${designVersion}/form`)}
        text="Get started"
        icon={FiArrowRight}
        isGradient
        isIconRight
      />
    </div>
  )
}

index.propTypes = {
  designVersion: PropTypes.string.isRequired
}

export default index
