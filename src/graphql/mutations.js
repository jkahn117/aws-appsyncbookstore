/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const submitFeedback = `mutation SubmitFeedback($input: FeedbackInput!) {
  submitFeedback(input: $input) {
    id
    email
    message
  }
}
`;
export const submitOrder = `mutation SubmitOrder($input: SubmitOrderInput!) {
  submitOrder(input: $input) {
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
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
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
export const createCartItem = `mutation CreateCartItem($input: CreateCartItemInput!) {
  createCartItem(input: $input) {
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
export const updateCartItem = `mutation UpdateCartItem($input: UpdateCartItemInput!) {
  updateCartItem(input: $input) {
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
export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
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
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
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
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
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
export const deleteCartItem = `mutation DeleteCartItem($input: DeleteCartItemInput!) {
  deleteCartItem(input: $input) {
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
