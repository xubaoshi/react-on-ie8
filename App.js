import React from 'react';
import CommentList from './components/comment/List.jsx'

class App extends React.Component {
  state = {};
  componentWillMount() {
    fetch('api/comment.json')
      .then((res) => res.json())
      .then((res) => {
        console
        this.setState({ data: res })
      })
  }
  render() {
    return (
      <div>
        <CommentList data={this.state.data}></CommentList>
      </div>
    );
  }
}

export default App;