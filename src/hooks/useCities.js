// import axios from 'axios'
import { useState } from 'react'
import { AIRPORTS } from '../data/Airports'

const useCities = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCities = () => {
    setLoading(true)

    setCities(
      AIRPORTS.map(airport => {
        // console.log(airport)
        return {
          label: airport.country,
          value: airport.id
        }
      })
    )

    setLoading(false)
    // axios.get('https://restcountries.com/v3.1/all').then(res => {
    //   const cities = Object.values(res.data).slice(0, 100)
    //   setCities(
    //     cities.map(city => ({
    //       label: city.name.official,
    //       value: city.name.common
    //     }))
    //   )
    //   setLoading(false)
    // })
  }

  return [cities, loading, fetchCities]
}

export { useCities }
