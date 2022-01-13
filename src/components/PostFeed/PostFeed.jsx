import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Loading from '../../components/Loading/Loading'

export default function PostFeed (props){
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
        <Card.Content extra textAlign={'left'}>
          <Icon 
          name={'heart'}
          size='large'
          />
          Likes
        </Card.Content>
      </Card>
      )
  })} 
  </>
  )
}