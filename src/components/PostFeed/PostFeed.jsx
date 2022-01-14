import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function PostFeed (props){

function handleClick(e){
  e.preventDefault();
  e.target.style.color = 'red'
}

  return (
  <>
  {props.data && props.data.map((nasa) => {
    return (
      <Card>
        <Card.Content textAlign='left'>
          <Card.Header>
            <Link to={nasa.url}>
              <Image 
              size='large'
              avatar
              src={nasa.hdurl}
              />
            </Link>
            {nasa.title}
          </Card.Header>
        </Card.Content>
        <Image 
        src={nasa.url}
        wrapped ui={false}
        />
        <Card.Content>
          <Card.Description>
            {nasa.explanation}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          Created on: {nasa.date}
        </Card.Content>
        <Card.Content extra textAlign={"right"}>
        <Icon name={"heart"} 
        size="large" 
        onClick={handleClick}
        />
        Likes
      </Card.Content>
      </Card>
      )
  })} 
  </>
  )
}