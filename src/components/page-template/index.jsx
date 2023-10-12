import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import './index.css'

const index = ({ content: Content, designVersion }) => {
  const backgroundImage = useSelector((state) => state.form.backgroundImage)

  return (
    <>
      <div
        id="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />

      <div id="content-wrapper">
        <Content designVersion={designVersion ?? ''} />
      </div>
    </>
  )
}

index.propTypes = {
  content: PropTypes.func.isRequired,
  designVersion: PropTypes.string
}

export default index
