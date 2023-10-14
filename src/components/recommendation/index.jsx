import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRedoAlt } from 'react-icons/fa'
import { IoMdFlower } from 'react-icons/io'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdNumbers } from 'react-icons/md'
import { BiSolidGroup } from 'react-icons/bi'
import Button from '../button'
import { colorsHex } from '../../constants'
import {
  setStressLevel,
  setRootCause,
  setMeditationExperience,
  setAge
} from '../../redux/formSlice'
import './index.css'

const index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const color = useSelector((state) => state.form.color)

  const handleResetClick = useCallback(() => {

    // reset form
    dispatch(setStressLevel('5'))
    dispatch(setRootCause(''))
    dispatch(setMeditationExperience(''))
    dispatch(setAge(''))

    navigate(`/${location.pathname.split('/')[1]}/form`)
  }, [])

  return (
    <div id="recommendation-container">
      <Button
        handleClick={handleResetClick}
        text="Try again"
        icon={FaRedoAlt}
        isGradient
      />
      <div
        className="recommendation"
        style={{
          background: `linear-gradient(130deg, ${colorsHex.brandPurple} 50%, ${colorsHex[color]} 100%)`
        }}
      >
        <h4>What we recommend</h4>
        <p>
          <IoMdFlower className="recommendation-icon" /> Mediation style
        </p>
        <p>
          <AiFillClockCircle className="recommendation-icon" /> Session duration
        </p>
        <p>
          <MdNumbers className="recommendation-icon" /> Number of sessions per
          day
        </p>
        <p>
          <BiSolidGroup className="recommendation-icon" /> Solo or group
        </p>
      </div>
    </div>
  )
}

export default index
