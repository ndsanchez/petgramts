import * as ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-server-alexander.vercel.app/graphql',
  cache: new InMemoryCache(),
})

const container = document.getElementById('app')
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  container
)
