/* eslint-disable no-unused-vars */
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

  return (
    <FlexboxGrid
      style={{
        width: '75vw'
      }}
    >
      <FlexboxGrid.Item colspan={24} style={{ marginBottom: '20px' }}>
        <FlightFilters />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>
        <FlightsList />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default Tickets
