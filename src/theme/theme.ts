import { teal, orange, red, blue, green, grey } from '@material-ui/core/colors'
import { createMuiTheme, ThemeOptions } from '@material-ui/core'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    layout?: {
      drawerWidth?: React.CSSProperties['width']
    }
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: orange.A400
    },
    error: {
      main: red[500]
    },
    warning: {
      main: orange[500]
    },
    info: {
      main: blue[500]
    },
    success: {
      main: green[500]
    },
    background: {
      default: grey[50]
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: '"Roboto","Noto Sans JP","Helvetica","Arial",YuGothic,"Yu Gothic",sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500
  },
  layout: {
    drawerWidth: 240
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          '&::-webkit-scrollbar': {
            width: 6
          },
          '&::-webkit-scrollbar-track': {
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: 3
          }
        },
        body: {
          textRendering: 'optimizeLegibility'
        }
      }
    }
  }
})

export default theme
