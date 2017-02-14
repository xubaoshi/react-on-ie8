import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import CommentList from './components/comment/List.jsx'
import CommentForm from './components/comment/Form.jsx'
import CnodeList from './components/cnode/List.jsx'
import { Link } from 'react-router'
import * as Actions from './redux/actions';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>React And React-Router</h1>
        <Link to="/list" component={CommentList}>list</Link>
        <Link to="/add" component={CommentForm}>add</Link>
        <Link to="/cnode" component={CnodeList}>cnode</Link>
        {this.props.children}
      </div>
    );
  }
})

export default App;