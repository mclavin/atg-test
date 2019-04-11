import React from 'react'

class Starter extends React.Component {
  
  state = {
    expanded: false
  }

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  
  render() {
    const { expanded } = this.state 
    const {
      starter: {
        number,
        driver,
        horse
      } 
    } = this.props
    return (
      <div className={`starter ${expanded ? 'starter--expanded' : ''}`}>
        <div>
          <b className="starter_label">Start number: </b><span className="starter_value">{number}</span>
        </div>
        <div>
          <b className="starter_label">Horse: </b><span className="starter_value">{horse.name}</span>
        </div>
        <div>
          <b className="starter_label">Driver: </b><span className="starter_value">{driver.firstName} {driver.lastName}</span>
        </div>
        {
          expanded
          ? 
            <React.Fragment>
              <div className="starter__extras">
                <div>
                  <b className="starter_label">Trainer: </b><span className="starter_value">{horse.trainer.firstName} {horse.trainer.lastName}</span>
                </div>
              </div>
              <div className="starter__extras">
                <div>
                  <b className="starter_label">Horse father: </b><span className="starter_value">{horse.pedigree.father.name}</span>
                </div>
              </div>
            </React.Fragment>
          : null
        }
        <button className="expand_btn" onClick={this.toggleExpand}>Expand</button>
      </div>
    )
  }
}

export default Starter