import React from 'react';
import CommentList from './components/comment/List.jsx'
var data = [
  { id: 1, author: "Pete Hunt", text: "This is one comment" },
  { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
];

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
        <CommentList data={data}></CommentList>
      </div>
    );
  }
}

export default App;