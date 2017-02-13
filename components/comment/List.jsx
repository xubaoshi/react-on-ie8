import React from 'react'
import CommentItem from './Item.jsx'
var CommentList = React.createClass({
  getInitialState: function () {
    return { 'data': [] };
  },
  componentWillMount: function () {
    fetch('api/comment.json')
      .then((res) => res.json())
      .then((res) => {
        console
        this.setState({ 'data': res })
      })
  },
    render: function () {
        var commentNodes = ''
        if(this.state.data &&　this.state.data.length > 0){
            commentNodes = this.state.data.map(function (comment) {
                return (
                    <CommentItem author={comment.author} key={comment.id}>
                        {comment.text}
                    </CommentItem>
                )
            });
        }
        return (
            <div className="commentList" >
                {commentNodes}
            </div>
        )
    }
})

export default CommentList