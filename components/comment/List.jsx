import React from 'react'
import CommentItem from './Item.jsx'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


var CommentList = React.createClass({
    render: function () {
        const {comments} = this.props
        var commentNodes = ''
        if (comments && 　comments.length > 0) {
            commentNodes = comments.map(function (comment) {
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

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.rootReducer.comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)