import React from 'react';

import './Home.css';
import { Segment, Container, Header, Input } from 'semantic-ui-react';

import ListBooks from '../components/ListBooks';
import Bestsellers from '../components/Bestsellers';

function Hero(props) {
  return (
    <Segment inverted vertical textAlign='center' className='hero'>
      <Container>
        <Container text>
          <Header as='h1'>A Sample Bookstore</Header>
          <Input placeholder='search...' size='huge'
                action={{
                  color: 'blue',
                  content: 'Go'
                }}/>

        </Container>
      </Container>
    </Segment>
  );
}

function Home(props) {
  return (
    <div>
      <Hero />

      <ListBooks title='All Books' />

      <Bestsellers />
    </div>
  );
}

export default Home;
