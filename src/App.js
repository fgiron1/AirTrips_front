import { Col, Container, Row } from 'react-bootstrap'
// import TravelInfoForm from './components/TravelInfoForm'
import './App.css'
import TravelForm from './components/TravelForm'

const App = () => {
  return (
    <Container className='mt-5'>
      <Row className='text-center mb-3'>
        <Col>
          <h2>AirTrips</h2>
        </Col>
      </Row>
      <Row className='text-center mb-2'>
        <Col>
          <h3>Choose your origin and destination</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <TravelForm />
        </Col>
      </Row>
    </Container>
  )
}

export default App
