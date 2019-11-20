import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import BookGroup from './BookGroup';

import { bestsellers as bestsellersQuery } from '../graphql/queries';

function Bestsellers({ size }) {
  const [ bestsellers, setBestsellers ] = useState([]);

  useEffect(() => {
    listBestsellers();
  }, []);

  async function listBestsellers() {
    try {
      const data = await API.graphql({
        query: bestsellersQuery,
        variables: { limit: 3 },
        authMode: 'AWS_IAM'
      });
      const { data: { bestsellers: { items }}} = data;
      setBestsellers(items);
    } catch (error) {
      console.error('[ERROR - bestsellers] ', error);
    }
  }

  return (
    <div className='padded'>
      <BookGroup title='Bestsellers' books={ bestsellers } size={ size }/>
    </div>
  );
}

export default Bestsellers;
