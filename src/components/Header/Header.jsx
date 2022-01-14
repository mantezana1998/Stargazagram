import React from 'react';

export default function Header (props){
    return(
      <div class="ui menu">
        <a class='item' href="/"><img src='https://i.imgur.com/WsX89jL.jpg'></img></a>
        <div class="right menu">
          <a class="item">Welcome, {props.user.username}</a>
          <a class='item'><img src={props.user.photoUrl}></img></a>
          <a class="item" href='/login' onClick={props.handleLogout}>Logout</a>
        </div>
      </div>
    )
}