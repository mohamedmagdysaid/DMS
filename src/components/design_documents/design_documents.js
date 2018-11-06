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
      datafromRfi:'',
      RfiStatus:'',
      compareToInti:'',
      compareToPrev:'',

    }
this.handleChange = this.handleChange.bind(this);
this.handleRowClick = this.handleRowClick.bind(this);
this.callBackfromRfi = this.callBackfromRfi.bind (this);
this.callBackfromRev  = this.callBackfromRev.bind(this);
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


 callBackfromRfi(value){
   this.setState({datafromRfi:value.RfiRef,
                    RfiStatus:value.RfiStatus})
 }


callBackfromRev(value){
  this.setState({
    compareToInti : value.compareToInti,
    compareToPrev: value.compareToPrev
  })
}



renderDesignDocuments(){

      let handleRowClick=this.handleRowClick;
      let handleChange= this.handleChange;

      return(
        <Table
              width={1100}
              height={300}
              headerHeight={20}
              rowHeight={30}
              rowCount={this.state.data.length}
              rowGetter={({ index }) => this.state.data[index]}
              onRowClick= {handleRowClick}
              onChange={handleChange}
        >
        <Column
          width={300}
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
                <Sidebar RfiRef={this.state.datafromRfi} RfiStatus={this.state.RfiStatus} compareToInti={this.state.compareToInti} compareToPrev={this.state.compareToPrev}/>
            </div>
            <div className = 'col-md-9'>
                      <h1 className="titles">Design Documents</h1>

                      <div>
                          {this.renderDesignDocuments()}
                      </div>
                      <div>
                          <DrawingRevisions UID={this.state.UID} getURL={this.callBackfromRev}/>
                      </div>
                      <div>
                          <RFIs UDNID={this.state.UDN} getRfi={this.callBackfromRfi}/>
                      </div>
                </div>
      </div>
    )
  }
}

export default Design_documents;
