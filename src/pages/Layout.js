import React from 'react'
import './Layout.css'
import { Container, Content, FlexboxGrid, Header/* , Steps */ } from 'rsuite'
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
            {/* <Steps current={1}>
              <Steps.Item title='Finished' />
              <Steps.Item title='In progress' />
              <Steps.Item title='Waiting' />
              <Steps.Item title='Waiting' />
            </Steps> */}
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
