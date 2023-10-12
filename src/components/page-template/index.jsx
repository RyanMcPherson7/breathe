import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { backgroundImages } from '../../constants'
import './index.css'

const index = ({ content: Content, designVersion }) => {
  const [backgroundImage, setBackgroundImage] = useState(
    backgroundImages.purple
  )

  return (
    <>
      <div
        id="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />

      <div id="content-wrapper">
        <Content
          designVersion={designVersion ?? ''}
          setBackgroundImage={setBackgroundImage}
        />
      </div>
    </>
  )
}

index.propTypes = {
  content: PropTypes.func.isRequired,
  designVersion: PropTypes.string
}

export default index
