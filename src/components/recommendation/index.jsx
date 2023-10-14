import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { FaRedoAlt } from 'react-icons/fa'
import { IoMdFlower } from 'react-icons/io'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdNumbers } from 'react-icons/md'
import { BiSolidGroup } from 'react-icons/bi'
import Button from '../button'
import {
  setColor,
  setStressLevel,
  setRootCause,
  setMeditationExperience,
  setAge
} from '../../redux/formSlice'
import { colors } from '../../constants'
import './index.css'

const index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleResetClick = useCallback(() => {
    // reset form
    dispatch(setColor(colors.purple))
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
      <div className="recommendation">
        <h4>What we recommend</h4>
        <p>
          <IoMdFlower /> Mediation style
        </p>
        <p>
          <AiFillClockCircle /> Session duration
        </p>
        <p>
          <MdNumbers /> Number of sessions per day
        </p>
        <p>
          <BiSolidGroup /> Solo or group
        </p>
      </div>
    </div>
  )
}

export default index
