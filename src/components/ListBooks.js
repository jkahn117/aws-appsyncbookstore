import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import BookGroup from './BookGroup';

import { listBooks as listBooksQuery } from '../graphql/queries';

function Bestsellers(props) {
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    listBooks();
  }, []);

  async function listBooks() {
    try {
      const data = await API.graphql({
        query: listBooksQuery,
        authMode: 'AWS_IAM'
      });
      const { data: { listBooks: { items }}} = data;
      setBooks(items);
    } catch (error) {
      console.error('[ERROR - listBooks] ', error);
    }
  }

  return (
    <div>
      <BookGroup title='All Books' books={ books }/>
    </div>
  );
}

export default Bestsellers;
