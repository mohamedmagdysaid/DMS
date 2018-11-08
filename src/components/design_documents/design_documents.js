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
      searchData:'',



    }
this.handleChange = this.handleChange.bind(this);
this.handleRowClick = this.handleRowClick.bind(this);
this.callBackfromRfi = this.callBackfromRfi.bind (this);
this.callBackfromRev  = this.callBackfromRev.bind(this);
this.callBackfromFilter = this.callBackfromFilter.bind(this);
  }

// handling click on table to pass a propety to revision component

handleRowClick(e){

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
  let searched = e.currentTarget.value;
  this.setState({
    data : this.state.data.filter(function(item){

      if (item.Title === null) {
        return item.Title = "";
      }

      let filterData = item.UDN.toLowerCase() + item.Title.toLowerCase()


      if (e.currentTarget.value.includes(" ")) {
          let newSearched = searched.split(" ")
          let finalQuery
          for (var i = 1; i < newSearched.length; i++) {
          let  firstQuery = filterData.indexOf(newSearched[0].toLowerCase()) !== -1
          let    itterated = filterData.indexOf(newSearched[i].toLowerCase()) !== -1

          console.log(newSearched.length);
          if (i <= 1) {
            finalQuery = firstQuery & itterated
          }
            else {
                finalQuery = finalQuery & itterated;
              }
          }
          return finalQuery
      }


/**
if (e.currentTarget.value.includes(" ")) {
      let newSearched = searched.split(" ");

      let firstQ  = filterData.indexOf(newSearched[0].toLowerCase()) !== -1

      let itterated =filterData.indexOf(newSearched[0].toLowerCase()) !== -1
      let finalQ

      for (var i = 0; i < newSearched.length; i++) {
          let searching = filterData.indexOf(newSearched[i].toLowerCase()) !== -1
          console.log(newSearched[1]);
            itterated = itterated & searching;

      }

      finalQ = firstQ & itterated;
      console.log(finalQ)
      return  finalQ


}
*/
      else{
        return filterData.indexOf(searched.toLowerCase()) !== -1
      }
  //    return  (item.UDN.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) !==-1 || item.Title.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) !==-1 )
    })
  })


}


//   Data fetched from drawings table database


fetchDesignDocument(){

  let newSearch = this.state.searchValue


  fetch('/design_documents?search=')
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


     if (this.state.searchValue.length == 0 && prevState.searchValue.length > 0) {
       this.fetchDesignDocument();

   }

   //if (prevState.searchData!==this.state.searchData) {
  //   this.fetchDesignDocument();
//   }
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
callBackfromFilter(value){
  this.setState({
        searchData : value.Discipline,
  })
  console.log(this.state.searchData);
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
