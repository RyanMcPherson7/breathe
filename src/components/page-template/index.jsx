import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { colors, backgroundImages } from '../../constants'
import './index.css'

const index = ({ content: Content, designVersion }) => {
  const color = useSelector((state) => state.form.color)
  const [backgroundImage, setBackgroundImage] = useState(
    backgroundImages.purple
  )

  // handle background switch on color switch
  useEffect(() => {
    switch (color) {
      case colors.red:
        setBackgroundImage(backgroundImages[colors.red])
        break
      case colors.orange:
        setBackgroundImage(backgroundImages[colors.orange])
        break
      case colors.yellow:
        setBackgroundImage(backgroundImages[colors.yellow])
        break
      case colors.green:
        setBackgroundImage(backgroundImages[colors.green])
        break
      case colors.blue:
        setBackgroundImage(backgroundImages[colors.blue])
        break
      default:
        setBackgroundImage(backgroundImages[colors.purple])
    }
  }, [color])

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
