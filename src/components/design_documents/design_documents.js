import React from 'react';
import {FormControl,FormGroup,form,Table} from 'react-bootstrap'
import './designdocuments.css'
import DrawingRevisions from './revisions'
import RFIs from './rfis'

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

e.preventDefault();

  this.setState({
    UID : e.currentTarget.id,
    UDN : e.currentTarget.getAttribute('UDNID')
  })

  if (e.currentTarget.id !==0) {
    e.currentTarget.style.backgroundColor = "lightblue";
  }


}






// handle the change of the search
handleChange(e){
  e.preventDefault();
  this.setState({
    searchValue : e.currentTarget.value
  })


}

//   Data fetched from drawings table database

componentDidMount() {
      fetch('/design_documents?limit=10')
     .then(function(result){
       return result.json();
     })
     .then(result => this.setState({
       data:result.recordset,

     }))


 };



//rendering design documents
renderDrawing(){
  let searchedValue = this.state.searchValue;
  let handleRowClick = this.handleRowClick;
  let color = this.state.color

  return(
    this.state.data.filter(function(item){
      if (item.Title === null) {
        return item.Title =" "
      }
      else if (item.Type === null) {
        return item.Type = " "
      }
      else if (searchedValue.slice(-1) === " ") {
          return searchedValue = searchedValue.slice(-1);
      }
      return (item.UDN.toLowerCase().indexOf(searchedValue.toLowerCase()) !== -1 || item.Title.toLowerCase().indexOf(searchedValue.toLowerCase()) !== -1 || item.Type.toLowerCase().indexOf(searchedValue.toLowerCase()) !== -1)

    }).map(function(item,index){
    if (index<=300){
      return (
        <tr key={item.ID} id={item.ID}  onClick = {handleRowClick} style={{background:color}} udnid={item.UDN}>
        <td>{item.UDN}</td>
        <td>{item.Title}</td>
        </tr>
      )
    }
  })
)
}

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


            <div>
              <h1>Design Documents</h1>
            </div>
              <div id='drawings'>
              <Table bordered condensed hover responsive >
                <thead id='tableheader'>
                    <tr>
                      <th>Drawing Number</th>
                      <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderDrawing()}
                </tbody>
              </Table>
              </div>
              <div>
                  <DrawingRevisions UID={this.state.UID}/>
              </div>
              <div>
                  <RFIs UDNID={this.state.UDN} />
              </div>
      </div>
    )
  }
}

export default Design_documents;
