/* eslint-disable multiline-ternary */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { List, Panel, Placeholder } from 'rsuite'
import FlightItem from './FlightItem'

const FlightsList = () => {
  const { origin, destination } = useSelector(s => s)
  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/api/v1/flight/').then(res => {
      const filteredFlights = res.data
        .filter(f => f.origin_id.id === origin)
        .filter(f => f.destination_id.id === destination)
      setFlights(filteredFlights)
      setLoading(false)
    })
  }, [])

  return (
    <List hover>
      {loading
        ? [1, 2, 3, 4, 5].map(i => (
            <Panel bordered key={i}>
              <Placeholder.Paragraph />
            </Panel>
          ))
        : flights.map(flight => <FlightItem key={flight.id} flight={flight} />)}
    </List>
  )
}

export default FlightsList
