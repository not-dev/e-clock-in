import React, { ChangeEvent } from 'react'
import PropTypes from 'prop-types'

import { Switch, TextField, Divider, Button, Typography, Link } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { MyGrid as Grid, InputLabel } from '../atoms'
import { TextDialog, SimpleSnackbar } from '../molecules'
import { saveOptions, loadOptions, closeTab } from '../utilitys'

interface FormData {
  title: string,
  elem: {
    key: {
      init: string,
      type: string,
      label: string,
      password?: boolean,
      unsafe?: boolean,
      warning?: string
    }
  }
}
interface strObject {
  [key: string]: string
}
interface boolObject {
  [key: string]: boolean
}

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`
  },
  link: {
    float: 'right'
  }
}))

const Form = (props:any) => {
  const classes = useStyles()

  const [state, setState] = React.useState(() => {
    const init = {
      ...props.data.reduce((obj:strObject, d:FormData) => {
        const items = Object.entries(d.elem)
        for (const item of items) {
          obj[item[0]] = item[1].init
        }
        return obj
      }, {})
    }
    return init
  })

  const [init] = React.useState(() => {
    const dialogContents = props.data.reduce((obj:Object, group:FormData) => {
      obj = {
        ...obj,
        ...Object.entries(group.elem).reduce((res:strObject, [key, e]) => {
          if (e.warning) { res[key] = e.warning }
          return res
        }, {})
      }
      return obj
    }, {})
    loadOptions(null, (options:Object) => setState({ ...state, ...options }))
    return { dialogContents: dialogContents }
  })

  const [error, setError] = React.useState<boolObject>({})

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const name = event.target.getAttribute('name') || ''
    setState({ ...state, [name]: !state[name] })
  }

  const handleInput = (event:ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const name = event.target.getAttribute('name') || ''
    if (input.match(/^[0-9a-zA-Z]+$/) || !input) {
      setState({ ...state, [name]: event.target.value })
      setError({ ...error, [name]: false })
    } else {
      setError({ ...error, [name]: true })
    }
  }

  const [showBar, setShowBar] = React.useState(false)

  const handleSubmit = () => {
    saveOptions(state, () => setShowBar(true))
  }

  const [stateDialog, setStateDialog] = React.useState({
    show: false,
    name: ''
  })

  const handleCloseDialog = () => {
    setStateDialog({ ...stateDialog, show: false })
  }

  const handleCancel = (name:string) => {
    setState({ ...state, [name]: !state[name] })
  }

  const handleWarning = (event:ChangeEvent<HTMLInputElement>) => {
    handleChange(event)
    const name = event.target.getAttribute('name') || ''
    if (!state[name]) {
      setStateDialog({
        ...stateDialog,
        show: true,
        name: name
      })
    }
  }

  React.useEffect(() => {
    const unsafes = document.getElementsByClassName('unsafe') as HTMLCollectionOf<HTMLElement>
    const showUnsafe = state.fillPassword
    for (const unsafe of Array.from(unsafes)) {
      if (showUnsafe) {
        unsafe.style.display = 'flex'
      } else {
        unsafe.style.display = 'none'
      }
    }
  })

  return (
    <Grid container>
      {props.data.map((d:FormData, i:number) => {
        return (
          <Grid item container key={i} >
            <Grid item >
              <Typography variant='overline'>{d.title}</Typography>
            </Grid>
            {Object.entries(d.elem).map((items) => {
              const [name, e] = items
              if (e.type === 'TextField') {
                return (
                  <Grid item className={e.unsafe && 'unsafe'} key={name}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      onChange={handleInput}
                      label={e.label}
                      name={name}
                      value={state[name] || ''}
                      type={e.password ? 'password' : 'email'}
                      title=''
                      error={error[name]}
                      helperText={error[name] && '全角文字は使用できません'}
                    />
                  </Grid>
                )
              } else if (e.type === 'Switch') {
                const f = !e.warning ? handleChange : handleWarning
                return (
                  <Grid item container key={name}>
                    <Grid item xs={true}>
                      <InputLabel
                        variant='subtitle1'
                        onClick={f}
                        name={name}
                      >
                        {e.label}
                      </InputLabel>
                    </Grid>
                    <Grid item xs={false}>
                      <Switch
                        checked={state[name]}
                        onChange={f}
                        name={name}
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                )
              } else {
                return null
              }
            })}
            <Grid item >
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
        )
      })}
      <Grid item container>
        <Grid item >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            SAVE
          </Button>
        </Grid>
        <Grid item>
          <Link href={props.link.target} variant="body2" color='textSecondary' className={classes.link}>
            {props.link.text || <></>}
          </Link>
        </Grid>
      </Grid>
      <TextDialog
        open={stateDialog.show}
        handleClose={handleCloseDialog}
        handleCancel={handleCancel}
        content={stateDialog.name ? init.dialogContents[stateDialog.name] : <></>}
        name={stateDialog.name}
      ></TextDialog>
      <SimpleSnackbar
        open={showBar}
        onClose={() => setShowBar(false)}
        message='保存しました'
        action='CLOSE'
        onAction={() => closeTab()}
      />
    </Grid>
  )
}

Form.propTypes = {
  data: PropTypes.array,
  link: PropTypes.object
}

export default Form
