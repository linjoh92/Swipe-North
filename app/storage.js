export function saveToStorage(key, value) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

export function getFromStorage(key) {
  if (typeof window !== 'undefined') {
    const storedValue = window.localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null
  }
  return null
}

if (typeof window !== 'undefined') {
  // Use client-side code here
}
