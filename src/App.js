import React from 'react';
import Header from './components/header'
import DesignDocuments from './components/design_documents/design_documents'
import './App.css'

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
  console.log(this.state.datafromHeader);
}

//rendering the design documnets after the click
renderDesigndocuments(){
  if (this.state.datafromHeader==="Design Documents"){
    return <DesignDocuments />
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
      <div >
        <Header getData={this.callBackfromheader}/>
        <div className="header">
          {this.renderMainTheme()}
        </div>
        <div className='container-fluid'>
        {this.renderDesigndocuments()}
        </div>
      </div>
    )
  }
}

export default App;
