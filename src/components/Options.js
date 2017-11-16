import React from 'react';
import Option from './Option';

const Options = (props) => {
  return(
    <div>
      {props.options.length <= 0 && <p className='widget-header__message'>Please add an option to get started</p>}
      <div className='widget-header'>
        <h3>Your Options</h3>
        {props.options.length >= 1 &&
        <button 
        onClick={props.removeAll}
        className='button button--link'
        >Remove All</button>}
      </div>
      { props.options.map((element, index) => {
        return (
        <Option 
          key={element} 
          index={index}
          optionText={element}
          removeOne={props.removeOne}
        >{`This is ${element}`}</Option>)
        })
      }
    </div>
  );
}

export default Options;