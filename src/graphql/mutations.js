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
export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
    isbn
    author
    category
    cover {
      region
      bucket
      key
    }
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
    cover {
      region
      bucket
      key
    }
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
    cover {
      region
      bucket
      key
    }
    title
    price
    rating
  }
}
`;
export const createCartItem = `mutation CreateCartItem($input: CreateCartItemInput!) {
  createCartItem(input: $input) {
    price
    quantity
    book {
      id
      isbn
      author
      category
      cover {
        region
        bucket
        key
      }
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
    price
    quantity
    book {
      id
      isbn
      author
      category
      cover {
        region
        bucket
        key
      }
      title
      price
      rating
    }
    owner
  }
}
`;
export const deleteCartItem = `mutation DeleteCartItem($input: DeleteCartItemInput!) {
  deleteCartItem(input: $input) {
    price
    quantity
    book {
      id
      isbn
      author
      category
      cover {
        region
        bucket
        key
      }
      title
      price
      rating
    }
    owner
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    books {
      book {
        id
        isbn
        author
        category
        title
        price
        rating
      }
      customerId
      quantity
      price
    }
    orderDate
    status
    owner
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    books {
      book {
        id
        isbn
        author
        category
        title
        price
        rating
      }
      customerId
      quantity
      price
    }
    orderDate
    status
    owner
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    books {
      book {
        id
        isbn
        author
        category
        title
        price
        rating
      }
      customerId
      quantity
      price
    }
    orderDate
    status
    owner
  }
}
`;
