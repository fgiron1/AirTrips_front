import { createReducer } from '@reduxjs/toolkit'

const initialState = null

const destinationReducer = createReducer(initialState, {
  '@DESTINATION/set': (state, action) => action.payload,
  '@DESTINATION/reset': (state, action) => initialState
})

const setDestination = payload => {
  return {
    type: '@DESTINATION/set',
    payload
  }
}

const resetDestination = () => {
  return {
    type: '@DESTINATION/reset'
  }
}

export { destinationReducer, setDestination, resetDestination }
