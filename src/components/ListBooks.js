import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import BookGroup from './BookGroup';

import { listBooks as listBooksQuery } from '../graphql/queries';

function ListBooks({ title='All Books', size }) {
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    listBooks();
  }, []);

  async function listBooks() {
    try {
      const data = await API.graphql({
        query: listBooksQuery,
        variables: { limit: 6 },
        authMode: 'AWS_IAM'
      });
      const { data: { listBooks: { items }}} = data;
      setBooks(items);
    } catch (error) {
      console.error('[ERROR - listBooks] ', error);
    }
  }

  return (
    <div className='padded'>
      <BookGroup title={ title } books={ books } size={ size }/>
    </div>
  );
}

export default ListBooks;
