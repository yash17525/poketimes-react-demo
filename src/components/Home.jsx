import React, { Component } from 'react'
// import Rainbow from '../hoc/Rainbow'
// import Axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'

class Home extends Component {
    // state = {
    //     posts: []
    // }

    // componentDidMount() {
    //     Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //         this.setState({
    //             posts: res.data
    //         })
    //     })
    // }


    render() {
        // console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ?
            posts.map(post => {
                return (
                    <div className="post card center" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className='card-title red-text'>{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
            :
            <div className="center">No posts yet</div>;

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToStore = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToStore)(Home)