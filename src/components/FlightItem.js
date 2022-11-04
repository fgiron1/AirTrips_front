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

const FlightItem = ({ flight, ...props }) => {
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
            <FlexboxGrid.Item colspan={8}>
              {console.log(flight)}
              {flight.origin_id.city}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>
              {toTimeString(new Date(flight.departureDate))}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>{'------>'}</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={2}>
              {toTimeString(new Date(flight.arrivalDate))}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}>
              {flight.destination_id.city}
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

FlightItem.propTypes = {
  flight: PropTypes.object
}

export default FlightItem
