import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    };
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  //----> 1 destructuring in the arguments
  handleSubmit = (event) => {
      event.preventDefault()
      if (this.state.username === '' || this.state.password === '') {}
      else {
          this.props.onSubmit(this.state)
      }
  }


   //----> 2 destructure before passing in
   // handleSubmit = (event) => {
   //     event.preventDefault()
   //     const { username, password } = this.state;
   //     this.props.onSubmit(username, password)
   // }
   //
   // login = (username, password) => {
   //    console.log(`Logging in ${username} with password ${password}`);
   //  };

    //----> 3 Pass in as object
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     const { username, password } = this.state;
    //     this.props.onSubmit({
    //         username: this.state.username,
    //         password: this.state.password
    //     })
    // }
    //
    // login = ({ username, password }) => {
    //    console.log(`Logging in ${username} with password ${password}`);
    //  };

     //----> 4 No destructuring at all
     // handleSubmit = (event) => {
     //     event.preventDefault()
     //     const { username, password } = this.state;
     //     this.props.onSubmit(this.state)
     // }
     //
     // login = (state) => {
     //    console.log(`Logging in ${state.username} with password ${state.password}`);
     //  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
