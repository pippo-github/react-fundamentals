import React from 'react'

class Btn extends React.Component {
    constructor(props){
      super(props);
      this.state = {btnState: false}
    }
  
    handleBtnClick(){
      this.setState({
        btnState: !this.state.btnState
      })
    }
  
    render(){
      return(
        <div>
          { this.state.btnState ? "btn stato true" : "btn stato false"}
          <button onClick={ () => this.handleBtnClick()}> { this.props.labelBtn } </button>
        </div>
      )
    }
    
  }

  
  export default Btn;