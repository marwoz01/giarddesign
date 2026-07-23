import { useEffect, useState } from 'react'

const GRID_COLUMNS = 12

function GridOverlay() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.key.toLowerCase() === 'g') {
        event.preventDefault()
        setVisible((current) => !current)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!import.meta.env.DEV || !visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-9999">
      <div className="page-container page-grid h-full">
        {Array.from({ length: GRID_COLUMNS }, (_, index) => (
          <div key={index} className="h-full bg-[#ff0000]/10" />
        ))}
      </div>
    </div>
  )
}

export default GridOverlay
