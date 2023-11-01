import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Question from '../question'
import ColorSelect from '../input-fields/color-select'
import { questionPrompts, questionOptions } from '../../constants'
import Button from '../button'
import Radios from '../input-fields/radios'
import Dropdown from '../input-fields/dropdown'
import Slider from '../input-fields/slider'
import {
  setColor,
  setStressLevel,
  setRootCause,
  setMeditationExperience,
  setAge
} from '../../redux/formSlice'
import './index.css'

const index = () => {
  const navigate = useNavigate()

  const [questionNumber, setQuestionNumber] = useState(1)
  const [isNextDisabled, setIsNextDisabled] = useState(false)
  const color = useSelector((state) => state.form.color)
  const stressLevel = useSelector((state) => state.form.stressLevel)
  const rootCause = useSelector((state) => state.form.rootCause)
  const meditationExperience = useSelector(
    (state) => state.form.meditationExperience
  )
  const age = useSelector((state) => state.form.age)

  const handleBackClick = useCallback(() => {
    setQuestionNumber(questionNumber - 1)
  })

  const handleNextClick = useCallback(() => {
    setQuestionNumber(questionNumber + 1)
  })

  const handleFormSubmit = useCallback(() => {
    navigate('/B/recommendation')
  }, [navigate])

  const renderQuestion = useCallback(() => {
    switch (questionNumber) {
      case 1:
        return (
          <Question
            promptText={questionPrompts.color}
            inputField={<ColorSelect state={color} updateState={setColor} />}
          />
        )
      case 2:
        return (
          <Question
            promptText={questionPrompts.stressLevel}
            inputField={
              <Slider
                min={1}
                max={10}
                state={stressLevel}
                updateState={setStressLevel}
              />
            }
          />
        )
      case 3:
        return (
          <Question
            promptText={questionPrompts.rootCause}
            inputField={
              <Dropdown
                options={questionOptions.rootCause}
                updateState={setRootCause}
              />
            }
          />
        )
      case 4:
        return (
          <Question
            promptText={questionPrompts.meditationExperience}
            inputField={
              <Radios
                options={questionOptions.meditationExperience}
                state={meditationExperience}
                updateState={setMeditationExperience}
              />
            }
          />
        )
      case 5:
        return (
          <Question
            promptText={questionPrompts.age}
            inputField={
              <Radios
                options={questionOptions.age}
                state={age}
                updateState={setAge}
              />
            }
          />
        )
      default:
        return <span>Unexpected step number</span>
    }
  }, [questionNumber, color, stressLevel, rootCause, meditationExperience, age])

  return (
    <div id="form-b-container">
      <h2>Let's take a breathe.</h2>
      {renderQuestion()}
      <div
        id="form-b-nav-buttons"
        style={{
          justifyContent: questionNumber === 1 ? 'flex-end' : 'space-between'
        }}
      >
        {questionNumber !== 1 && (
          <Button
            handleClick={handleBackClick}
            text="Back"
            icon={FiArrowLeft}
          />
        )}
        {questionNumber !== 5 && (
          <Button
            handleClick={handleNextClick}
            text="Next"
            icon={FiArrowRight}
            isDisabled={isNextDisabled}
            disabledToolTip="Please respond to the question to enable this button"
            isIconRight
          />
        )}

        {questionNumber === 5 && (
          <Button
            handleClick={handleFormSubmit}
            text="Recommend a plan"
            icon={AiFillThunderbolt}
            isGradient
            isDisabled={isNextDisabled}
            disabledToolTip="Please fill out the entire form to enable this button"
          />
        )}
      </div>
    </div>
  )
}

export default index
