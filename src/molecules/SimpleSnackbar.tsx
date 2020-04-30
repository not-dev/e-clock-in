import { Button, Snackbar, SnackbarProps } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(() => createStyles({
  root: {
    '& .MuiSnackbarContent-root': {
      width: '60vw',
      minWidth: 344,
      maxWidth: 688,
      flex: 'none'
    }
  }
}))

type SimpleSnackbarProps = SnackbarProps & {
  onAction: () => void
}

const hasAction = (props: any): props is SimpleSnackbarProps => {
  return props.action !== undefined
}

const SimpleSnackbar:React.FC<SnackbarProps|SimpleSnackbarProps> = (props) => {
  const classes = useStyles()
  return (
    <Snackbar
      autoHideDuration={4000 /* 4 ~ 10 second */}
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      onClose={props.onClose}
      message={props.message}
      action={hasAction(props) &&
          <Button color="secondary" size="small" onClick={props.onAction}>
            {props.action}
          </Button>
      }
      className={classes.root}
    />
  )
}

export { SimpleSnackbar }
