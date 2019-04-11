import React from 'react'

import Starts from './Starts'

const Races = ({ races }) => {
  const renderRaces = races.map(race => (
    <li className="race" key={race.id}>
      <div>
        <span className="race_name">Race number: <span className="race_value">{race.number}</span></span>
      </div>
      <div>
        <span className="race_name">Name: <span className="race_value">{race.name || 'Race name missing'}</span></span>
      </div>
      <div>
        <span className="race_name">Start Time: <span className="race_value">{race.startTime}</span></span>
      </div>
      <Starts starts={race.starts} />
    </li>
  ))
  return (
    <ul className="races">
      {renderRaces}>
    </ul>
  )
}

export default Races