import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
      <Smurfs smurfs={this.props.smurfs} />

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  smurfs: state.smurfs
});
export default connect(mapStateToProps, {getSmurfs})(App);
