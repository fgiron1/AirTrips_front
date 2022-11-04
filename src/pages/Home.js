import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAlert, hideAlert } from '../reducers/alertReducer'
import Notification from '../components/Notification'
import TravelInfoForm from '../components/TravelInfoForm'
import { setStep } from '../reducers/stepReducer'

const Home = () => {
  const { alert, origin, destination, dates } = useSelector(s => s)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (value, event) => {
    event.preventDefault()

    if (!origin || !destination || !dates.departureDate) {
      dispatch(
        setAlert(
          'You must provide an origin, a destination and, at least, a departure date'
        )
      )

      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    } else {
      if (origin === destination) {
        dispatch(setAlert("Origin and destination can't be the same"))

        setTimeout(() => {
          dispatch(hideAlert())
        }, 3000)
      } else {
        dispatch(setStep(1))
        navigate('/tickets')
      }
    }
  }

  return (
    <>
      <Notification message={alert} />
      <TravelInfoForm
        onSubmit={handleSubmit}
        id='travelInfoForm'
        layout='horizontal'
      />
    </>
  )
}

export default Home
