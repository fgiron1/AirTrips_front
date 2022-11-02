/* eslint-disable no-debugger */
import { useState } from 'react'

const useField = () => {
  const [value, setvalue] = useState()

  const onChange = e => {
    setvalue(e)
  }

  return { value, onChange }
}

export { useField }
