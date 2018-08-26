import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from  './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: 'Kacper',
          score: 7,
        },
        {
          name: 'Karolina',
          score: 5,
        }
      ]
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    }, this.onScoreSort);
  }

  onPlayerAdd = (playerName) => {
    if (!playerName) {
      alert('Enter player name!')
    } else {
      const newPlayer = {
        name: playerName,
        score: 0,
      };
      this.setState({
        players: [ ...this.state.players, newPlayer ]
      }, this.onScoreSort)
    }
  }

  onPlayerRemove = (playerIndex) => {
    if (window.confirm('Are your sure you want to remove this player?')) {
      this.setState({
        players: this.state.players.filter((player, index) => index !== playerIndex)
      });
    }
  }

  onPlayerUpdate = (playerIndex, playerNewName) => {
    this.setState({
      players: this.state.players.map((player, index) => {
          if (index === playerIndex) {
            return { ...player, name: playerNewName};
          }
          return player;
      })
    })
  }

  onScoreSort = () => {
    this.setState({
      players: this.state.players.sort((a ,b) => {
        return b.score - a.score;
      })
    })
  }

  resetScores = () => {
    console.log('dziala');
    this.setState({
      players: this.state.players.map(player => {
        return { ...player, score: 0}
      })
    })
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
          onPlayerUpdate={this.onPlayerUpdate}
        />
        <button className="Reset_list" onClick={() => this.resetScores()}>Reset</button>
      </div>
    );
  }
}

export default App;
