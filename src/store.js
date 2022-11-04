import { configureStore } from '@reduxjs/toolkit'
import { originReducer } from './reducers/originReducer'
import { destinationReducer } from './reducers/destinationReducer'
import { alertReducer } from './reducers/alertReducer'
import { ticketsReducer } from './reducers/ticketsReducer'
import { datesReducer } from './reducers/datesReducer'
import { stepReducer } from './reducers/stepReducer'

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    step: stepReducer,
    origin: originReducer,
    destination: destinationReducer,
    dates: datesReducer,
    tickets: ticketsReducer
  }
})
