import React from 'react';
import ReactDOM from "react-dom";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client"

const GET_CHARACTER = gql`{
    character(id:1) {
      id
    }
  }`

function Button() { 
  const [
    getCharacter, 
    { loading, data } 
  ] = useLazyQuery(GET_CHARACTER)
  if(loading) return <p>Loading data...</p>
  if(data) 
  console.log(data)

  return (
    <div>
    <button onClick={() => getCharacter() }>
      Click here for more information
    </button>   
    </div>
  ) 
}

export default Button;