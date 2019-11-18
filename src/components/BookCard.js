import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';

import { createCartItem } from '../graphql/mutations';

function LargeCardContent({ book, addToCart }) {
  return (
    <>
      <Image
          src={ book.image }
          wrapped
          ui={ false } />
      <Card.Content>
        <Card.Header>{ book.title }</Card.Header>
        <Card.Meta>{ book.author }</Card.Meta>
        <Card.Description>{ book.description }</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>${ book.price }</p>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue' onClick={ addToCart }>Add to Cart</Button>
          <Button basic color='grey'>Quick Look</Button>
        </div>
      </Card.Content>
    </>
  );
}

function SmallCardContent({ book, addToCart }) {
  return (
    <>
      <Card.Content textAlign='left'>
        <Image floated='left' size='tiny' src={ book.image } />
        <Card.Header>{ book.title }</Card.Header>
        <Card.Meta>by { book.author }<br />${ book.price }</Card.Meta>
        <Card.Description textAlign='center'>
          <div className='ui two buttons'>
            <Button basic color='blue' onClick={ addToCart }>Add to Cart</Button>
            <Button basic color='grey'>More...</Button>
          </div>
        </Card.Description>
      </Card.Content>
    </>
  );
}

function BookCard({ book, size='large' }) {
  async function addToCart() {
    const newCartItem = {
      cartItemBookId: book.id,
      price: book.price,
      quantity: 1,
      addedAt: new Date()
    };

    try {
      await API.graphql(graphqlOperation(createCartItem, { input: newCartItem }));
      console.log('Item added to cart');
    } catch (error) {
      console.error('[ERROR - addToCart] ', error);
    }
  }

  return (
    <Card>
      {(() => {
        switch(size) {
          case 'large':
            return <LargeCardContent book={ book } addToCart={ addToCart }/>
          case 'small':
            return <SmallCardContent book={ book } addToCart={ addToCart }/>
          default:
            return null;
        }
      })()}
    </Card>
  );
}

export default BookCard;
