import { createReducer } from '@reduxjs/toolkit'

const initialState = 0

const stepReducer = createReducer(initialState, {
  '@STEP/set': (state, action) => action.payload
})

const setStep = payload => {
  return {
    type: '@STEP/set',
    payload
  }
}

export { stepReducer, setStep }
