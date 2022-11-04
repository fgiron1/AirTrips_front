import React from 'react'
import { Form /* , Sidebar */ } from 'rsuite'
import TicketItem from '../components/TicketItem'
import TicketList from '../components/TicketList'
import { FLIGHTS } from '../data/Flights'

/*
    <Form>
        <Grid>
            <TicketFilter />
            <TicketList>
                {Tickets.map(t => <TicketItem ticket={t} key={t.id}/>)}
            </TicketList>
        </Grid>
    </Form>
    */

/** FILTERS
 * Luggage
 * Scales
 * Aeroline name
 * Hour -> Morning (0 - 12), Evening (12 - 0)
 */

const Tickets = () => {
  const flights = FLIGHTS /* .filter(
    f =>
      f.origin_id === origin &&
      f.destination_id === destination &&
      new Date(f.departure_date) === new Date(departureDate)
  ) */

  // const scaleFilters = [
  //   {
  //     label: '0',
  //     value: 'noScales'
  //   },
  //   {
  //     label: '1',
  //     value: 'oneScale'
  //   },
  //   {
  //     label: '2',
  //     value: 'twoScales '
  //   }
  // ]

  // const airlines = flights.map(flight => flight.airline_name)

  // const airlineFilter = airlines.map(airline => ({
  //   label: airline,
  //   value: airline
  // }))

  return (
    <Form
      style={{
        borderRadius: '10px',
        width: '75vw',
        minHeight: '80vh',
        boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* <Sidebar style={{ marginRight: '20px' }}>
          <CheckPicker
            onChange={(value, event) => {
              // console.log(value)
            }}
            searchable={false}
            data={scaleFilters}
            placeholder='Scales'
            block
          />
          <CheckPicker
            onChange={value => {
              // console.log(value)
            }}
            searchable={false}
            data={airlineFilter}
            placeholder='Airline name'
            block
          />
        </Sidebar> */}
      {/* <Container> */}
        <TicketList>
          {flights.map(flight => (
            <TicketItem key={flight.id} flight={flight} />
          ))}
        </TicketList>
      {/* </Container> */}
    </Form>
  )
}

export default Tickets
