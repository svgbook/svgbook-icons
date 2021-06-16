import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.43,6A.46.46,0,0,0,6,6.47a.28.28,0,0,0,0,.09L8.1,17.45a.61.61,0,0,0,.57.55h6.66a.45.45,0,0,0,.43-.4L18,6.56A.47.47,0,0,0,17.64,6H6.43Z'
    />
    <path fill='none' d='M13.33,14.25H10.67L10,9.75h4Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.73,5.52l-.16,0H6.44a.85.85,0,0,0-.64.26,1,1,0,0,0-.3.7s0,.16,0,.19L7.6,17.53a1.11,1.11,0,0,0,1.07,1h6.67a.94.94,0,0,0,.91-.81L18.49,6.63A1,1,0,0,0,17.73,5.52Zm-7.15,4.73h2.84l-.52,3.5H11.1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.73,5.52l-.16,0H6.44a.85.85,0,0,0-.64.26,1,1,0,0,0-.3.7s0,.16,0,.19L7.6,17.53a1.11,1.11,0,0,0,1.07,1h6.67a.94.94,0,0,0,.91-.81L18.49,6.63A1,1,0,0,0,17.73,5.52Zm-7.15,4.73h2.84l-.52,3.5H11.1Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.73,5.52l-.16,0H6.44a.85.85,0,0,0-.64.26,1,1,0,0,0-.3.7s0,.16,0,.19L7.6,17.53a1.11,1.11,0,0,0,1.07,1h6.67a.94.94,0,0,0,.91-.81L18.49,6.63A1,1,0,0,0,17.73,5.52Zm-7.15,4.73h2.84l-.52,3.5H11.1Z'
    />
  </Fragment>
)

const BitBucket = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BitBucket
