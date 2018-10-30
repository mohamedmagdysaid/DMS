import React from 'react'
import './designdocuments.css'
//import {Table,DropdownButton,MenuItem} from 'react-bootstrap'
import { Column, Table } from 'react-virtualized';

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

    let rfiRef = e.rowData.ReferenceID
    console.log(e.rowData.ReferenceID);

    if (e.rowData ==="issued") {
      window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+rfiRef+"&isWN=true&dMode=0&Number=00")
    }
    if (e.rowData.Replied==="Yes"){
      window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+rfiRef+"&isWN=true&dMode=0&Number00%2EC")
    }
    else if (e.rowData.Replied !== "YES"){
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

                <Table
                      width={1400}
                      height={300}
                      headerHeight={20}
                      rowHeight={30}
                      rowCount={this.state.data.length}
                      rowGetter={({ index }) => this.state.data[index]}
                      onRowClick= {handleClick}

                >
                <Column
                  width={350}
                  label='Drawing Number'
                  dataKey='UDN'
                />
                  <Column
                    label='Reference ID'
                    dataKey='ReferenceID'
                    width={200}
                  />
                  <Column
                    width={300}
                    label='Issue Date'
                    dataKey='IssueDate'
                  />
                  <Column
                    width={200}
                    label='Reply Date'
                    dataKey='ReplyDate'

                  />
                  <Column
                    width={100}
                    label='Replied'
                    dataKey='Replied'
                  />

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
