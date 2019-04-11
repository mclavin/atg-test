import React from 'react'

import Starter from './Starter'

const Starts = ({starts}) => {
  const renderStarts = starts.map((starter, i) => {
    console.log(starter)
    return (
      <Starter key={starter.driver.id+i} starter={starter} />
    )
  })

  return (
    <div className="starts">
      <h2>Starts</h2>
      {renderStarts}
    </div>
  )

}

export default Starts