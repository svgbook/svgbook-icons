import React, { Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line
      x1='72'
      y1='216'
      x2='216'
      y2='216'
      stroke={color}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
    <path
      d='M26.75225,80H44l20,24H96L83.50994,66.52982A8,8,0,0,1,91.09941,56H108l44,48h56a32,32,0,0,1,32,32v24H63.809a32,32,0,0,1-30.65044-22.80487L19.08963,90.29878A8,8,0,0,1,26.75225,80Z'
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M224,216a8.00008,8.00008,0,0,1-8,8H72a8,8,0,0,1,0-16H216A8.00008,8.00008,0,0,1,224,216ZM208,100H153.75977L110.94824,53.29688A3.99911,3.99911,0,0,0,108,52H91.09961A12.00015,12.00015,0,0,0,79.71484,67.79492L90.4502,100H65.87305L47.07324,77.43945A4.001,4.001,0,0,0,44,76H26.752A11.99986,11.99986,0,0,0,15.25879,91.44824l14.06836,46.89649A35.77737,35.77737,0,0,0,63.80859,164H240a4.0002,4.0002,0,0,0,4-4V136A36.04061,36.04061,0,0,0,208,100Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      d='M26.75225,80H44l20,24H96L83.50994,66.52982A8,8,0,0,1,91.09941,56H108l44,48h56a32,32,0,0,1,32,32v24H63.809a32,32,0,0,1-30.65044-22.80487L19.08963,90.29878A8,8,0,0,1,26.75225,80Z'
      opacity='0.2'
    />
    <line
      x1='72'
      y1='216'
      x2='216'
      y2='216'
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
    />
    <path
      d='M26.75225,80H44l20,24H96L83.50994,66.52982A8,8,0,0,1,91.09941,56H108l44,48h56a32,32,0,0,1,32,32v24H63.809a32,32,0,0,1-30.65044-22.80487L19.08963,90.29878A8,8,0,0,1,26.75225,80Z'
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
    />
  </Fragment>
)

const AirplaneInFlight = (props) => {
  return <IconBase {...props} renderPath={renderPath} />
}

export default AirplaneInFlight