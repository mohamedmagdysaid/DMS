import React from 'react'
import {Table} from 'react-bootstrap'
import './sdrevision.css'

class  ShopDrawingRevision extends React.Component {
    constructor(){
      super()
      this.state={
        data:[],
      }
    }
fetchShopDrawingRevisionData(){
      fetch('/shopdrawings/revision?SDID='+this.props.SD)
     .then(function(result){
       return result.json();
     })
     .then(result => this.setState({
       data:result.recordset,
     }))   
}

componentDidMount(){
      this.fetchShopDrawingRevisionData();
  }
    componentDidUpdate(prevProp){
      if (prevProp.SD !== this.props.SD) {
        this.fetchShopDrawingRevisionData();
      }
}

renderShopRevision(){

  let SDID = this.props.SD

  if (this.props.SD === '') {

  }

  else
  return(

  <Table bordered condensed hover responsive >
    <thead id='tableheader'>
        <tr className="revtable">
          <th>Drawing Number</th>
          <th>Version</th>
          <th>Issued for</th>
          <th>Issue Date</th>
          <th>Date Recieved</th>
          <th>Date Commented</th>
          <th>Code</th>
          <th>Planned Date</th>
          <th>ForeCast Date</th>
        </tr>
    </thead>
    <tbody>


      {this.state.data.map(function(item,index){

        return(
            <tr key={index} id={item.DocumentID}>
              <th>{item.DocumentID}</th>
              <th>{item.Version}</th>
              <th>{item.RevIssuedFor}</th>
              <th>{item.RevIssueDate}</th>
              <th>{item.IncomingDate}</th>
              <th>{item.CommentDate}</th>
              <th>{item.CommentCode}</th>
              <th>{item.PlannedDate}</th>
              <th>{item.ForeCastDate}</th>
            </tr>
          )


      })}




</tbody>
</Table>

)};

revisionTitle(){
  if (this.props.SD !=="") {
    return(

      <h2 className="titles">
        Shop Drawing Revisions
      </h2>
    )
  }
}

  render(){
    return(
      <div>
      <div className="revisionTitle">
      {this.revisionTitle()}
      </div>
        <div  id='revision'>
        {this.renderShopRevision()}
        </div>
        </div>
    )
  }
}

export default ShopDrawingRevision;
