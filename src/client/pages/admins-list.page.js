import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins }  from '../redux/actions/actions';
import RequiredAuth from '../components/hocs.component';

class AdminsList extends Component {

  componentDidMount() {
    this.props.fetchAdmins();
  };

  renderAdmins() {
    return this.props.admins.map((admin) => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  render() {
    return(
      <div>
        <h2>List of admins:</h2>
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  admins: state.admins
});

export default {
  component: connect(mapStateToProps, { fetchAdmins })(RequiredAuth(AdminsList)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}