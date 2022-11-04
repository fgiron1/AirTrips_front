import React from 'react'
import { List } from 'rsuite'
import { PropTypes } from 'prop-types'

const TicketList = ({ children, ...props }) => {
  return <List hover>{children}</List>
}

TicketList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  data: PropTypes.array
}

export default TicketList
