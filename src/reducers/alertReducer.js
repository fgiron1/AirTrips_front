import { createReducer } from '@reduxjs/toolkit'

const initialState = null

const alertReducer = createReducer(initialState, {
  '@ALERT/set': (state, action) => action.payload,
  '@ALERT/hide': (state, action) => initialState
})

const setAlert = payload => {
  return {
    type: '@ALERT/set',
    payload
  }
}

const hideAlert = () => {
  return {
    type: '@ALERT/hide'
  }
}

export { alertReducer, setAlert, hideAlert }
