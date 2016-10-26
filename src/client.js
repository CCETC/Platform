import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './platform/client'
import './client.scss'

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('platform'))
