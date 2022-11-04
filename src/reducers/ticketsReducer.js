import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  outboundTicket: undefined,
  returnTicket: undefined
}

const ticketsReducer = createReducer(initialState, {
  '@TICKET/outbound/set': (state, action) => action.payload,
  '@TICKET/outbound/reset': (state, action) => initialState.outboundTicket,
  '@TICKET/return/set': (state, action) => action.payload,
  '@TICKET/return/reset': (state, action) => initialState.returnTicket,
  '@TICKET/reset': (state, action) => initialState
})

const setOutboundTicket = payload => {
  return {
    type: '@TICKET/outbound/set',
    payload
  }
}
const resetOutboundTicket = () => {
  return {
    type: '@TICKET/outbound/reset'
  }
}

const setReturnTicket = payload => {
  return {
    type: '@TICKET/return/set',
    payload
  }
}
const resetReturnTicket = () => {
  return {
    type: '@TICKET/return/reset'
  }
}

export {
  ticketsReducer,
  setOutboundTicket,
  resetOutboundTicket,
  setReturnTicket,
  resetReturnTicket
}
