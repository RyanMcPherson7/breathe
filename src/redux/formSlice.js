import { createSlice } from '@reduxjs/toolkit'
import { backgroundImages } from '../constants'

/* eslint-disable no-param-reassign */

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    backgroundImage: backgroundImages.purple,
    color: '',
    stressLevel: '',
    rootCause: '',
    meditationExperience: '',
    age: ''
  },
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload
    },
    setColor: (state, action) => {
      state.color = action.payload
    },
    setStressLevel: (state, action) => {
      state.stressLevel = action.payload
    },
    setRootCause: (state, action) => {
      state.rootCause = action.payload
    },
    setMeditationExperience: (state, action) => {
      state.meditationExperience = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
})

export const {
  setBackgroundImage,
  setColor,
  setStressLevel,
  setRootCause,
  setMeditationExperience,
  setAge
} = formSlice.actions

export default formSlice.reducer
