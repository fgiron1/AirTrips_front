import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  departureDate: undefined,
  returnDate: undefined
}

const datesReducer = createReducer(initialState, {
  '@DATE/departure/set': (state, action) => {
    state.departureDate = action.payload
  },
  '@DATE/departure/reset': (state, action) => {
    state.departureDate = initialState.departureDate
  },
  '@DATE/return/set': (state, action) => {
    state.returnDate = action.payload
  },
  '@DATE/return/reset': (state, action) => {
    state.returnDate = initialState.returnDate
  },
  '@DATE/reset': (state, action) => initialState
})

const setDepartureDate = payload => {
  return {
    type: '@DATE/departure/set',
    payload
  }
}

const resetDepartureDate = () => {
  return {
    type: '@DATE/departure/reset'
  }
}

const setReturnDate = payload => {
  return {
    type: '@DATE/return/set',
    payload
  }
}

const resetReturnDate = () => {
  return {
    type: '@DATE/return/reset'
  }
}

const resetDate = () => {
  return {
    type: '@DATE/reset'
  }
}

export {
  datesReducer,
  setDepartureDate,
  resetDepartureDate,
  setReturnDate,
  resetReturnDate,
  resetDate
}
