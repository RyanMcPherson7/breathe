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
        inputField={() => <div>put input field here</div>}
        updateState={setColor}
      />
      <Question
        promptText="2. On a scale of 1 to 10, how stressed did you feel today?"
        inputField={() => <div>put input field here</div>}
        updateState={setStressLevel}
      />
      <Question
        promptText="3. What do you think is the root cause of your stress?"
        inputField={() => <div>put input field here</div>}
        updateState={setRootCause}
      />
      <Question
        promptText="4. Have you meditated before?"
        inputField={() => <div>put input field here</div>}
        updateState={setMeditationExperience}
      />
      <Question
        promptText="5: How old are you?"
        inputField={() => <div>put input field here</div>}
        updateState={setAge}
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
