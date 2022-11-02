/* eslint-disable no-debugger */
/* eslint-disable indent */
import { useState } from 'react'
import { useField } from '../hooks/useField'
import {
  Button,
  Col,
  DatePicker,
  DateRangePicker,
  Form,
  Schema,
  Grid,
  Radio,
  RadioGroup,
  Row
} from 'rsuite'
import { startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth } from 'date-fns'
import CountrySelect from './CountrySelect'
import AngleRightIcon from '@rsuite/icons/legacy/ArrowRightLine'

const predefinedRanges = [
  {
    label: 'Today',
    value: [new Date(), new Date()],
    appearance: 'default'
  },
  {
    label: 'This week',
    value: [startOfWeek(new Date()), endOfWeek(new Date())],
    appearance: 'default'
  },
  {
    label: 'This month',
    value: [startOfMonth(new Date()), endOfMonth(new Date())],
    appearance: 'default'
  },
  {
    label: 'Next week',
    closeOverlay: false,
    value: value => {
      const [start = new Date()] = value || []
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
      ]
    },
    appearance: 'default'
  }
]

const model = Schema.Model({
  origin: Schema.Types.StringType().isRequired('Origin is required.'),
  destination: Schema.Types.StringType().isRequired('Destination is required.')
})

const TravelForm = () => {
  const [oneWayFlight, setOneWayFlight] = useState(false)
  const origin = useField()
  const destination = useField()
  const [date, setDate] = useState()

  const handleSubmit = e => {
    console.log({ origin, destination, date })
  }

  const handleTypeOfFlightChange = val => {
    if (date !== undefined) {
      if (Array.isArray(date)) {
        setDate(date[0])
      } else {
        setDate([date, new Date()])
      }
    }
    setOneWayFlight(val)
  }

  const handleDateChange = val => {
    setDate(val)
  }

  return (
    <Form
      layout='horizontal'
      model={model}
      style={{
        marginTop: '50px',
        width: '75vw',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)'
      }}
      onSubmit={handleSubmit}
    >
      <Grid fluid>
        {/* Radio Buttons */}
        <Row>
          <RadioGroup name='oneWayFlight' inline>
            <Radio value={false} onChange={handleTypeOfFlightChange}>
              Round trip
            </Radio>
            <Radio value={true} onChange={handleTypeOfFlightChange}>
              One way
            </Radio>
          </RadioGroup>
        </Row>
        {/* Flights data */}
        <Row>
          <Col xs={8}>
            <Form.Group controlId='origin'>
              <CountrySelect size='lg' placeholder='Origin' {...origin} />
            </Form.Group>
          </Col>
          <Col xs={8}>
            <Form.Group controlId='destination'>
              <CountrySelect
                size='lg'
                placeholder='Destination'
                {...destination}
              />
            </Form.Group>
          </Col>
          <Col xs={8}>
            <Form.Group controlId='date'>
              {// eslint-disable-next-line multiline-ternary
              oneWayFlight ? (
                <DatePicker
                  value={date}
                  onChange={handleDateChange}
                  size='lg'
                  appearance='default'
                  placeholder='YYYY-MM-DD'
                  block
                />
              ) : (
                <DateRangePicker
                  value={date}
                  onChange={handleDateChange}
                  size='lg'
                  appearance='default'
                  placeholder='YYYY-MM-DD ~ YYY-MM-DD'
                  ranges={predefinedRanges}
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
