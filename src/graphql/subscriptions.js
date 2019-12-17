/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdate = `subscription OnOrderUpdate($owner: String!, $id: ID!) {
  onOrderUpdate(owner: $owner, id: $id) {
    id
    customerId
    orderDate
    shipDate
    status
    items {
      bookId
      price
      quantity
    }
    tax
    shippingFee
  }
}
`;
export const onCreateCartItem = `subscription OnCreateCartItem($owner: String!) {
  onCreateCartItem(owner: $owner) {
    id
    price
    quantity
    addedAt
    book {
      id
      isbn
      author
      category
      description
      image
      title
      price
      rating
    }
    owner
  }
}
`;
export const onUpdateCartItem = `subscription OnUpdateCartItem($owner: String!) {
  onUpdateCartItem(owner: $owner) {
    id
    price
    quantity
    addedAt
    book {
      id
      isbn
      author
      category
      description
      image
      title
      price
      rating
    }
    owner
  }
}
`;
export const onDeleteCartItem = `subscription OnDeleteCartItem($owner: String!) {
  onDeleteCartItem(owner: $owner) {
    id
    price
    quantity
    addedAt
    book {
      id
      isbn
      author
      category
      description
      image
      title
      price
      rating
    }
    owner
  }
}
`;
