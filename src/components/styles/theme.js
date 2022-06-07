import React from 'react';
import styled from '@emotion/styled/macro'
//import * as colors from 'styles/colors.js'

const buttonVariants = {
  primary: {
    background: '#3f51b5',
    color: 'white',
  },
  secondary: {
    background: '#f1f2f7',
    color: '#424449',
  },
}

const Button = styled.button (
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  }
)

const Input = styled.input({
  borderRadius: '3px',
  border: '1px solid #f1f2f7',
  background: '#f1f2f7',
  paddign: '8px 12px'
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

 const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContext: 'center',
  border: '1px soild grey',
  }
)


export {Button, CircleButton, FormGroup, Input}
