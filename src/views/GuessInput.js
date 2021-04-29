import React from 'react'

class GuessInput extends React.Component(){
    constructor(props){
      super(props)
      this.state = {
        allowInput: false,
        //store guess
        inputValue: undefined,
        indexValue: this.props.index
      }
      this.handleInput = this.handleInput.bind(this)
    }

    handleInput(){
      this.setState({allowInput: true})
    }

    render(){
      return(
        <>
          <div onClick={input => this.handleInput()}>

          </div>

        </>
      )
    }
}