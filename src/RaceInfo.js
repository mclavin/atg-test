import React from 'react'

import Races from './Races'

const RaceInfo = ({gameData, type}) => {
  if (gameData === null) return <h1>Loading game data</h1>
  return (
    <div>
      <h1>Game type: {type}</h1>
      <Races races={gameData.races} />
    </div>
  )
}

export default RaceInfo