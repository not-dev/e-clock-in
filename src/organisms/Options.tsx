import { Avatar, Box, Container, Divider, Link, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import GitHubIcon from '@material-ui/icons/GitHub'
import SettingsIcon from '@material-ui/icons/Settings'
import clsx from 'clsx'
import React from 'react'

import { Form, FormProps } from '../organisms'

const asyncSetTimeout = (msec:number, func = () => {}) => {
  let timeoutId:number
  const exec = () => new Promise((resolve) => {
    timeoutId = window.setTimeout(() => {
      resolve(func())
    }, msec)
  })
  return {
    exec,
    cancel: () => {
      timeoutId && window.clearTimeout(timeoutId)
    }
  }
}

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    padding: theme.spacing(6),
    lineHeight: `${theme.spacing(6)}px`
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    top: 'calc(144px - 28px)',
    left: 'calc(50% - 28px)',
    '& .MuiSvgIcon-root': {
      fontSize: 28,
      animation: '$r 12s linear infinite',
      transformOrigin: 'center'
    }
  },
  action: {
    '& .MuiSvgIcon-root': {
      animation: '$rFast 4200ms cubic-bezier(0, 0, 0, 1)'
    }
  },
  '@keyframes r': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  '@keyframes rFast': {
    from: { transform: 'rotate(360deg)' },
    to: { transform: 'rotate(3600deg)' }
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    margin: '0 5%'
  },
  linkicon: {
    fontSize: 16,
    verticalAlign: 'middle',
    marginRight: 8,
    marginBottom: 3
  }
}))

type OptionsProps = {
  form: FormProps
}

const Options = (props:OptionsProps) => {
  const classes = useStyles()

  const [action, setAction] = React.useState(false)
  const [timer, setTimer] = React.useState(asyncSetTimeout(0))

  const handleClick = async () => {
    const prevTimer = timer
    if (action && prevTimer) {
      prevTimer.cancel()
      setAction(false)
    }
    const start = asyncSetTimeout(0, () => { setAction(true) })
    await start.exec()
    const newTimer = asyncSetTimeout(4000, () => { setAction(false) })
    setTimer(newTimer)
    await newTimer.exec()
  }

  return (
    <Container maxWidth={false} disableGutters className={classes.root}>
      <Box textAlign='center'>
        <Typography component='h1' variant='h4' className={classes.title}>
                    Options
        </Typography>
        <Avatar className={clsx(classes.avatar, action && classes.action)} onClick={handleClick}>
          <SettingsIcon />
        </Avatar>
        <Divider className={classes.divider} />
      </Box>
      <Container component='main' maxWidth='xs' className={classes.paper}>
        <Form data={props.form.data} link={props.form.link} />
      </Container>
      <Box flex={1} display='flex' justifyContent='center' alignItems='flex-end' p={2}>
        <Typography variant='body2' color='textSecondary' align='center'>
          <Link color='inherit' href='https://github.com/olture/easyLazy'>
            <GitHubIcon className={classes.linkicon}/>GitHub
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export { Options }
