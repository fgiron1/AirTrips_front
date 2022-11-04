import axios from 'axios'
import { useState } from 'react'

const useCities = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCities = () => {
    setLoading(true)

    axios.get('http://localhost:8080/api/v1/flight/airport').then(res => {
      const airports = res.data

      setCities(
        airports.map(airport => ({
          label: airport.city,
          value: airport.id
        }))
      )
    })

    setLoading(false)
  }

  return [cities, loading, fetchCities]
}

export { useCities }
