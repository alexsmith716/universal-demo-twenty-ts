import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet-async';

import { withRouter } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';

import { Link } from 'react-router-dom';

@withRouter

class Login extends Component {

  // static propTypes = {
  //   user: PropTypes.shape({ email: PropTypes.string }),
  //   history: PropTypes.objectOf(PropTypes.any).isRequired
  // };

  static defaultProps = {
    user: null // true
  };

  render() {

    const { user, logout } = this.props;
    const styles = require('./scss/Login.scss');
    const googleIcon = require('../../components/GoogleLogin/images/icon-google.png');

    return (

      <div className="container">

        <div className={styles.loginContainer}>

          <Helmet title="Login" />

          {!user && (

            <div className="d-flex justify-content-center">

              <div className={styles.login}>

                <div className={`mb-3 ${styles.formTitle}`}>
                  <p>
                    Sign in to Election App
                  </p>
                </div>

                <div className={styles.formContainer}>

                  <LoginForm onSubmit="" />

                  <div className={`mt-3 mb-3 font-weight-600 ${styles.signInWith}`}>
                    <p>Or sign in with</p>
                  </div>

                  <div className="d-flex justify-content-between">

                    <div>
                      <a href="#" className="m-b-10 d-flex justify-content-center align-items-center button-facebook">
                        <i className="fab fa-facebook-square"></i>
                        Facebook
                      </a>
                    </div>

                    <div>
                      <a href="#" className="m-b-10 d-flex justify-content-center align-items-center button-google">
                        <img src={googleIcon} alt="Google Login" />
                        Google
                      </a>
                    </div> 

                  </div>

                </div>

                <div className={`mt-4 d-flex justify-content-center ${styles.createAccount}`}>
                  <div>
                    Not a member?
                    <Link to='/register' className="js-scroll-trigger">Create an account</Link>.
                  </div>
                </div>

              </div>
            </div>

          )}

          {user && (

            <div>

              <p>You are currently logged in as Elmer Fudddd. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>

              <div>
                <button className="btn btn-danger">
                  <i className="fas fa-sign-out-alt" /> Log Out
                </button>
              </div>
            </div>

          )}

        </div>
      </div>
    );
  }
}

export default Login;
