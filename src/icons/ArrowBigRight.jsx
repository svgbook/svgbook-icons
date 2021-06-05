import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.88,10h5.26V7.67A.66.66,0,0,1,12.79,7a.67.67,0,0,1,.47.19l4.33,4.34a.64.64,0,0,1,0,.92L13.26,16.8a.67.67,0,0,1-.93,0,.68.68,0,0,1-.19-.47V14H6.88a.65.65,0,0,1-.66-.65V10.68A.65.65,0,0,1,6.88,10Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6.88,10h5.26V7.67A.66.66,0,0,1,12.79,7a.67.67,0,0,1,.47.19l4.33,4.34a.64.64,0,0,1,0,.92L13.26,16.8a.67.67,0,0,1-.93,0,.68.68,0,0,1-.19-.47V14H6.88a.65.65,0,0,1-.66-.65V10.68A.65.65,0,0,1,6.88,10Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6.88,10h5.26V7.67A.66.66,0,0,1,12.79,7a.67.67,0,0,1,.47.19l4.33,4.34a.64.64,0,0,1,0,.92L13.26,16.8a.67.67,0,0,1-.93,0,.68.68,0,0,1-.19-.47V14H6.88a.65.65,0,0,1-.66-.65V10.68A.65.65,0,0,1,6.88,10Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.88,10h5.26V7.67A.66.66,0,0,1,12.79,7a.67.67,0,0,1,.47.19l4.33,4.34a.64.64,0,0,1,0,.92L13.26,16.8a.67.67,0,0,1-.93,0,.68.68,0,0,1-.19-.47V14H6.88a.65.65,0,0,1-.66-.65V10.68A.65.65,0,0,1,6.88,10Z'
    />
  </Fragment>
)

const ArrowBigRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBigRight
