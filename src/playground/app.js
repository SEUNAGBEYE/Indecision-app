
class IndecisionApp extends React.Component {

  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.randomPicker = this.randomPicker.bind(this);
    this.handlesOnSubmit = this.handlesOnSubmit.bind(this);
    this.state = {
      options: props.options
    }
  }

  removeAll(){
    this.setState(() => ({ options: [] }));
  }

  removeOne(optionToRemove){
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
  }

  randomPicker(){
    const randIndex = Math.floor(Math.random() * this.state.options.length)
    return alert(this.state.options[randIndex]);
  }

  handlesOnSubmit(option){
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option Already exist';
    }

    this.setState(() => ({options: this.state.options.concat(option)}));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({options}))
      }
    } catch (error) {
      
    }
  }

  componentDidUpdate(prevProps, prevState){
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
        <Action randomPicker={this.randomPicker} hasOption = {this.state.options.length > 0}/>
        <Options options={this.state.options} removeAll={this.removeAll} removeOne={this.removeOne}/>
        <AddOption handlesOnSubmit={this.handlesOnSubmit} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return(
    <div>
      <button
       onClick={props.randomPicker}
       disabled={props.hasOption ? false: true}
      > What Should I DO?</button>
    </div>
  );
}

const Options = (props) => {
  return(
    <div>
      {props.options.length <= 0 && <p>Please add an option to get started</p>}
      {props.options.length >= 1 && <button onClick={props.removeAll}>Remove All</button>}
      { props.options.map((element) => {
        return (
        <Option 
          key={element} 
          optionText={element}
          removeOne={props.removeOne}
        >{`This is ${element}`}</Option>)
        })
      }
    </div>
  );
}

const Option = (props) => {
  return(
    <div>
      {
        props.optionText
      }
      <button onClick={(e) => {props.removeOne(props.optionText)}}>remove</button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handlesOnSubmit = this.handlesOnSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  handlesOnSubmit(e){
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handlesOnSubmit}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
        
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options = {['One', 'Two', 'Three']}/>, document.getElementById('app'));
