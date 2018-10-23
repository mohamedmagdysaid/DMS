import React from 'react'
import './designdocuments.css'
import {Table,DropdownButton,MenuItem} from 'react-bootstrap'


class RFIs extends React.Component {
  constructor(){
    super()
    this.state={
      data : [],
    }
this.handleClick = this.handleClick.bind(this);
  }

fetchRfiData(){
  fetch('/design_documents/rfi?UDNID='+this.props.UDNID)
 .then(function(result){
   return result.json();
 })
 .then(result => this.setState({
   data:result.recordset,
 }))
}

componentDidMount(){
  this.fetchRfiData();
}
componentDidUpdate(prevProp){
  if (prevProp.UDNID !== this.props.UDNID) {
    this.fetchRfiData();
  }
}


handleClick(e){
  e.preventDefault();
    let rfiRef = e.currentTarget.getAttribute("href")
    console.log(e.currentTarget.getAttribute("href"));
    console.log(e.currentTarget.getAttribute("status"));
    if (e.currentTarget.id ==="issued") {
      window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+rfiRef+"&isWN=true&dMode=0&Number=00")
    }
    if (e.currentTarget.id ==="replied" && e.currentTarget.getAttribute("status")==="YES"){
      window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+rfiRef+"&isWN=true&dMode=0&Number00%2EC")
    }
    else if (e.currentTarget.getAttribute("status")!=="YES"){
      alert("RFI is not Responded Yet")
    }
}





// rendering the title
renderRfiTitle(){
  if (this.props.UDNID !=='') {
    return(
      <h3 className="titles">RFIs</h3>
    )
  }
}
// rendering table of rfi by UDNID prop which is drawing number
renderRfi(){
  let UDNID = this.props.UDNID;
  let handleClick = this.handleClick;
  if (this.props.UDNID === '') {

  }
  else
  return (
    <Table bordered condensed hover responsive >
      <thead id='tableheader'>
          <tr className="rfitable">
            <th>Drawing Number</th>
            <th>Reference ID</th>
            <th>Issue Date</th>
            <th>Reply Date</th>
            <th>Replied</th>
            <th>RFI Link</th>
          </tr>
      </thead>
      <tbody>
        {this.state.data.map(function(item,index){
          if (item.IssueDate ===null) {
            return item.IssueDate = "";
          }
          if (item.ReplyDate ===null) {
              return item.ReplyDate = ""
          }
          if (item.UDN === UDNID) {
            return(
              <tr key={index} id={item.UDN}   href={item.ReferenceID} status={item.Replied}>
                <th>{item.UDN}</th>
                <th>{item.ReferenceID}</th>
                <th>{item.IssueDate.substr(0,10)}</th>
                <th>{item.ReplyDate.substr(0,10)}</th>
                <th>{item.Replied}</th>
                  <DropdownButton className="rfilink" bssize = "large" bsStyle="default" pullRight title="RFI Link" key={item.UDN} id="pullRight split-button-dropup-pull-right">
                          <MenuItem id="issued" onClick={handleClick} href={item.ReferenceID} status={item.Replied}>Issued URL</MenuItem>
                          <MenuItem id="replied" onClick={handleClick} href={item.ReferenceID} status={item.Replied}>Replied URL</MenuItem>
                  </DropdownButton>
              </tr>
            )
          }
        })}
      </tbody>
    </Table>

  )}


  render(){
    return(
            <div>
              <div>
                  {this.renderRfiTitle()}
              </div>
              <div id='rfi'>
              {this.renderRfi()}
              </div>
            </div>
    )
  }
}


export default RFIs
