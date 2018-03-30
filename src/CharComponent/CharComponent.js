import React from 'react';

const CharComponent = props => {

  const lght = props.word ? props.word.length : 0;
  let letters = null;

  if ( lght ) {
    const tempWrd = [ ...props.word ];
    
    letters = (
      tempWrd.map( ( l , index ) => {
        return <p key={ index } onClick={ () => props.delete(index) } >{ l }</p>
      })
    );
  }

  return (
    <div>
      { letters }
    </div>
  )
}

export default CharComponent;