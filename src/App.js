import React from 'react';
import Header from './components/header'
import DesignDocuments from './components/design_documents/design_documents'
import './App.css'
import ShopDrawings from './components/shopdrawings/shopdrawings'
import AbtModels from './components/abt_models/abt_models'
import Progress from './components/progress/progress'

class App extends React.Component{
  constructor(){
    super()
    this.state={
//inital value of data coming from header
      datafromHeader : "",
    }
    this.callBackfromheader=this.callBackfromheader.bind(this)
  }
// callback function to retierve the date from the header and assign it to the new value
callBackfromheader(value){
  this.setState({datafromHeader:value})

}

//rendering the design documnets after the click
renderComponent(){
  if (this.state.datafromHeader==="Design Documents"){
    return <DesignDocuments />
  }
  if (this.state.datafromHeader==='Shop Drawings') {
  return <ShopDrawings />
}
if (this.state.datafromHeader === 'LOD500 Models') {
  return <AbtModels />
}
if (this.state.datafromHeader === 'Progress') {
  return <Progress />
}
}

renderMainTheme(){

    if (this.state.datafromHeader==="") {
      return  <p className="lead text-center" >Document Interface Management System</p>
    }
    else {
      return <p className="lead text-center" >{this.state.datafromHeader}</p>
    }

}

  render(){
    return(

      <div className="container-fluid">
        <Header getData={this.callBackfromheader}/>
        <div className="header">
          {this.renderMainTheme()}
        </div>
        <div className='container-fluid col-xs-12 col-md-12 responsive test'>
        {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default App;
