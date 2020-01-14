import React from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import {deletePost} from '../actions/postActions'

class Post extends React.Component {
    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    // }

    handleClick = () => {
        // console.log(this.props);
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        // console.log(this.props);
        const postFromStore = this.props.post;
        const post = postFromStore ?
            <div className="container">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <div className="btn grey" onClick={this.handleClick}>
                        Delete
                    </div>
                </div>
            </div>
            :
            <div className="center">Loading...</div>

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    let id = ownProps.match.params.post_id;
    return ({
        post: state.posts.find(post => post.id === id )
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        deletePost : (id) => dispatch(deletePost(id))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)