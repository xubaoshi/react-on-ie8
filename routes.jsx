import React from 'react'
import { Router, Route, Link ,IndexRoute} from 'react-router'

import CommentList from './components/comment/List.jsx'
import CommentForm from './components/comment/Form.jsx'
import CnodeList from './components/cnode/List.jsx'
import App from './App.jsx'


export default (
    <Route name="app" path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/list" component={CommentList} />
        <Route path="/add" component={CommentForm} />
        <Route path="/cnode" component={CnodeList} />
    </Route>
)