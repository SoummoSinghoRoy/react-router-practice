import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
  state={
    post: null
  }

  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response=>{
      this.setState({
        post: response.data
      })
    })
  }

  render() {
    const post = this.state.post ? (
      <div className='card container col-7'>
            <div className="card-body">
              <p className="card-title"><span> {this.state.post.id}. </span> {this.state.post.title} </p>
              <hr className='border' />
              <p className="card-text"> {this.state.post.body} </p>
            </div>
          </div>
    ):(
      <div className='card'>
        <h4>No Post Yet....</h4>
      </div>
    )
    return (
      <div>
        {post}
      </div>
    )
  }
}

export default Post;