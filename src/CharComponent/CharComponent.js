import React from 'react';

const CharComponent = props => {

  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid #eee',
    textAlign: 'center'
  }
  const lght = props.word ? props.word.length : 0;
  let letters = null;

  if ( lght ) {
    const tempWrd = [ ...props.word ];
    
    letters = (
      tempWrd.map( ( l , index ) => {
        return <p style={ style } key={ index } onClick={ () => props.delete(index) } >{ l }</p>
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