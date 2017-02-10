import React from 'react';
import CommentList from './components/comment/List.jsx'

class App extends React.Component {
  state = {};
  componentWillMount() {
    fetch('data.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState(res);
      });
  }
  render() {
    return (
      <div>
        <h1>Fetching data.json</h1>
        <pre><code>
          {JSON.stringify(this.state, null, 2)}
        </code></pre>
        <CommentList></CommentList>
      </div>
    );
  }
}

export default App;