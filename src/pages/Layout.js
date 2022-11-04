import React from 'react'
import './Layout.css'
import { Container, Content, FlexboxGrid, Header, Steps } from 'rsuite'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
  const { step } = useSelector(s => s)
  return (
    <Container>
      <Header style={{ marginTop: '10px', textAlign: 'center' }}>
        <h1>AirTrips</h1>
      </Header>
      <Content>
        <FlexboxGrid justify='center'>
          <FlexboxGrid.Item colspan={20} style={{ marginBottom: '50px' }}>
            <Steps current={step}>
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
