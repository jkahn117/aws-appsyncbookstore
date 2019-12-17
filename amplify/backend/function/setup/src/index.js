/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiAwsappsyncbookstoreGraphQLAPIIdOutput = process.env.API_AWSAPPSYNCBOOKSTORE_GRAPHQLAPIIDOUTPUT
var apiAwsappsyncbookstoreGraphQLAPIEndpointOutput = process.env.API_AWSAPPSYNCBOOKSTORE_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const axios = require('axios');
const aws4 = require('aws4');
const urlParse = require('url').URL;

const appSyncUrl = process.env.API_AMPLIFYPHOTOSAPI_GRAPHQLAPIENDPOINTOUTPUT;
const appSyncHost = new urlParse(appSyncUrl).hostname.toString();

const NYT_BOOKS_ENDPOINT = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json';

//
//
//
async function getBooksFromNYT() {
  let { data: { results: { books } } } = await axios.get(
    NYT_BOOKS_ENDPOINT,
    {
      params: {
        'api-key': process.env.NYT_API_KEY
      },
      headers: {
        accepts: 'applicaiton/json'
      } 
    }
  );
  return books;
}

//
// GraphQL Mutation to create a new book.
//
const createBookMutation = `
mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
  }
}
`;

//
// Creata new book in the datastore via GraphQL operation.
//
async function createBook(book) {
  console.log(book)

  let mutation = {
    query: createBookMutation,
    operationName: 'CreateBook',
    variables: {
      input: {
        ...book
      }
    }
  };

  console.log(mutation);

  let request = aws4.sign({
    method: 'POST',
    url: appSyncUrl,
    host: appSyncHost,
    path: '/graphql',
    headers: {
      'Content-Type': 'application/json'
    },
    service: 'appsync',
    data: mutation,
    body: JSON.stringify(mutation)
  });
  delete request.headers['Host'];
  delete request.headers['Content-Length'];

  let result = await axios(request);
  console.log(result);
  console.log(JSON.stringify(result.data));
  if (result.errors && result.errors.length > 0) {
    console.error(`[createBook] ${result.errors[0].message}`);
    throw new Error(`AppSync error - ${result.errors[0].errorType}: ${result.errors[0].message}`);
  }
}

exports.handler = async (event) => {
  try {
    let books = await getBooksFromNYT();
    for (let book of books) {
      await createBook({
        isbn: book.primary_isbn13,
        author: book.author,
        category: 'Fiction',
        description: book.description,
        image: book.book_image,
        title: book.title,
        price: book.price
      });
    }
  } catch (error) {
    console.error(JSON.stringify(error));
    console.error('An error occurred');
    return error;
  }
};
