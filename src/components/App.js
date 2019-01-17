import React from "react";
import style from "../index.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      loginSelected: false,
      user: undefined,
      mySQLStream: [],
      excelStream: [],
      sqlServerStream: [],
      getStarted: false,
      showSignUp: false,
      inUpState: "Sign In"
    };
    this.toggleInUp = this.toggleInUp.bind(this);
    this.handleLoginAttempt = this.handleLoginAttempt.bind(this);
  }
  componentDidMount() {
    this.setState({ showSignUp: true });
  }

  handleLoginAttempt(event) {
    event.preventDefault();
  }

  toggleInUp() {
    if (this.state.inUpState == "Sign In") {
      this.setState({ inUpState: "Sign Up" });
    } else {
      this.setState({ inUpState: "Sign In" });
    }
  }

  render() {
    return (
      <main className="core-app">
        {!this.state.loggedIn && (
          <section className="front-page-wrapper">
            <nav className="front-page-nav">
              <button
                className="front-page-login"
                onClick={e =>
                  this.setState(
                    {
                      loginSelected: !this.state.loginSelected,
                      showSignUp: !this.state.showSignUp
                    },
                    this.toggleInUp()
                  )
                }
              >
                {this.state.inUpState}
              </button>
              <label className="front-page-learn-more">Learn More</label>
            </nav>

            <section className="front-page-head-piece">
              <div className="swish" />
              <span className="slogan-underline-collective">
                <p className="front-page-slogan">Some slogan goes</p>
                <p className="here">here.</p>
              </span>
              <p className="front-page-about-line">
                About DataSnippet, lorem ipsum dolor et cetera.
              </p>
              <CSSTransition
                in={this.state.showSignUp}
                classNames="rise"
                timeout={300}
                unmountOnExit
              >
                <SignUpForm />
              </CSSTransition>

              <CSSTransition
                in={this.state.loginSelected}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <LoginForm handleLoginAttempt={this.handleLoginAttempt} />
              </CSSTransition>
            </section>

            <section className="rest-of-app-temp" />
          </section>
        )}
      </main>
    );
  }
}

export default App;
