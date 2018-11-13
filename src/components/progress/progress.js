import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import './progress.css'
import AbtModelProgress from './abtmodelprogress'
import CurrentProgress from './currentprogress'
import './sidebar.css'
import Sidebar from './sidebar'
import ProgressByBuilding from './progressbybuilding'

class Progress extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
    }
  }


componentDidMount(){
  this.fetchAbtData();
}

fetchAbtData(){
    fetch('/abtmodels')
   .then(function(result){
     return result.json();
     })
   .then(result => this.setState({
   data:result.recordset,
  }))
  }




render(){
  return(
    <div  className='container-fluid maindesign'>
    <div className = 'col-md-3' >
      <Sidebar />
    </div>
    <div className = 'col-md-9' >
    <div>
      <p className='progress-header'>As-built Models Progress</p>
      <AbtModelProgress data={this.state.data}/>
    </div>
    <div>
      <p className='progress-header'>Current Progress</p>
      <CurrentProgress data={this.state.data}/>
    </div>
    <div>
      <p className='progress-header'>Current Progress by Area</p>
      <ProgressByBuilding data={this.state.data}/>
    </div>

    </div>
    </div>
  )
}


}

export default Progress;
