import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import players from "./players.json"
import {POS_FILTER, ROLE_FILTER, SORT_NUM} from "./utils/action"
import {Table, TableRow} from "./components/Table"

function App() {

  const [roster, setRoster] = useReducer((state, action) => {
    switch (action.type) {
      case SORT_NUM:
        var copy = state.allPlayers.slice()
        var sortedPlayers = copy.sort((a,b) => a-b)
        return {
          ...state,
          displayedPLayers: sortedPlayers
        }
        break

      case POS_FILTER:
        var filteredPlayers = state.filter(item => {
          return item.position === action.position
        })
        return {
          ...state,
          displayedPLayers: filteredPlayers
        }
        break
      
      case ROLE_FILTER:
        var filteredPlayers = state.filter(item => {
          return item.role === action.role
        })
        return {
          ...state,
          displayedPLayers: filteredPlayers
        }
        break
    }
  }, {
    allPlayers: players,
    displayedPLayers: players
  })

  return (
    <Table>
      
    </Table>
  );
}

export default App;
