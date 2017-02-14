import React from 'react'
import { addComment } from '../../actions/index'
import { connect } from "react-redux";

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
    handleCommentSubmit: function (newData) {
        newData.id = new Date()
        this.setState({ 'data': this.state.data })
    },
    render: function () {
        const {handleSubmit} = this.props

        return (
            <form onSubmit={e => {
                e.preventDefault();
                handleSubmit({ author: this.state.author, text: this.state.text });
                this.state.author = '';
                this.state.text = ''
            }}>
                <input type="text" placeholder="your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="say somthing" value={this.state.text} onChange={this.handleTextChange} />
                <input type="submit" value="Post" />
            </form>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (obj) => {
            dispatch(addComment(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
