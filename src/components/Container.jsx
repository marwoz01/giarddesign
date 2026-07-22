function Container({ as: Tag = 'div', grid = false, className = '', children }) {
  const classes = ['page-container', grid && 'page-grid', className]
    .filter(Boolean)
    .join(' ')

  return <Tag className={classes}>{children}</Tag>
}

export default Container
