/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
}
`;
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
}
`;
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
    id
    customerId
    orderDate
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
    id
    customerId
    orderDate
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
    id
    customerId
    orderDate
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
