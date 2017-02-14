import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


var CnodeList = React.createClass({
    componentDidMount:function(){
        const {getTopics} = this.props
        getTopics()
    },
    render: function () {
        const {cnodes} = this.props
        var cnodeNodes = ''
        if (cnodes && cnodes.length > 0) {
            cnodeNodes = cnodes.map(function (cnode) {
                return (
                    <span key={cnode.id}> {cnode.author_id}</span>
                )
            });
        }
        return (
            <div className="cnodeList" >
                {cnodeNodes}
            </div>
        )
    }
})

const mapStateToProps = (state, ownProps) => {
  return {
    cnodes: state.rootReducer.cnodes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      getTopics:function(){
        const url = 'https://cnodejs.org/api/v1/topics'
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            dispatch({type:'LIST_CNODE_REQUEST', res})
        });
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CnodeList)