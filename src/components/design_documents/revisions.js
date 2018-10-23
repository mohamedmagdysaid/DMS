import React from 'react'
import './designdocuments.css'
import {Table} from 'react-bootstrap'

class DrawingRevisions extends React.Component {
  constructor() {
      super()
        this.state={
          data : [],
        }
this.handleRowClick = this.handleRowClick.bind(this);
  }

fetchData(){
  fetch('/design_documents/revisions')
 .then(function(result){
   return result.json();
 })

 .then(result => this.setState({
   data:result.recordset,
 }))
}


//fetching data from server
  componentDidMount() {
        this.fetchData();
   };

   



// handle click by get attribute of href and opening it
handleRowClick(e){
  e.preventDefault();
  console.log(e.currentTarget.getAttribute('href'))
  window.open(e.currentTarget.getAttribute('href'))
}

//rendering the component table


revisionTitle(){
  if (this.props.UID !=="") {
    return(

      <h2 className="titles">
        Drawing Revisions
      </h2>
    )
  }
}


renderRevision(){
  let UID = this.props.UID
  let handleRowClick = this.handleRowClick;
  if (this.props.UID === '') {

  }

  else
  return(

  <Table bordered condensed hover responsive >
    <thead id='tableheader'>
        <tr className="revtable">
          <th>Drawing Number</th>
          <th>Package</th>
          <th>Transmittal</th>
          <th>Recieved Date</th>
          <th>Revision</th>
          <th>Latest</th>
        </tr>
    </thead>
    <tbody>


      {this.state.data.map(function(item,index){
        if (item.RecieveDate ===null) {
          return item.RecieveDate = ""
        }
        if (item.MLID === parseInt(UID)) {


          return(
            <tr key={index} id={item.MLID} onClick={handleRowClick} href={item.VBCURL}>
              <th>{item.UDN}</th>
              <th>{item.Package}</th>
              <th>{item.Transmittal}</th>
              <th>{item.RecieveDate.substr(0,10)}</th>
              <th>{item.Revision}</th>
              <th>{item.Latest}</th>
            </tr>
          )
        }

      })}

    </tbody>
  </Table>

)};


render(){
  return(
    <div>
        <div className="revisionTitle">
        {this.revisionTitle()}
        </div>
        <div id='revision'>
          {this.renderRevision()}
        </div>

    </div>
  )
}
}

export default DrawingRevisions
