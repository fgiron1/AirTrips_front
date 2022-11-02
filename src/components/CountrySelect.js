/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { InputPicker, Loader } from 'rsuite'
import { useCities } from '../hooks/useCities'

// const data = [
//   'Eugenia',
//   'Bryan',
//   'Linda',
//   'Nancy',
//   'Lloyd',
//   'Alice',
//   'Julia',
//   'Albert',
//   'Louisa',
//   'Lester',
//   'Lola',
//   'Lydia',
//   'Hal',
//   'Hannah',
//   'Harriet',
//   'Hattie',
//   'Hazel',
//   'Hilda'
// ].map(item => ({ label: item, value: item }))

const CountrySelect = ({ ...props }) => {
  const [cities, loading, fetchCities] = useCities()

  useEffect(() => {
    fetchCities()
  }, [])

  return (
    <InputPicker
      {...props}
      data={cities}
      block
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
              <Loader /> Loading...
            </p>
          )
        }
        return menu
      }}
    />
  )
}

export default CountrySelect
