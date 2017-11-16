import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  } 

  removeAll = () => {
    this.setState(() => ({ options: [] }));
  }

  removeOne = (optionToRemove) => {
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
  }
    
  randomPicker = () => {
    const randIndex = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randIndex]
    this.setState(() => ({selectedOption}));
  }

  closeModal = () => {
    const selectedOption = !this.state.selectedOption
    this.setState(() => ({selectedOption}));
  }

  handlesOnSubmit = (option) => {
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option Already exist';
    }

    this.setState(() => ({options: this.state.options.concat(option)}));
  }
    
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({options}))
      }
    } catch (error) {
      
    }
  }
    
  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  }
    
    
  render(){
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title = {title} subtitle = {subtitle} />
        <div className='container'>
        <Action randomPicker={this.randomPicker} hasOption = {this.state.options.length > 0}/>
        <div className='widget'>
          <Options options={this.state.options} removeAll={this.removeAll} removeOne={this.removeOne}/>
          <AddOption handlesOnSubmit={this.handlesOnSubmit} />
          <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
        </div>
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}
