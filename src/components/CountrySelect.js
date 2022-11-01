import { InputPicker } from 'rsuite'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner'
import { useCities } from '../hooks/useCities'

// eslint-disable-next-line react/prop-types
const CountrySelect = ({ placeholder }) => {
  const [data, loading, fetchCities] = useCities()

  return (
    <InputPicker
      data={data}
      size='lg'
      appearance='default'
      placeholder={placeholder}
      block
      onClick={fetchCities}
      renderMenu={menu => {
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
      }}
    />
  )
}

export default CountrySelect
