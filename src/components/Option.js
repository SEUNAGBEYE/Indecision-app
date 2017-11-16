import React from 'react';
   
const Option = (props) => {
  return(
    <div className='option'>
      <p className='option__text'>{props.index + 1} . {props.optionText}</p>
      <button
      className='button button--link'
      onClick={(e) => {props.removeOne(props.optionText)}}>remove</button>
    </div>
  );
}

export default Option;