import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAlert, hideAlert } from '../reducers/alertReducer'
import Notification from '../components/Notification'
import TravelInfoForm from '../components/TravelInfoForm'

const Home = () => {
  const { alert, origin, destination, dates } = useSelector(s => s)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (value, event) => {
    event.preventDefault()

    console.log(event.target[0].checked)

    if (!origin || !destination) {
      dispatch(setAlert('You must provide an origin and a destination'))

      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    } else {
      if (!dates.departureDate) {
        dispatch(setAlert('You must provide at least a departure date'))

        setTimeout(() => {
          dispatch(hideAlert())
        }, 3000)
      } else {
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
