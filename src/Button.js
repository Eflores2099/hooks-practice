import React from 'react'
import styled from 'styled-components'


const StyledButton=styled.button`
    background: dodgerblue;
    height: 40px;
    width: 100px;
`

export default function Button(props) {
const { buttonText, doThis } = props

    return (
        <StyledButton  onClick ={doThis} buttonText={buttonText}></StyledButton>
    )
}