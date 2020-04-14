import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Snackbar } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiSnackbarContent-root': {
      width: '60vw',
      minWidth: 344,
      maxWidth: 688,
      flex: 'none'
    }
  }
}))

const SimpleSnackbar = (props) => {
  const classes = useStyles()
  return (
    <Snackbar
      autoHideDuration={4000 /* 4 ~ 10 second */}
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      onClose={props.onClose}
      message={props.message}
      action={props.action &&
          <Button color="secondary" size="small" onClick={() => { props.onClose(); props.onAction() }}>
            {props.action}
          </Button>
      }
      className={classes.root}
    />
  )
}

SimpleSnackbar.propTypes = {
  anchorOrigin: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.string,
  action: PropTypes.string,
  onAction: PropTypes.func
}

export default SimpleSnackbar
