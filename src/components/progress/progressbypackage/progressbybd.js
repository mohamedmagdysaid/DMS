import React from 'react';
import ProgressByDiscipline from './progressbydiscipline'
import ProgressByBuilding from './progressbybuilding'

class ProgrssByBD extends React.Component{
  constructor(){
    super()
  }
render(){
  return(
    <div>
    <div>
      <p className='progress-header'>Progress By Area</p>
      <ProgressByBuilding data={this.props.data} />
    </div>
    <div>
      <p className='progress-header'>Progress By Discipline</p>
      <ProgressByDiscipline data={this.props.data} />
    </div>
    </div>
  )
}

}

export default ProgrssByBD;
