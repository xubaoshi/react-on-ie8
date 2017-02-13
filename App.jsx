import React from 'react';
import CommentList from './components/comment/List.jsx'
import CommentForm from './components/comment/Form.jsx'
import { Link } from 'react-router'

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>React And React-Router</h1>
        <Link to="/list" component={CommentList}>list</Link>
        <Link to="/add" component={CommentForm}>list</Link>
        {this.props.children}
      </div>
    );
  }
})

export default App;