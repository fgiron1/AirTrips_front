import React from 'react'
import { CheckPicker, Sidebar } from 'rsuite'

const scaleFilters = [
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

const FlightFilters = () => {
  return (
    <Sidebar style={{ marginRight: '20px' }}>
      <CheckPicker
        onChange={(value, event) => {}}
        searchable={false}
        data={scaleFilters}
        placeholder='Scales'
        block
      />
      <CheckPicker
        onChange={value => {}}
        searchable={false}
        data={airlineFilter}
        placeholder='Airline name'
        block
      />
    </Sidebar>
  )
}

export default FlightFilters
