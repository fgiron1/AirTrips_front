import axios from 'axios'
import { useState } from 'react'

const useCities = () => {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCities = () => {
    setLoading(true)

    axios.get('https://countriesnow.space/api/v0.1/countries').then(res => {
      const citiesRes = res.data.data
      setCities(
        citiesRes.map(city => ({
          label: city.country,
          value: city.country
        }))
      )
      setLoading(false)
    })
  }

  return [cities, loading, fetchCities]
}

export { useCities }
