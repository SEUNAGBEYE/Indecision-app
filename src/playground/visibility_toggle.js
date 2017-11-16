class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: false
    }
    this.toggleVisibity = this.toggleVisibity.bind(this);

  }
  toggleVisibity(){
    
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
    this.visibility = !this.visibility;
    return this.visibility;;
  }

	render(){
		return (
			<div>
			  <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibity}>
          {this.visibility ? 'Hide details': 'Show details'}
        </button>
        {this.visibility && (
          <p>Hey. These are some details you can now see!</p>
        )}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('seun'))