import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  const authButton = auth.currentUser ? (
    <a className="navbar-item" href="/api/logout">Logout</a>
  ) : (
    <a className="navbar-item" href="/api/auth/google">Login</a>
  );

  return(
    <div className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">SSR</Link>
      </div>
      <Link className="navbar-item" to="/users">Users</Link>
      <Link className="navbar-item" to="/admins">Admins</Link>
      {authButton}
    </div>
  )
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);