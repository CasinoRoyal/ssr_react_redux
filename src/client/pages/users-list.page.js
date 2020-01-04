import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers }  from '../redux/actions/actions';

class UsersList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  };

  renderUsers() {
    return this.props.users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  renderHead() {
    return(
      <Helmet>
        <title>{`${this.props.users.length} users`}</title>
        <meta property="og:title" content="App users list" />
      </Helmet>
    );
  }

  render() {
    return(
      <div>
        { this.renderHead() }
        
        <h2>List of users:</h2>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  users: state.users
});

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData: ({ dispatch }) => dispatch(fetchUsers())
}