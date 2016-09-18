import React from "react";
import {withRouter} from "react-router";
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
  }

  componentDidUpdate(){
    if (this.props.loggedIn){
			this.props.router.push("/");
		}
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render () {
    const buttonDisplay = (this.props.formType) === 'login' ? "Log In" : "Sign Up";
    const otherForm = (this.props.formType) === 'login' ? "/signup" : "/login";
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));
    const phrase = (this.props.formType) === 'login' ? "Not yet a user?" : "Already a user?";
    return (
      <div>
        <h3>Welcome!</h3>
        <form onSubmit={this.handleSubmit}>
          Username<input type="text"  onChange={this.updateFields("username")}/>
          Password<input type="text" onChange={this.updateFields("password")}/>
          <input type="submit" value={buttonDisplay}/>
        </form>
        {phrase}
        <Link to={otherForm}>{otherForm.slice(1).toUpperCase()}</Link>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}

export default withRouter(SessionForm);
