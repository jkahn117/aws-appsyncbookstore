/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCartItem = `subscription OnCreateCartItem($owner: String!) {
  onCreateCartItem(owner: $owner) {
    price
    quantity
    book {
      id
      isbn
      author
      category
      description
      image
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
export const onUpdateCartItem = `subscription OnUpdateCartItem($owner: String!) {
  onUpdateCartItem(owner: $owner) {
    price
    quantity
    book {
      id
      isbn
      author
      category
      description
      image
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
export const onDeleteCartItem = `subscription OnDeleteCartItem($owner: String!) {
  onDeleteCartItem(owner: $owner) {
    price
    quantity
    book {
      id
      isbn
      author
      category
      description
      image
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
export const onCreateOrder = `subscription OnCreateOrder($owner: String!) {
  onCreateOrder(owner: $owner) {
    id
    books {
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
export const onDeleteOrder = `subscription OnDeleteOrder($owner: String!) {
  onDeleteOrder(owner: $owner) {
    id
    books {
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
export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
    id
    isbn
    author
    category
    description
    image
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
    id
    isbn
    author
    category
    description
    image
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
    id
    isbn
    author
    category
    description
    image
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
export const onUpdateOrder = `subscription OnUpdateOrder($owner: String!) {
  onUpdateOrder(owner: $owner) {
    id
    books {
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
