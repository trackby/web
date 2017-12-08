import { injectGlobal } from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`
