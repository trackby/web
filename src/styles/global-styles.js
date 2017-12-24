import { injectGlobal } from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #1b1b1b;
  }

  body {
    margin: 0;
    padding: 0;
    color: #EFEFEF;
    font-family: Roboto;
  }
  
  h1{
    color:#FCFCFC !important;
  }
  
  h2,h3,h4,h5{
    color:#EFEFEF !important;
  }
  
  .background-none{
    background: none;
  }
  
  .comment > .content > div, .comment > .content > span{
    color: #EFEFEF !important;
  }
  
  .comment a{
    color: #EFEFEF !important;
  }
  
   .comment a:hover, a:active, a:visited{
    color: #BFBFBF !important;
  }
  
`
