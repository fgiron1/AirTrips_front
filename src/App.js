import { Container, Header, Content, FlexboxGrid } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import './App.css'
import TravelForm from './components/TravelForm'

const App = () => {
  return (
    <Container>
      <Header style={{ marginTop: '10px', textAlign: 'center' }}>
        <h1>AirTrips</h1>
      </Header>
      <Content>
        <FlexboxGrid justify='center'>
          <FlexboxGridItem>
            <TravelForm />
          </FlexboxGridItem>
        </FlexboxGrid>
      </Content>
    </Container>
  )
}

export default App
