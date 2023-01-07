import { useState } from 'react'

const useCarrousel = data => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedData, setSelectedData] = useState(data[0])
  const [loaded, setLoaded] = useState(false)

  const previous = () => {
    setLoaded(false)
    setTimeout(() => {
      const condition = selectedIndex > 0
      const nextIndex = condition ? selectedIndex - 1 : data.length - 1
      setSelectedData(data[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const next = () => {
    setLoaded(false)
    setTimeout(() => {
      const condition = selectedIndex < data.length - 1
      const nextIndex = condition ? selectedIndex + 1 : 0
      setSelectedData(data[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  return {
    selectedIndex,
    setSelectedIndex,
    selectedData,
    setSelectedData,
    previous,
    next,
    setLoaded,
    loaded
  }
}

export default useCarrousel
