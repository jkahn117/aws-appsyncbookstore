import React from 'react';
import { Card, Header, Segment } from 'semantic-ui-react';

import BookCard from './BookCard';

function BookGroup({ title='', books=[] }) {
  return (
    <div>
      <Header as='h3'>{ title || '' }</Header>
      <Segment>
        <Card.Group>
          { books.map((book) =>
              <BookCard book={ book } key={ book.id }/>
            )}
        </Card.Group>
      </Segment>
    </div>
  );
}

export default BookGroup;
