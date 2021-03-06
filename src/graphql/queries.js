/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const bestsellers = `query Bestsellers($start: Int, $end: Int) {
  bestsellers(start: $start, end: $end) {
    items {
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
    nextToken
    totalCount
  }
}
`;
export const recommendations = `query Recommendations($bookId: ID!) {
  recommendations(bookId: $bookId) {
    items {
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
    nextToken
    totalCount
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
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
export const booksByCategory = `query BooksByCategory(
  $category: String
  $sortDirection: ModelSortDirection
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  booksByCategory(
    category: $category
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getCartItem = `query GetCartItem($id: ID!) {
  getCartItem(id: $id) {
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
export const listCartItems = `query ListCartItems(
  $filter: ModelCartItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
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
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const ordersByStatus = `query OrdersByStatus(
  $status: OrderStatus
  $orderDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByStatus(
    status: $status
    orderDate: $orderDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
