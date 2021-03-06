import React, { useState } from 'react'
import styled from 'styled-components'

import * as AllIcons from 'svgbook-icons'
import { IconProvider } from 'svgbook-icons'

const result = Object.keys(AllIcons).reverse()

const availableDesigns = ['outline', 'fill', 'duotone', 'color']

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
`
const IconItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-width: 175px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  > svg {
    width: 40%;
    height: auto;
  }
  > span {
    font-size: 12px;
  }
`
const App = () => {
  const [iconDesign, setIconDesign] = useState('outline')
  return (
    <IconProvider
      value={{
        design: iconDesign,
        size: 200,
        color: '#151515',
        secondaryColor: '#0080ff',
        strokeWidth: 1
        // frameBorderColor: '#0080ff',
        // frameBorderRadius: '1'
      }}
    >
      <div className='form-field'>
        <label htmlFor=''>Icon Styles</label>
        <div className='radio'>
          {availableDesigns &&
            availableDesigns.map((Item) => (
              <React.Fragment key={Item}>
                <input
                  type='radio'
                  value={Item}
                  className='radio__input'
                  name='styles'
                  id={Item}
                  onChange={() => setIconDesign(Item)}
                  checked={iconDesign === Item}
                />
                <label className='radio__label' htmlFor={Item}>
                  {Item}
                </label>
              </React.Fragment>
            ))}
        </div>
      </div>
      <IconGrid>
        {result.map((idx) => {
          const Icon = AllIcons[idx]
          return (
            <IconItem key={idx}>
              <Icon />
              <span>{idx}</span>
            </IconItem>
          )
        })}
      </IconGrid>
    </IconProvider>
  )
}

export default App
