import React from "react";
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(event) {
    this.props.handleLoginAttempt(event, this.state.email, this.state.password);
  }
  render() {
    return (
      <section className="login-section">
        <p className="login-form-title">Sign In</p>
        <form onSubmit={this.handleLogin} className="login-form">
          <input
            value={this.state.email}
            placeholder="Email"
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
            className="email-input"
          />

          <input
            value={this.state.password}
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            className="password-input"
          />
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
