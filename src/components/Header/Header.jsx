import React from 'react';

export default function Header (props){
    return(
      <div class="ui menu">
        <a class='item'><img src={props.user.photoUrl}></img></a>
        <a class="item">Hello, {props.user.username}</a>
        <div class="right menu">
        <a class="item">Feed</a>
          <a class="item" href='/login' onClick={props.handleLogout}>Logout</a>
        </div>
      </div>
    )
}