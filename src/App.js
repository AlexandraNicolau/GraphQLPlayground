import React from 'react';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const getAPIinfo = gql` {
  characters(page: 2) {
    info {
      count
    }
    results {
      id,
      name,
      image, 
      status
    }
  }
}`

// const getCharacter = gql`{
//   character(id: 2) {
//     id
//   }
// }`

function App() {
  const{ data, loading, error} = useQuery(getAPIinfo)
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>There is an error</p>
  return (
    <React.Fragment>
      <h1>Rick and Morty Characters</h1>  
      <div className="container">
        {data &&
          data.characters &&
          data.characters.results.map((character, index) => (
            <div key={index} className="card">
              <div className="card-body">
              <img src={character.image} />
                <h3>{character.name}</h3>
                <p>Character status: <b>{character.status}</b></p>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
                    }
export default App;
