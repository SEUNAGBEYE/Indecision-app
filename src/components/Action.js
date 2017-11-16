import React from 'react';

const Action = (props) => {
  return(
  <div>
    <button
    onClick={props.randomPicker}
    disabled={props.hasOption ? false: true}
    className='big-button'> What Should I DO?</button>
  </div>
  );
}

export default Action;