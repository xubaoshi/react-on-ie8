import React from 'react'
import { addComment } from '../../redux/actions/index'
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
    submit: function(e){
        e.preventDefault();  
        const {handleSubmit} = this.props
        const nodeText= this.refs.text
        const nodeAuthor= this.refs.author
        handleSubmit({ author: nodeAuthor.value.trim(), text: nodeText.value.trim() })
        nodeAuthor.value = ''
        nodeText.value = ''
        this.props.history.push('/list')
    },
    render: function () {
        return (
            <form  onSubmit={(e) => this.submit(e) }>
                <input type="text" ref="author" placeholder="your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" ref="text" placeholder="say somthing" value={this.state.text} onChange={this.handleTextChange} />
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
