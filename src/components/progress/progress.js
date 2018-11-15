import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import './progress.css'
import AbtModelProgress from './abtmodelprogress'
import CurrentProgress from './currentprogress'
import './sidebar.css'
import ProgressSidebar from './sidebar'
import ProgressByBD from './progressbypackage/progressbybd'
import ProgressByPackage from './progressbypackage/progressbypackage'

class Progress extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      dataFromSidebar:""
    }
this.callBackfromSidebar = this.callBackfromSidebar.bind(this)
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

renderProgressComponents(){
  if (this.state.dataFromSidebar === "" || this.state.dataFromSidebar === "Progress") {
    return (
      <div>
      <div>
        <p className='progress-header'>As-built Models Progress</p>
        <AbtModelProgress data={this.state.data}/>
      </div>
      <div>
        <p className='progress-header'>Progress of Submitted Models</p>
        <CurrentProgress data={this.state.data}/>
      </div>
      </div>
    )
  }
  if (this.state.dataFromSidebar === "Progress by Package") {
      return <ProgressByPackage data={this.state.data}/>
  }
  if (this.state.dataFromSidebar === "Progress by Area & Discipline") {
      return <ProgressByBD data={this.state.data}/>
  }
}
callBackfromSidebar(value){
  this.setState(
    {dataFromSidebar:value}
  )
}

render(){
  return(
    <div  className='container-fluid maindesign'>
    <div className = 'col-md-3' >
      <ProgressSidebar getData={this.callBackfromSidebar}/>
    </div>
    <div className = 'col-md-9' >
          {this.renderProgressComponents()}
    </div>
    </div>
  )
}


}

export default Progress;
