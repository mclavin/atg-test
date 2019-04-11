import React, { Component } from 'react';
import './App.css';

import RaceInfo from './RaceInfo'

class App extends Component {

  state = {
    datePassed: false,
    type: '',
    gameId: null
  }

  request = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.atg.se/services/racinginfo/v1/api/products/${this.state.type}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then(resp => {
      return resp.json()
    }).then (jsonBody => {
      const { upcoming, results } = jsonBody
      let closestRace = ''
      if (upcoming.length === 1) closestRace = upcoming[0]
      else if (upcoming.length > 1) {
        upcoming.reduce((a, b) => a.startTime < b.startTime ? closestRace = a : closestRace = b);
      } else {
        results.reduce((a, b) => a.startTime < b.startTime ? closestRace = a : closestRace = b);
      }
      this.getRaces(closestRace.id)
    })
  }

  getRaces = (gameId) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then(resp => {
      return resp.json()
    }).then(jsonBody => {
      this.setState({
        gameData: jsonBody,
        gameId: gameId
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.request())
  }

  gameTypes = ['V75', 'V65', 'V64', 'V4']
  renderGameTypes = this.gameTypes.map(gameType => (
    <option key={`game-type-${gameType}`} value={gameType}>{gameType}</option>
  ))

  render() {
    const { 
      state: {
        type,
        gameId,
        gameData
      }, 
      handleChange, 
      renderGameTypes 
    } = this

    return (
      <div className="App">
        <select className="type" defaultValue="Select game type" name="type" onChange={handleChange}>
          <option disabled={type !== '' ? true : false} value="">Select game type</option>
          {renderGameTypes}
        </select>

        {
          gameId !== null
          ? <RaceInfo type={type} gameData={gameData} />
          : null
        }
      </div>
    );
  }
}

export default App;
