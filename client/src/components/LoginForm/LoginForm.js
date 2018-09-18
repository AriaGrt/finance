import React, {Component} from 'react'

export default class LoginForm extends Component{
  state = {
    formValues: {
      email: "",
      password: ""
    }
  }

  sendData = async () => {
    console.log('here')
    const response = await fetch('/api/login'); //add post
    if(response.status !== 200) throw Error(response.body.message);
    console.log('Response passed')
  }

  render(){
    return(
      <div>
        <button onClick={this.submitLoginForm}>Submit</button>
      </div>
    )
  }
}
