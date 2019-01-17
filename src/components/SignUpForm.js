import React from "react";

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.validateNewUser = this.validateNewUser.bind();
  }
  validateNewUser(event) {
    event.preventDefault();
  }
  render() {
    return (
      <section className="sign-up-section">
        <p className="sign-up-form-title">Sign Up</p>
        <form onSubmit={this.validateNewUser} className="sign-up-form">
          <input className="sign-up-input" placeholder="First Name" />
          <input className="sign-up-input" placeholder="Last Name" />
          <input className="sign-up-input" placeholder="Email" />
          <input
            className="sign-up-input"
            type="password"
            placeholder="Password"
          />
          <button className="get-started-button" type="submit">
            Sign Up
          </button>
        </form>
      </section>
    );
  }
}

export default SignUpForm;
