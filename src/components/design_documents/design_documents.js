import React from 'react';
import {FormControl,FormGroup} from 'react-bootstrap'
import './designdocuments.css'
import DrawingRevisions from './revisions'
import RFIs from './rfis'
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import Sidebar from './sidebar'



class Design_documents extends React.Component{
  constructor(){
    super()
    this.state={
      searchValue:'',
      data:[],
      UID:'',
      color:'',
      UDN:'',

    }
this.handleChange = this.handleChange.bind(this);
this.handleRowClick = this.handleRowClick.bind(this);
  }

// handling click on table to pass a propety to revision component

handleRowClick(e){

    console.log(e.rowData);
  this.setState({
    UID : e.rowData.UDN,
    UDN : e.rowData.UDN
  })



}


// handle the change of the search
handleChange(e){
  e.preventDefault();
  this.setState({
    searchValue : e.currentTarget.value
  })


}


//   Data fetched from drawings table database


fetchDesignDocument(){
  fetch('/design_documents?search='+this.state.searchValue)
 .then(function(result){
   return result.json();
 })
 .then(result => this.setState({
   data:result.recordset,

 }))

}
componentDidMount() {
      this.fetchDesignDocument();
 };

 componentDidUpdate(prevProp,prevState){
   if (prevState.searchValue!==this.state.searchValue) {
     this.fetchDesignDocument();
   }
 }

renderDesignDocuments(){

      let handleRowClick=this.handleRowClick;
      let handleChange= this.handleChange;

      return(
        <Table
              width={1400}
              height={300}
              headerHeight={20}
              rowHeight={30}
              rowCount={this.state.data.length}
              rowGetter={({ index }) => this.state.data[index]}
              onRowClick= {handleRowClick}
              onChange={handleChange}
        >
        <Column
          width={200}
          label='Drawing Number'
          dataKey='UDN'
        />
          <Column
            label='Title'
            dataKey='Title'
            width={500}
          />
        </Table>
      )
}




//rendering design documents


  render(){

    return(
      <div className='container-fluid maindesign'>
        <form>

                <FormGroup>
                          <FormControl
                          type="text"
                          value={this.state.searchValue}
                          placeholder="Search Drawings..."
                          onChange={this.handleChange}
                        />
                  </FormGroup>
          </form>

            <div className = 'col-md-3' >
                <Sidebar />
            </div>
            <div className = 'col-md-9'>
                      <h1 className="titles">Design Documents</h1>


                      <div>
                          {this.renderDesignDocuments()}
                      </div>
                      <div>
                          <DrawingRevisions UID={this.state.UID}/>
                          {console.log(this.state.UID)}
                      </div>
                      <div>
                          <RFIs UDNID={this.state.UDN} />
                      </div>
                </div>
      </div>
    )
  }
}

export default Design_documents;
