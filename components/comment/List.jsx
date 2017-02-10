import React from 'react'
import CommentItem from './Item.jsx'
var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <CommentItem></CommentItem>
            </div> 
        )
    }
})

export default CommentList