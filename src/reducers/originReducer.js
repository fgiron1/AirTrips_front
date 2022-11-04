import { createReducer } from '@reduxjs/toolkit'

const initialState = null

const originReducer = createReducer(initialState, {
  '@ORIGIN/set': (state, action) => action.payload,
  '@ORIGIN/reset': (state, action) => initialState
})

const setOrigin = payload => {
  return {
    type: '@ORIGIN/set',
    payload
  }
}
const resetOrigin = () => {
  return {
    type: '@ORIGIN/reset'
  }
}

export { originReducer, setOrigin, resetOrigin }
