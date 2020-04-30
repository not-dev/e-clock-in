import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'

import { Options } from '../organisms'
import { theme } from '../theme'

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Options
          form={{
            data: [
              {
                title: '入力フォーム',
                elem: {
                  customerID: {
                    init: '',
                    type: 'TextField',
                    label: '企業コード (任意)'
                  },
                  userID: {
                    init: '',
                    type: 'TextField',
                    label: 'ユーザーID (任意)'
                  },
                  password: {
                    init: '',
                    type: 'TextField',
                    label: 'Password',
                    password: true,
                    unsafe: true
                  }
                }
              },
              {
                title: '追加のオプション',
                elem: {
                  focusPassword: {
                    init: true,
                    type: 'Switch',
                    label: 'パスワードにフォーカスする'
                  },
                  autoLogin: {
                    init: false,
                    type: 'Switch',
                    label: '自動でログインする',
                    warning: `\
                    パスワードマネージャーなどで自動入力するときのみ有効にしてください。
                    ご利用の環境によってはログインに失敗します。
                    自動ログインされない場合は、手動でログインしてください。
                    `
                  },
                  fillPassword: {
                    init: false,
                    type: 'Switch',
                    label: 'パスワードを入力する',
                    warning: `\
                    パスワードは暗号化されません。
                    機密情報は入力しないでください。
                    `
                  }
                }
              }
            ],
            link: {
              target: '',
              text: ''
            }
          }}
        />
      </ThemeProvider>
    </StylesProvider>
  )
}

export { App }
