import React from 'react';

export default function Header (){
    return(
      <div class="ui segment">
        <div class="ui secondary menu">
          <a class="item active" href='/'>
              Feed
          </a>
          <a class="item">
            Logout 
          </a>
        </div>
      </div>
    )
}