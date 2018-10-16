import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Hello, world!</h1>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return state;
}

export default connect(mapStateToProps)(Home);
