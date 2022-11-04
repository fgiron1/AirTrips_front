import './TravelForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, Grid, Radio, RadioGroup, Row } from 'rsuite'
import CountryPicker from './CountryPicker'
import AngleRightIcon from '@rsuite/icons/legacy/ArrowRightLine'
import { CALENDAR_PREDEFINED_RANGES } from '../data/CalendarPredefinedRanges'
import CustomDatePicker from './CustomDatePicker'
import CustomDateRangePicker from './CustomDateRangePicker'
import { setDepartureDate } from '../reducers/departureDateReducer'
import { resetReturnDate, setReturnDate } from '../reducers/returnDateReducer'
import { setOrigin } from '../reducers/originReducer'
import { setDestination } from '../reducers/destinationReducer'

const TravelForm = ({ ...props }) => {
  const [oneWayFlight, setOneWayFlight] = useState(false)

  const dispatch = useDispatch()
  const { /* origin, */ destination, departureDate, returnDate } = useSelector(
    s => s
  )

  const handleFlightTypeChange = value => {
    if (returnDate === '') {
      dispatch(setReturnDate(departureDate))
    }
    setOneWayFlight(value)
  }

  const handleOriginChange = value => {
    console.log(value)
    dispatch(setOrigin(value))
  }

  const handleDestinationChange = newDestination => {
    dispatch(setDestination(newDestination))
  }

  const handleDateChange = newDate => {
    if (Array.isArray(newDate)) {
      dispatch(setDepartureDate(newDate[0].toISOString()))
      dispatch(setReturnDate(newDate[1].toISOString()))
    } else {
      dispatch(setDepartureDate(newDate.toISOString()))
      dispatch(resetReturnDate())
    }
  }

  return (
    <Form {...props}>
      <Grid fluid>
        {/* Radio Buttons */}
        <Row>
          <RadioGroup name='oneWayFlight' inline>
            <Radio value={false} onChange={handleFlightTypeChange}>
              Round trip
            </Radio>
            <Radio value={true} onChange={handleFlightTypeChange}>
              One way
            </Radio>
          </RadioGroup>
        </Row>
        {/* Flights data */}
        <Row>
          <Col xs={8}>
            <CountryPicker
              onChange={handleOriginChange}
              controlId='origin'
              size='lg'
              placeholder='Origin'
              block
            />
          </Col>
          <Col xs={8}>
            <CountryPicker
              onSelect={handleDestinationChange}
              controlId='destination'
              size='lg'
              placeholder='Destination'
              block
              value={destination}
            />
          </Col>
          <Col xs={8}>
            <Form.Group controlId='date'>
              {// eslint-disable-next-line multiline-ternary
              oneWayFlight ? (
                <CustomDatePicker
                  value={[departureDate, returnDate]}
                  onChange={handleDateChange}
                  size='lg'
                  appearance='default'
                  placeholder='YYYY-MM-DD'
                  block={true}
                />
              ) : (
                <CustomDateRangePicker
                  value={[departureDate, returnDate]}
                  onChange={handleDateChange}
                  size='lg'
                  appearance='default'
                  placeholder='YYYY-MM-DD ~ YYY-MM-DD'
                  ranges={CALENDAR_PREDEFINED_RANGES}
                  block
                />
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type='submit' appearance='primary'>
              Search <AngleRightIcon />
            </Button>
          </Col>
        </Row>
      </Grid>
    </Form>
  )
}

export default TravelForm
