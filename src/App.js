import React from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.weapon = '';
  }

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({weapon: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewWeapon(this.state.weapon);
  };

  render() {
    return(
        <>
          {
          this.props.weapons.map(weapon =>
          <li>{weapon}</li>)
          }

          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.weapon}
              onChange={this.handleChange}
              placeholder='Enter a Weapon of your choice'
              />
            <button type='submit'>Create a new Weapon</button>
          </form>
          </>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      weapons: state.weapons,
    }
  };

const mapDispatchToProps = (dispatch) => {
  return {
    createNewWeapon: (weaponName) => {
      dispatch({
        type: 'WEAPON_CREATE',
        payload: weaponName,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
