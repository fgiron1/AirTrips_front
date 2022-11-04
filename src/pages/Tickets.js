import { useDispatch } from 'react-redux'
import { FlexboxGrid } from 'rsuite'
import FlightFilters from '../components/FlightFilters'
import FlightsList from '../components/FlightsList'
import { setStep } from '../reducers/stepReducer'

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
  const dispatch = useDispatch()
  dispatch(setStep(1))
  /* .filter(
    f =>
      f.origin_id === origin &&
      f.destination_id === destination &&
      new Date(f.departure_date) === new Date(departureDate)
  ) */

  // const airlines = flights.map(flight => flight.airline_name)

  // const airlineFilter = airlines.map(airline => ({
  //   label: airline,
  //   value: airline
  // }))

  return (
    <FlexboxGrid
      style={{
        width: '75vw'
      }}
    >
      <FlexboxGrid.Item colspan={4}>
        <FlightFilters />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={20}>
        <FlightsList />
      </FlexboxGrid.Item>
    </FlexboxGrid>
    // <Form
    //   style={{
    //     width: '75vw'
    //   }}
    // >
    //   {/*  */}
    //   <FlightsList />
    // </Form>
  )
}

export default Tickets
