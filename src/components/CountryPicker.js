import { PropTypes } from 'prop-types'
import { useEffect } from 'react'
import { Form, InputPicker } from 'rsuite'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner'

import { useCities } from '../hooks/useCities'

const CountryPicker = ({ controlId, ...props }) => {
  const [cities, loading, fetchCities] = useCities()

  useEffect(() => {
    fetchCities()
  }, [])

  const renderMenu = menu => {
    if (loading) {
      return (
        <p
          style={{
            padding: 10,
            color: '#999',
            textAlign: 'center'
          }}
        >
          <SpinnerIcon spin /> Loading...
        </p>
      )
    }
    return menu
  }

  return (
    <Form.Group controlId={controlId}>
      <InputPicker
        {...props}
        onOpen={fetchCities}
        onSearch={fetchCities}
        data={cities}
        renderMenu={renderMenu}
        cleanable={false}
      />
      {/* <SelectPicker
        cleanable={false}
        {...props}
        data={cities}
        // onOpen={fetchCities}
        // onSearch={fetchCities}
        renderMenu={renderMenu}
      /> */}
    </Form.Group>
  )
}

CountryPicker.propTypes = {
  controlId: PropTypes.string
}

export default CountryPicker
