import React from 'react'
import CommentItem from './Item.jsx'
var CommentList = React.createClass({
    render: function () {
        var commentNodes = ''
        if(this.props.data){
            commentNodes = this.props.data.map(function (comment) {
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