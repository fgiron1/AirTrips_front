import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { DateRangePicker, DatePicker } from 'rsuite'
import 'rsuite/dist/rsuite.css'
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'
import addDays from 'date-fns/addDays'
import startOfMonth from 'date-fns/startOfMonth'
import { useState } from 'react'
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
    value: [startOfMonth(new Date()), new Date()],
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

const TravelForm = () => {
  const [oneWayFlight, setOneWayFlight] = useState(false)

  const handleChange = e => {
    e.persist()

    e.target.value === 'true' ? setOneWayFlight(true) : setOneWayFlight(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        margin: '0 auto',
        width: '75vw',
        borderRadius: '5px',
        padding: '10px'
      }}
      className='shadow'
    >
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Row className='mb-3 mt-2'>
          <Col>
            <Form.Group className='' controlId='oneWayFlight'>
              <Form.Check
                onChange={handleChange}
                value='false'
                inline
                label='Round trip'
                name='flightType'
                type='radio'
              />
              <Form.Check
                onChange={handleChange}
                value='true'
                inline
                label='One way'
                name='flightType'
                type='radio'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <CountrySelect placeholder='Origin' />
            {/* <Form.Control id='origin' placeholder='Origin' /> */}
          </Col>
          <Col>
            {/* <Form.Group className='mb-3' controlId='destination'>
              <Form.FloatingLabel label='Destination'>
                <Form.Control id='destination' placeholder='Destination' />
              </Form.FloatingLabel>
            </Form.Group> */}
            <CountrySelect placeholder='Destination' />
          </Col>
          <Col>
            <Form.Group
              className='mb-3'
              controlId='departure'
              style={{ display: 'none' }}
            >
              <Form.FloatingLabel label='Departure'>
                <Form.Control id='departure' placeholder='Departure' />
              </Form.FloatingLabel>
            </Form.Group>

            {// eslint-disable-next-line multiline-ternary
            oneWayFlight ? (
              <DatePicker
                size='lg'
                appearance='default'
                placeholder='YYYY-MM-DD'
                block
              />
            ) : (
              <DateRangePicker
                size='lg'
                appearance='default'
                placeholder='YYYY-MM-DD ~ YYY-MM-DD'
                ranges={predefinedRanges}
                block
              />
            )}
          </Col>
        </Row>
        {/* <Row className='mb-3'>
          <Col>
          <Form.Group controlId='filters'>
              <Form.Check
                value='false'
                inline
                label='Direct fly'
                name='filters'
                type='switch'
              />
              <Form.Check
                onChange={handleChange}
                value='true'
                inline
                label='Luggage allowed'
                name='filters'
                type='switch'
              />
            </Form.Group>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Button type='submit'>
              Search <AngleRightIcon />
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default TravelForm
