import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Moment from 'react-moment';
import 'moment-timezone';

import { Button, Container, Grid, Header, Image, Segment } from 'semantic-ui-react';

import { listOrders as listOrdersQuery } from '../graphql/queries';

function OrderItem({ item }) {
  return (
    <Grid>
      <Grid.Column width={ 5 }>
        <Image size='tiny' centered src='https://via.placeholder.com/200x300'/>
      </Grid.Column>
      <Grid.Column width={ 11 } textAlign='left'>
        <p>{ item.bookId }</p>
        <p>Quantity: { item.quantity }</p>
        <p>Price: ${ item.price }</p>
      </Grid.Column>
    </Grid>
  );
}

function OrderDetails({ order }) {
  return (
    <Segment.Group>
      <Segment inverted color='grey'>
        <Grid>
          <Grid.Column width={ 3 } textAlign='left'>
            <label>Order Placed</label><br />
            <Moment format='MMMM D YYYY'>{ order.orderDate }</Moment>
          </Grid.Column>
          <Grid.Column width={ 3 } textAlign='left'>
            <label>Total</label><br />
            <span>${ order.items.reduce((a,b) => a + (b.price || 0), 0) }</span>
          </Grid.Column>
          <Grid.Column width={ 3 } textAlign='left'>
            <label>Status</label><br />
            <span>{ order.status }</span>
          </Grid.Column>
          <Grid.Column width={ 7 } textAlign='right'>
            <label>Order Number</label><br />
            <span>{ order.id }</span>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment>
        <Grid>
          <Grid.Column width={ 10 }>
            { order.items.map((item, index) =>
              <OrderItem item={ item } key={ index }/>
            )}
          </Grid.Column>
          <Grid.Column width={ 6 }>
            <Button>Cancel Order</Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}

function Orders(props) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ orders, setOrders ] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    setIsLoading(true);
    
    try {
      const data = await API.graphql(graphqlOperation(listOrdersQuery));
      const { data: { listOrders: { items }}} = data;
      setOrders(items);
    } catch(error) {
      console.error('[ERROR - loadCart] ', error);
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      { isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header as='h1' textAlign='left'>Your Orders</Header>
          { orders.length === 0 ? (
            <p><strong>No orders</strong></p>
          ) : (
            orders.map((order) =>
              <OrderDetails order={ order } key={ order.id }/>
            )
          )}
        </>
      )}
    </Container>
  );
}

export default Orders;
