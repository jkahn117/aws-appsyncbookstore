import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import BookGroup from './BookGroup';

import { bestsellers as bestsellersQuery } from '../graphql/queries';

function Bestsellers(props) {
  const [ bestsellers, setBestsellers ] = useState([]);

  useEffect(() => {
    listBestsellers();
  }, []);

  async function listBestsellers() {
    try {
      const data = await API.graphql({
        query: bestsellersQuery
      });
      const { data: { bestsellers: { items }}} = data;
      setBestsellers(items);
    } catch (error) {
      console.error('[ERROR - listBestellers] ', error);
    }
  }

  return (
    <div>
      <BookGroup title='Bestsellers' books={ bestsellers }/>
    </div>
  );
}

export default Bestsellers;
