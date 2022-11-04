import { configureStore } from '@reduxjs/toolkit'
import { originReducer } from './reducers/originReducer'
import { destinationReducer } from './reducers/destinationReducer'
import { alertReducer } from './reducers/alertReducer'
import { ticketsReducer } from './reducers/ticketsReducer'
import { datesReducer } from './reducers/datesReducer'

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    origin: originReducer,
    destination: destinationReducer,
    dates: datesReducer,
    tickets: ticketsReducer
  }
})
