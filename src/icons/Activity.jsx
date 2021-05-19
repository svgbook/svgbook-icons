import React, { Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline
      fill='none'
      points='1.76 12.39 4.91 12.39 8.85 3.73 15.15 20.27 19.09 12.39 22.24 12.39'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15.15,20.77h0a.51.51,0,0,1-.45-.32L8.81,5,5.36,12.6a.5.5,0,0,1-.45.3H1.76a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H4.59l3.8-8.38a.47.47,0,0,1,.47-.29.5.5,0,0,1,.46.32L15.21,19l3.43-6.86a.5.5,0,0,1,.45-.27h3.15a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H19.4l-3.8,7.6A.5.5,0,0,1,15.15,20.77Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      d='M15.1,21.27a1,1,0,0,1-.88-.64L8.77,6.32,5.82,12.81a1,1,0,0,1-.91.59H1.76a1,1,0,0,1,0-2h2.5L7.94,3.31a1,1,0,0,1,.87-.58h.11a1,1,0,0,1,.86.64l5.5,14.42L18.2,12a1,1,0,0,1,.89-.55h3.15a1,1,0,0,1,0,2H19.71l-3.66,7.32a1,1,0,0,1-.9.55Z'
      opacity='.2'
    />
    <path
      d='M15.1,21.27a1,1,0,0,1-.88-.64L8.77,6.32,5.82,12.81a1,1,0,0,1-.91.59H1.76a1,1,0,0,1,0-2h2.5L7.94,3.31a1,1,0,0,1,.87-.58h.11a1,1,0,0,1,.86.64l5.5,14.42L18.2,12a1,1,0,0,1,.89-.55h3.15a1,1,0,0,1,0,2H19.71l-3.66,7.32a1,1,0,0,1-.9.55Z'
      strokeWidth='1'
    />
  </Fragment>
)

const Activity = (props) => {
  return <IconBase {...props} renderPath={renderPath} />
}

export default Activity
