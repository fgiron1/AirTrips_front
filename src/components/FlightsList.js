/* eslint-disable multiline-ternary */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { List, Panel, Placeholder } from 'rsuite'
import FlightItem from './FlightItem'

const FlightsList = () => {
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/api/v1/flight/').then(res => {
    // const

      setFlights(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <List hover>
      {loading ? (
        <Panel bordered>
          <Placeholder.Paragraph />
          <Placeholder.Paragraph />
          <Placeholder.Paragraph />
        </Panel>
      ) : (
        flights.map(flight => <FlightItem key={flight.id} flight={flight} />)
      )}
    </List>
  )
}

export default FlightsList
