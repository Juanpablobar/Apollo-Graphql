import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import GetCharacters from './getCharacters';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {

  return (

    <ApolloProvider client={client}>
      <div className="App">
      <header className="App-header">
        <GetCharacters />
      </header>
      </div>
      </ApolloProvider>
  );
}

export default App;
