const useFinalValue = (first, second, defaultV) => {
  if (first) return first
  if (second) return second
  return defaultV
}

export default useFinalValue
