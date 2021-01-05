import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

import { HeaderSet, FooterSet } from 'credibble-component-library'

ReactDOM.render(<HeaderSet />, document.getElementById('credibble-header'))
ReactDOM.render(<FooterSet />, document.getElementById('credibble-footer'))
