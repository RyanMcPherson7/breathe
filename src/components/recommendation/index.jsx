import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRedoAlt } from 'react-icons/fa'
import { IoMdFlower } from 'react-icons/io'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdNumbers } from 'react-icons/md'
import { BiSolidGroup } from 'react-icons/bi'
import Button from '../button'
import { colorsHex, colors, questionOptions } from '../../constants'
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
  const stressLevel = useSelector((state) => state.form.stressLevel)
  const rootCause = useSelector((state) => state.form.rootCause)
  const meditationExperience = useSelector(
    (state) => state.form.meditationExperience
  )
  const age = useSelector((state) => state.form.age)

  const generateMeditationStyle = useCallback(() => {
    switch (color) {
      case colors.red:
        return (
          <span>
            Transcendental Meditation (
            <a
              href="https://www.youtube.com/watch?v=fbX5eNAbpeo&pp=ygUZdHJhbnNjZW5kZW50YWwgbWVkaXRhdGlvbg%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              video explanation
            </a>
            )
          </span>
        )
      case colors.orange:
        return (
          <span>
            Zen Meditation (
            <a
              href="https://www.youtube.com/watch?v=aTIV9djESbY&pp=ygUOemVuIG1lZGl0YXRpb24%3D"
              target="_blank"
              rel="noreferrer"
            >
              video explanation
            </a>
            )
          </span>
        )
      case colors.yellow:
        return (
          <span>
            Guided Meditation (
            <a
              href="https://www.youtube.com/watch?v=Jyy0ra2WcQQ&pp=ygURZ3VpZGVkIG1lZGl0YXRpb24%3D"
              target="_blank"
              rel="noreferrer"
            >
              video explanation
            </a>
            )
          </span>
        )
      case colors.green:
        return (
          <span>
            Vipassanā Meditation (
            <a
              href="https://www.youtube.com/watch?v=Z7oYJZg9nOA&pp=ygUUdmlwYXNhbm5hIG1lZGl0YXRpb24%3D"
              target="_blank"
              rel="noreferrer"
            >
              video explanation
            </a>
            )
          </span>
        )
      case colors.blue:
        return (
          <span>
            Walking Meditation (
            <a
              href="https://www.youtube.com/watch?v=maCdzhtGgGU&pp=ygUSd2Fsa2luZyBtZWRpdGF0aW9u"
              target="_blank"
              rel="noreferrer"
            >
              video explanation
            </a>
            )
          </span>
        )
      default:
        return (
          <span>
            Silent Meditation (
            <a
              href="https://www.youtube.com/watch?v=TpbgywrvAf0&pp=ygURc2lsZW50IG1lZGl0YWl0b24%3D"
              target="_blank"
              rel="noreferrer"
            >
              video explanation
            </a>
            )
          </span>
        )
    }
  }, [color])

  const generateSessionDuration = useCallback(() => {
    let sessionDuration = 0

    switch (age) {
      case questionOptions.age[0]:
        sessionDuration = 3
        break
      case questionOptions.age[1]:
        sessionDuration = 5
        break
      case questionOptions.age[2]:
        sessionDuration = 10
        break
      default:
        sessionDuration = 15
    }

    if (stressLevel > 5) {
      sessionDuration *= 2
    }

    return <span>{sessionDuration} minutes per session</span>
  }, [age])

  const generateNumSessions = useCallback(() => {
    if (
      meditationExperience === questionOptions.meditationExperience[0] ||
      meditationExperience === questionOptions.meditationExperience[1]
    ) {
      return <span>1 morning or evening session</span>
    }

    return <span>1 morning and 1 evening session</span>
  }, [meditationExperience])

  const generateGroupStyle = useCallback(() => {
    if (
      rootCause === questionOptions[1] ||
      rootCause === questionOptions[2] ||
      rootCause === questionOptions[4]
    ) {
      return <span>Completed with a group</span>
    }

    return <span>Completed by yourself</span>
  }, [rootCause])

  const handleResetClick = useCallback(() => {
    // reset form
    dispatch(setStressLevel('5'))
    dispatch(setRootCause(''))
    dispatch(setMeditationExperience(''))
    dispatch(setAge(''))

    navigate(`/${location.pathname.split('/')[1]}/form`)
  }, [
    dispatch,
    setStressLevel,
    setRootCause,
    setMeditationExperience,
    setAge,
    location
  ])

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
        <h4>What we recommend:</h4>
        <p>
          <IoMdFlower className="recommendation-icon" />
          {generateMeditationStyle()}
        </p>
        <p>
          <AiFillClockCircle className="recommendation-icon" />
          {generateSessionDuration()}
        </p>
        <p>
          <MdNumbers className="recommendation-icon" />
          {generateNumSessions()}
        </p>
        <p>
          <BiSolidGroup className="recommendation-icon" />
          {generateGroupStyle()}
        </p>
      </div>
    </div>
  )
}

export default index
