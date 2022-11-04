import axios from 'axios'
import { useEffect, useState } from 'react'
import { CheckPicker, FlexboxGrid } from 'rsuite'

const FlightFilters = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/flight/').then(res => {
      const flights = res.data
      console.log(flights)
      setAirlines(flights.map(f => f.airLine))
      console.log(airlines)
    })
  }, [])

  const AIRLINE_FILTERS = airlines.map(airline => ({
    label: airline,
    value: airline
  }))
  const SCALE_FILTERS = [
    {
      label: '0',
      value: 'noScales'
    },
    {
      label: '1',
      value: 'oneScale'
    },
    {
      label: '2',
      value: 'twoScales '
    }
  ]

  // const airlines = flights.map(flight => flight.airline_name)

  // const airlineFilter = airlines.map(airline => ({
  //   label: airline,
  //   value: airline
  // }))
  return (
    <FlexboxGrid style={{ justifyContent: 'center' }}>
      <FlexboxGrid.Item colspan={4}>
        <CheckPicker
          onChange={(value, event) => {}}
          searchable={false}
          data={SCALE_FILTERS}
          placeholder='Scales'
          block
        />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={1} />
      <FlexboxGrid.Item colspan={4}>
        <CheckPicker
          onChange={value => {}}
          searchable={false}
          data={AIRLINE_FILTERS}
          placeholder='Airline name'
          block
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default FlightFilters
