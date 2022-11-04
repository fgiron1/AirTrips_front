import React from 'react'
import './Layout.css'
import { Container, Content, FlexboxGrid, Header, Steps } from 'rsuite'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container>
      <Header style={{ marginTop: '10px', textAlign: 'center' }}>
        <h1>AirTrips</h1>
      </Header>
      <Content>
        <FlexboxGrid justify='center'>
          <FlexboxGrid.Item colspan={20} style={{ marginBottom: '50px' }}>
            <Steps current={0}>
              <Steps.Item title='Flight' />
              <Steps.Item title='Tickets' />
              <Steps.Item title='Passengers' />
              <Steps.Item title='Overview' />
            </Steps>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item>
            <Outlet />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  )
}

export default Layout
