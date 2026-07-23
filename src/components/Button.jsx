const BASE =
  'inline-flex items-center gap-2 rounded-full px-6 text-body transition duration-200'

const VARIANTS = {
  filled: 'pt-3 pb-3.5 bg-brand text-cream hover:brightness-95',
  filledLight: 'pt-2.5 pb-3 bg-cream text-brand hover:brightness-95',
  outline: 'pt-3 pb-3.5 border border-brand text-brand hover:bg-brand/5',
  outlineLight: 'pt-3 pb-3.5 border border-cream text-cream hover:bg-cream/10',
  outlineDark: 'pt-3 pb-3.5 border border-ink text-ink hover:bg-ink/5',
}

function Button({ href, variant = 'filled', className = '', children, ...props }) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button
