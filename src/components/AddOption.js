import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined
    }

    handlesOnSubmit = (e) =>{
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error =this.props.handlesOnSubmit(option);
      if (option){
        this.props.handlesOnSubmit(option);
      }
  
      this.setState(() => ({error}));
  
      if(!error){
        e.target.elements.option.value = '';
      }
  
    }
    render(){
      return(
        <div>
          {this.state.error && <p className='add-option__error'>{this.state.error}</p>}
          <form onSubmit={this.handlesOnSubmit} className='add-option'>
            <input type='text' name='option' className='add-option__input'></input>
            <button className='button'>Add Option</button>
          </form>
          
        </div>
      );
    }
  }