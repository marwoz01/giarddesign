const AXIS_CLASSES = {
  x: {
    exit: 'group-hover:translate-x-[150%]',
    enter: '-translate-x-[150%] group-hover:translate-x-0',
  },
  y: {
    exit: 'group-hover:translate-y-[150%]',
    enter: '-translate-y-[150%] group-hover:translate-y-0',
  },
}

function HoverSlideIcon({ icon: Icon, axis = 'x', className = 'size-4' }) {
  const { exit, enter } = AXIS_CLASSES[axis]

  return (
    <span
      aria-hidden="true"
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <Icon
        className={`absolute inset-0 transition-transform duration-300 ease-out ${exit}`}
      />
      <Icon
        className={`absolute inset-0 transition-transform duration-300 ease-out ${enter}`}
      />
    </span>
  )
}

export default HoverSlideIcon
