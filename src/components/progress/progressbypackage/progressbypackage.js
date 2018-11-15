import React from 'react';
import ProgrssBySC from './progressbysc'


class ProgrssByPackage extends React.Component{
  constructor(){
    super()
  }
render(){
  return(
    <div>
      <p className='progress-header'>Progress By Package</p>
      <ProgrssBySC data={this.props.data} />
    </div>
  )
}

}

export default ProgrssByPackage;
