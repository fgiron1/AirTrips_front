import { useState } from 'react'

const useCities = ({ type, value }) => {
  const [field, setField] = useState(value)

  const handleChange = e => {
    e.preventDefault()

    setField(e.target.value)
  }

  return { field, type, value, handleChange }
}

export { useCities }
