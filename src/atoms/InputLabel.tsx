import { Typography, TypographyProps } from '@material-ui/core'
import React from 'react'

type InputLabal = TypographyProps & {
  onClick?: () => void
  name?: string
}

const InputLabel:React.FC<InputLabal> = ({ children, ...props }) => {
  return (
    <Typography {...props}>
      {children}
    </Typography>
  )
}

export { InputLabel }
