import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

 class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( response =>{
      this.setState({
        posts: response.data.slice(0,15)
      })
    } )
    .catch( error => console.log(error))
  }
  render() {
    const {posts} = this.state;
    const postList = posts.length? (
      posts.map( post =>{
        return(
          <div className='post card' key={post.id}>
            <div className="card-body">
              <p className="card-title"><span> {post.id}. </span> {post.title} </p>
              <hr className='border' />
              <p className="card-text"> {post.body} </p>
              <Link to={'/'+post.id} className='card-link'>View More</Link>
            </div>
          </div>
        )
      } )
    ):(
      <div className='card'>
        <h4>No Post Yet!</h4>
      </div>
    )
    
    return (
      <div className='container col-8 py-2'>
        {postList}
      </div>
    )
  }
}

export default Posts;