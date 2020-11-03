import React, { useContext } from 'react'

import styled from 'styled-components'
import Button from './Button'
import { AppStateContext } from './Providers/Store'


const AppContainer = styled.div`
  border: 1px solid lightcoral;
`


export default function App() {
const [appState, setAppState] = useContext(AppStateContext)

function handleClick() {
if(appState === 'on') {
  setAppState(() => {
    return 'off'
  })
} else if (appState === 'off') {
  setAppState(() => {
    return 'on'
  })
}
console.log(appState)
}

// console.log(appState)
  
  return(
  <AppContainer>
    <h1>App Component</h1>
    <Button buttonText={'poop'} doThis={handleClick} />
  </AppContainer>
  )
}