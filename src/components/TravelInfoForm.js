import './TravelInfoForm.css'
import CountryPicker from './CountryPicker'
import AngleRightIcon from '@rsuite/icons/legacy/ArrowRightLine'
import {
  Button,
  Col,
  DatePicker,
  DateRangePicker,
  FlexboxGrid,
  Form,
  Grid,
  Radio,
  RadioGroup,
  Row
} from 'rsuite'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {
  resetReturnDate,
  setDepartureDate,
  setReturnDate
} from '../reducers/datesReducer'
import { setOrigin } from '../reducers/originReducer'
import { setDestination } from '../reducers/destinationReducer'
import { CALENDAR_PREDEFINED_RANGES } from '../data/CalendarPredefinedRanges'

const TravelInfoForm = props => {
  const [oneWayFlight, setOneWayFlight] = useState(false)

  const dispatch = useDispatch()

  const handleDateChange = value => {
    if (Array.isArray(value)) {
      dispatch(setDepartureDate(value[0].toISOString()))
      dispatch(setReturnDate(value[1].toISOString()))
    } else {
      dispatch(setDepartureDate(value.toISOString()))
      dispatch(resetReturnDate())
    }
  }

  return (
    <Form {...props}>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={24}>
          <RadioGroup name='oneWayFlight' inline>
            <Radio value={false} onChange={value => setOneWayFlight(value)} id='round-trip-radio'>
              Round trip
            </Radio>
            <Radio value={true} onChange={value => setOneWayFlight(value)} id='one-way-radio'>
              One way
            </Radio>
          </RadioGroup>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <Grid fluid>
            <Row>
              <Col xs={8}>
                <CountryPicker
                  onChange={value => dispatch(setOrigin(value))}
                  controlId='origin'
                  size='lg'
                  placeholder='Origin'
                  id='origin-input'
                  block
                />
              </Col>
              <Col xs={8}>
                <CountryPicker
                  onSelect={value => dispatch(setDestination(value))}
                  controlId='destination'
                  size='lg'
                  placeholder='Destination'
                  id='destination-id'
                  block
                />
              </Col>
              <Col xs={8}>
                {// eslint-disable-next-line multiline-ternary
                oneWayFlight ? (
                  <DatePicker
                  id='date-picker'
                    onChange={handleDateChange}
                    cleanable={false}
                    size='lg'
                    appearance='default'
                    placeholder='YYYY-MM-DD'
                    block={true}
                  />
                ) : (
                  <DateRangePicker
                  id='date-range-picker'
                    onChange={handleDateChange}
                    cleanable={false}
                    size='lg'
                    appearance='default'
                    placeholder='YYYY-MM-DD ~ YYY-MM-DD'
                    ranges={CALENDAR_PREDEFINED_RANGES}
                    block
                  />
                )}
              </Col>
            </Row>
          </Grid>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24}>
          <Button type='submit' appearance='primary' id='flight-data-submit'>
            Search <AngleRightIcon />
          </Button>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Form>
  )
}

export default TravelInfoForm
