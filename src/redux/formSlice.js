import { createSlice } from '@reduxjs/toolkit'

/* eslint-disable no-param-reassign */

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    color: 'purple',
    stressLevel: '',
    rootCause: '',
    meditationExperience: '',
    age: ''
  },
  reducers: {
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
  setColor,
  setStressLevel,
  setRootCause,
  setMeditationExperience,
  setAge
} = formSlice.actions

export default formSlice.reducer
