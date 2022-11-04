import React from 'react'
import { PropTypes } from 'prop-types'
import { Button, FlexboxGrid, List } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux'
import { setOutboundTicket } from '../reducers/ticketsReducer'

const toTimeString = date => {
  const dateString = date.toTimeString().split(':')

  const time = `${dateString[0]}:${dateString[1]}`

  return time
}

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'fit-content',
  textAlign: 'center',
  fontSize: '16px'
}

// const slimText = {
//   fontSize: '0.666em',
//   color: '#97969B',
//   fontWeight: 'lighter',
//   paddingBottom: 5
// }

// const titleStyle = {
//   paddingBottom: 5,
//   whiteSpace: 'nowrap',
//   fontWeight: 500
// }

// const dataStyle = {
//   fontSize: '1.2em',
//   fontWeight: 500
// }

const TicketItem = ({ flight, ...props }) => {
  const dispatch = useDispatch()
  const { tickets, returnDate } = useSelector(s => s)

  const handleClick = event => {
    if (tickets.outboundTicket === null) {
      dispatch(setOutboundTicket(flight.id))
    } else {
      if (returnDate === null) {
        // console.log('a')
      }
    }
  }

  /**
   * {
    id: '29a7d484-89ec-400c-a181-89b82ba1b0b2',
    origin_id: '8ecd3a95-d065-4ddc-88d8-129ff49e2172',
    destination_id: 'cd7ff342-18a5-4d9b-bb82-b6060436fc18',
    layover_id: null,
    airline_name: 'Nisi Sem Semper LLP',
    departure_date: '2022-01-10T07:33:53.000Z',
    arrival_date: '2022-09-24T20:20:49.000Z',
    distance: 390,
    max_capacity: 70,
    actual_capacity: 39
  }
   */

  return (
    <List.Item style={{ padding: '10px' }} className='ticket'>
      <FlexboxGrid
        className='ticket-data'
        style={{
          height: '50px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FlexboxGrid.Item colspan={22}>
          <FlexboxGrid style={styleCenter}>
            <FlexboxGrid.Item colspan={8}>{flight.origin_id}</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>
              {toTimeString(new Date(flight.departure_date))}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>{'------>'}</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>
              {toTimeString(new Date(flight.arrival_date))}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              {flight.destination_id}
            </FlexboxGrid.Item>
            {/* <FlexboxGrid.Item>{`Layovers: ${flight.layover_id}`}</FlexboxGrid.Item> */}
          </FlexboxGrid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={2}>
          <FlexboxGrid
            className='ticket-button'
            style={{
              height: '50px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              appearance='primary'
              value={flight.id}
              onClick={handleClick}
            >
              Select
            </Button>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>

      {/* <FlexboxGrid.Item colspan={2}> */}

      {/* </FlexboxGrid.Item> */}
    </List.Item>
  )
}

TicketItem.propTypes = {
  flight: PropTypes.object
}

export default TicketItem
