import React from 'react';
import { NavLink } from 'react-router-dom';

const Posts = ({match}) => {
  return (
    <div>
      <h2>This is Post {match.params.postId} </h2>
      <NavLink to='/post-1'>Post-1</NavLink>
      <NavLink to='/post-2'>Post-2</NavLink>
      <NavLink to='/post-3'>Post-3</NavLink>
      <NavLink to='/posts'><button type='button'>Back To Home </button></NavLink>
    </div>
  )
}

export default Posts;
