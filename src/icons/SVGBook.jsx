import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polygon fill='none' points='17.64 9.16 19 10.52 17.64 10.52 17.64 9.16' />
    <path
      fill='none'
      d='M17.64,9.25a2.07,2.07,0,1,0-4.13,0v3.27h2.06a2.07,2.07,0,0,1,2.07,2.06h0Z'
    />
    <path
      fill='none'
      d='M17.64,14.58a2.07,2.07,0,0,0-2.07-2.06H12.3a2.07,2.07,0,0,1,2.07,2.06,2,2,0,0,1-.43,1.25,2.08,2.08,0,0,1-1.64.82h3.27a2.07,2.07,0,0,0,2.07-2.07Z'
    />
    <path
      fill='none'
      d='M5,16.65h7.3a2.07,2.07,0,1,0,0-4.13H5a2.09,2.09,0,0,1,1.46.6l.15.17a2,2,0,0,1,.46,1.29A2.07,2.07,0,0,1,5,16.65Z'
    />
    <circle cx='15.83' cy='9.6' r='0.2' />
    <line x1='8.47' y1='13.95' x2='12.6' y2='13.95' />
    <line x1='8.4' y1='15.25' x2='12.53' y2='15.25' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M19.35,10.17,18.12,8.94a2.57,2.57,0,0,0-5.11.3V12H5a.5.5,0,0,0,0,1,1.57,1.57,0,0,1,0,3.13.5.5,0,0,0,0,1H15.57a2.57,2.57,0,0,0,2.57-2.57V11H19A.5.5,0,0,0,19.35,10.17ZM15.83,8.9a.7.7,0,0,1,0,1.4A.7.7,0,0,1,15.83,8.9Zm-2,5.95a1.58,1.58,0,0,1-1.54,1.3H7A2.57,2.57,0,0,0,7,13H12.3A1.56,1.56,0,0,1,13.84,14.85Zm1.73,1.3H14.33a2.55,2.55,0,0,0,0-3.13h1.24A1.57,1.57,0,0,1,15.57,16.15Z'
    />
    <path
      stroke='none'
      d='M12.6,14.45H8.47a.5.5,0,0,1,0-1H12.6A.5.5,0,0,1,12.6,14.45Z'
    />
    <path
      stroke='none'
      d='M12.53,15.75H8.4a.5.5,0,0,1,0-1h4.13A.5.5,0,0,1,12.53,15.75Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polygon fill='none' points='17.64 9.16 19 10.52 17.64 10.52 17.64 9.16' />
    <path
      fillOpacity='.2'
      d='M17.64,9.25a2.07,2.07,0,1,0-4.13,0v3.27h2.06a2.07,2.07,0,0,1,2.07,2.06h0Z'
    />
    <path
      fillOpacity='.2'
      d='M17.64,14.58a2.07,2.07,0,0,0-2.07-2.06H12.3a2.07,2.07,0,0,1,2.07,2.06,2,2,0,0,1-.43,1.25,2.08,2.08,0,0,1-1.64.82h3.27a2.07,2.07,0,0,0,2.07-2.07Z'
    />
    <path
      fillOpacity='.2'
      d='M5,16.65h7.3a2.07,2.07,0,1,0,0-4.13H5a2.09,2.09,0,0,1,1.46.6l.15.17a2,2,0,0,1,.46,1.29A2.07,2.07,0,0,1,5,16.65Z'
    />
    <circle cx='15.83' cy='9.6' r='0.2' />
    <line x1='8.47' y1='13.95' x2='12.6' y2='13.95' />
    <line x1='8.4' y1='15.25' x2='12.53' y2='15.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polygon fill='none' points='17.64 9.16 19 10.52 17.64 10.52 17.64 9.16' />
    <path
      fill={secondaryColor}
      d='M17.64,9.25a2.07,2.07,0,1,0-4.13,0v3.27h2.06a2.07,2.07,0,0,1,2.07,2.06h0Z'
    />
    <path
      fill={secondaryColor}
      d='M17.64,14.58a2.07,2.07,0,0,0-2.07-2.06H12.3a2.07,2.07,0,0,1,2.07,2.06,2,2,0,0,1-.43,1.25,2.08,2.08,0,0,1-1.64.82h3.27a2.07,2.07,0,0,0,2.07-2.07Z'
    />
    <path
      fill={secondaryColor}
      d='M5,16.65h7.3a2.07,2.07,0,1,0,0-4.13H5a2.09,2.09,0,0,1,1.46.6l.15.17a2,2,0,0,1,.46,1.29A2.07,2.07,0,0,1,5,16.65Z'
    />
    <circle cx='15.83' cy='9.6' r='0.2' />
    <line x1='8.47' y1='13.95' x2='12.6' y2='13.95' />
    <line x1='8.4' y1='15.25' x2='12.53' y2='15.25' />
  </Fragment>
)

const SVGBook = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default SVGBook
