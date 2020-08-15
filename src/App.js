import React, { useReducer } from 'react';
import players from "./players.json"
import { POS_FILTER, ROLE_FILTER, SORT_NUM, SHOW_ALL } from "./utils/action"
import { Table, TableRow } from "./components/Table"
import SortTab from "./components/SortTab"
import FilterPosition from "./components/FilterPosition"
import FilterSide from "./components/FilterSide"
import Col from "./components/Col"
import Row from "./components/Row"
import Header from './components/Header';
import "./Appstyle.css"

function App() {

  const [roster, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SORT_NUM:
        var copy = state.displayedPlayers.slice()
        if (state.order === -1) {
          var sortedPlayers = copy.sort((a, b) => a.number - b.number)
          var order = 1
        }
        else {
          var sortedPlayers = copy.sort((a, b) => b.number - a.number)
          var order = -1
        }

        return {
          ...state,
          displayedPlayers: sortedPlayers,
          order: order
        }
        break

      case POS_FILTER:
        var filteredPlayers = state.allPlayers.filter(item => {
          return item.position === action.position
        })

        return {
          ...state,
          displayedPlayers: filteredPlayers,
          filtered: true,
          side: "both"
        }
        break

      case ROLE_FILTER:
        if (action.side === "both") {
          return {
            ...state,
            displayedPlayers: state.allPlayers,
            side: "both",
            filtered: false
          }
        }
        else {
          var filteredPlayers = state.allPlayers.filter(item => {
            return item.side === action.side
          })
          return {
            ...state,
            displayedPlayers: filteredPlayers,
            side: action.side,
            filtered: false
          }
        }
        break

      case SHOW_ALL:
        return {
          ...state,
          displayedPlayers: state.allPlayers,
          filtered: false
        }
    }
  }, {
    allPlayers: players,
    displayedPlayers: players,
    order: -1,
    side: "both",
    filtered: false
  })

  return (
    <div className="container">
      <Header />

      <Row>
        <Col size="col s6 push-s3">
          <SortTab reducer={[roster, dispatch]} />
        </Col>
      </Row>
      <Row>
        <FilterSide reducer={[roster, dispatch]} />
      </Row>
      <Row>
        <Col size="col s8 push-s2 m6 push-m3">
          <div className="center-align">
            <FilterPosition reducer={[roster, dispatch]} />
          </div>
        </Col>
      </Row>

      <Table>
        {roster.displayedPlayers.map(player => {
          return <TableRow key={player.id} player={player} />
        })}
      </Table>
    </div>
  );
}

export default App;
