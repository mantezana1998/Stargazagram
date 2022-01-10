import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Header (){
    return(
<div class="ui segment">
  <div class="ui secondary menu">
    <a class="item active">
        Home
    </a>
    <a class="item">
      Logout 
    </a>
  </div>
</div>
    )
}