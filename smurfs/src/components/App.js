import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf'

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
      <AddSmurf addSmurf={this.props.addSmurf} />

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  addingSmurf: state.addingSmurf
});
export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
