import React from 'react'
var CommentItem = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.author}</h1>
                {this.props.children}
            </div>
        )
    }
})

export default CommentItem