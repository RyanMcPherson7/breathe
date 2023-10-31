import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiFillThunderbolt } from 'react-icons/ai'
import Question from '../question'
import {
  setColor,
  setStressLevel,
  setRootCause,
  setMeditationExperience,
  setAge
} from '../../redux/formSlice'
import Button from '../button'
import Radios from '../input-fields/radios'
import Dropdown from '../input-fields/dropdown'
import Slider from '../input-fields/slider'
import ColorSelect from '../input-fields/color-select'
import { questionOptions, questionPrompts } from '../../constants'
import './index.css'

const index = () => {
  const navigate = useNavigate()

  const color = useSelector((state) => state.form.color)
  const stressLevel = useSelector((state) => state.form.stressLevel)
  const rootCause = useSelector((state) => state.form.rootCause)
  const meditationExperience = useSelector(
    (state) => state.form.meditationExperience
  )
  const age = useSelector((state) => state.form.age)

  const handleFormSubmit = useCallback(() => {
    const missingInputField = []

    if (color === '') missingInputField.push(questionPrompts.color)
    if (stressLevel === '') missingInputField.push(questionPrompts.stressLevel)
    if (rootCause === '') missingInputField.push(questionPrompts.rootCause)
    if (meditationExperience === '')
      missingInputField.push(questionPrompts.meditationExperience)
    if (age === '') missingInputField.push(questionPrompts.age)

    if (missingInputField.length !== 0) {
      let missingInputMessage = 'Please fill out the following questions:\n'

      missingInputField.forEach((field) => {
        missingInputMessage += `${field}\n`
      })

      alert(missingInputMessage)
      return
    }

    navigate('/A/recommendation')
  }, [color, stressLevel, rootCause, meditationExperience, age])

  return (
    <div id="form-a-container">
      <h2>Let's take a breathe.</h2>
      <Question
        promptText={questionPrompts.color}
        inputField={<ColorSelect state={color} updateState={setColor} />}
      />
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
      <Question
        promptText={questionPrompts.rootCause}
        inputField={
          <Dropdown
            options={questionOptions.rootCause}
            updateState={setRootCause}
          />
        }
      />
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
      <Button
        handleClick={handleFormSubmit}
        text="Give me a recommendation"
        icon={AiFillThunderbolt}
        isGradient
        isDisabled={false} // TODO: change function to account for input and dynamically change if button is disabled
        disabledToolTip="Please fill out the entire form to enable this button"
      />
    </div>
  )
}

export default index
