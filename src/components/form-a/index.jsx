import { useSelector } from 'react-redux'
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
import './index.css'

const index = () => {
  const color = useSelector((state) => state.form.color)
  const stressLevel = useSelector((state) => state.form.stressLevel)
  const rootCause = useSelector((state) => state.form.rootCause)
  const meditationExperience = useSelector(
    (state) => state.form.meditationExperience
  )
  const age = useSelector((state) => state.form.age)

  const handleFormSubmit = () => {}

  return (
    <div id="form-a-container">
      <h2>Let's take a breathe.</h2>
      <Question
        promptText="1. What color best describes your mood today"
        inputField={<div>put input field here</div>}
      />
      <Question
        promptText="2. On a scale of 1 to 10, how stressed did you feel today?"
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
        promptText="3. What do you think is the root cause of your stress?"
        inputField={
          <Dropdown
            options={[
              'School or work',
              'Finances',
              'Health issues',
              'Personal relationships',
              'Intrapersonal (within self)',
              'Other',
              `I don't know`
            ]}
            updateState={setRootCause}
          />
        }
      />
      <Question
        promptText="4. Have you meditated before?"
        inputField={
          <Radios
            options={['Never', `I've tried it`, 'Often', 'Every day']}
            state={meditationExperience}
            updateState={setMeditationExperience}
          />
        }
      />
      <Question
        promptText="5: How old are you?"
        inputField={
          <Radios
            options={['< 18', '18 - 25', '26 - 40', '41+']}
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
      />
    </div>
  )
}

export default index
