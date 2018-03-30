import React from 'react';

const ValidationComponent = props => {

  const lbl = props.lght ? props.lght < 5 ? 'Text too short' : 'Text long enough' : 'Insert some text';

  return (
    <div>
      { lbl }
    </div>
  )
}

export default ValidationComponent;