import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { Button, Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react';

import { listCartItems } from '../graphql/queries';
import { submitOrder as submitOrderMutation, deleteCartItem } from '../graphql/mutations';

function CartItem({ item, removeItem }) {
  function onRemoveItem() {
    removeItem(item.id);
  }

  return (
    <Grid.Row>
      { item &&
        <>
          <Grid.Column width={ 5 }>
            <Image src={ item.book.image } size='small' />
          </Grid.Column>
          <Grid.Column width={ 8 } textAlign='left'>
            <p><strong>{ item.book.title }</strong></p>
            <p>{ item.book.author }</p>
            <p>Quantity: { item.quantity }</p>
            <p>
              <Button color='red' onClick={ onRemoveItem }>
                Remove
              </Button>
            </p>
          </Grid.Column>
          <Grid.Column width={ 3 }>
            <p className='price'>${ item.price }</p>
          </Grid.Column>
        </>
      }
    </Grid.Row>
  );
}

function CartDetails(props) {
  return (
    <Grid divided='vertically'>
      <Grid.Row>
        <Grid.Column width={ 13 }>
          <Header as='h2' textAlign='left'>Shopping Cart</Header>
        </Grid.Column>
        <Grid.Column width={ 3 } verticalAlign='bottom' style={{ marginBottom: 0 }}>
          <span>Price</span>
        </Grid.Column>
      </Grid.Row>
      { props.items.length === 0 ? (
        <p><strong>No items in your cart</strong></p>
      ) : (
        props.items.map((cartItem) =>
          <CartItem item={ cartItem } removeItem={ props.removeItem } key={ cartItem.id } />
          )
      )}
    </Grid>
  );
}

function Checkout(props) {
  function subtotal(items) {
    return items.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }

  async function submitOrder() {
    let params = {
      orderDate: new Date(),
      items: props.items.map((item) => {
        return {
          bookId: item.book.id,
          cartItemId: item.id,
          price: String(item.price),
          quantity: String(item.quantity)
        };
      })
    }

    try {
      const data = await API.graphql(graphqlOperation(submitOrderMutation, { input: params }));
      console.log(data);
    } catch (error) {
      console.error('[ERROR - submitOrder] ', error);
    }
  }

  return (
    <Segment secondary>
      <Header as='h3' textAlign='left'>
        Subtotal ({ props.items.length } items): ${ subtotal(props.items) }
      </Header>

      <Divider hidden />

      <Button primary fluid size='large' onClick={ submitOrder }>
        Checkout Now
      </Button>
    </Segment>
  );
}

function Cart(props) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    setIsLoading(true);
    
    try {
      const data = await API.graphql(graphqlOperation(listCartItems));
      const { data: { listCartItems: { items }}} = data;
      setItems(items);
    } catch(error) {
      console.error('[ERROR - loadCart] ', error);
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  async function removeItem(itemId) {
    const removeCartItem = {
      id: itemId
    };

    try {
      await API.graphql(graphqlOperation(deleteCartItem, { input: removeCartItem }));
      let filtered = items.filter((item) => item.id !== itemId);
      setItems(filtered);
    } catch(error) {
      console.error('[ERROR - removeItem] ', error);
    }
  }

  return (
    <Container className='padded'>
      { isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid>
          <Grid.Column width={ 10 }>
            <CartDetails items={ items } removeItem={ removeItem }/>
          </Grid.Column>
          <Grid.Column width={ 6 }>
            <Checkout items={ items }/>
          </Grid.Column>
        </Grid>
      )}
    </Container>
  );
}

export default Cart;
