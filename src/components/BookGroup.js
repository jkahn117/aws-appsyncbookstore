import React from 'react';
import { Card, Header, Segment } from 'semantic-ui-react';

import BookCard from './BookCard';

function BookGroup({ title='', books=[], size='large' }) {
  return (
    <div>
      <Header as='h3'>{ title || '' }</Header>
      <Segment>
        <Card.Group centered doubling>
          { books.map((book) =>
              <BookCard book={ book } key={ book.id } size={ size }/>
            )}
        </Card.Group>
      </Segment>
    </div>
  );
}

export default BookGroup;
