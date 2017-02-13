import React from 'react'
var CommentForm = React.createClass({
    getInitialState: function () {
        return { author: '', text: '' }
    },
    handleAuthorChange: function (e) {
        this.setState({ author: e.target.value })
    },
    handleTextChange: function (e) {
        this.setState({ text: e.target.value })
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) return;
        this.handleCommentSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    },
    handleCommentSubmit: function (newData) {
        newData.id = new Date()
        this.setState({ 'data': this.state.data })
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="say somthing" value={this.state.text} onChange={this.handleTextChange} />
                <input type="submit" value="Post" />
            </form>
        )
    }
})

export default CommentForm