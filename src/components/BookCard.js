import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';

import { createCartItem } from '../graphql/mutations';

function BookCard({ book }) {
  async function addToCart() {
    const newCartItem = {
      cartItemBookId: book.id,
      price: book.price,
      quantity: 1,
      status: 'IN_CART',
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
    </Card>
  );
}

export default BookCard;
