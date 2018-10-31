import React from 'react'
import './designdocuments.css'
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';

class DrawingRevisions extends React.Component {
  constructor() {
      super()
        this.state={
          data : [],
        }
this.handleRowClick = this.handleRowClick.bind(this);
  }

fetchData(){
  fetch('/design_documents/revisions?UID='+this.props.UID)
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

   componentDidUpdate(prevProp){
     if (prevProp.UID !== this.props.UID) {
       this.fetchData();
     }
   }



// handle click by get attribute of href and opening it
handleRowClick(e){

  console.log(e.rowData)
  if (e.rowData.VBCURL == "N/A") {
    alert("The link is not available")
  }
  else(window.open(e.rowData.VBCURL))

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
  var revData = this.state.data.filter(function(item){
    if (item.RecieveDate == null) {
      return item.RecieveDate = ""
    }
    if (item.RecieveDate !==null) {
      return item.RecieveDate = item.RecieveDate.slice(0,10);
    }
  })


  if (this.props.UID === '') {

  }


  else

          return(

            <Table
                  width={1100}
                  height={300}
                  headerHeight={20}
                  rowHeight={30}
                  rowCount={revData.length}
                  rowGetter={({ index }) => revData[index]}
                  onRowClick= {handleRowClick}

            >
            <Column
              width={350}
              label='Drawing Number'
              dataKey='UDN'
            />
              <Column
                label='Package'
                dataKey='Package'
                width={200}
              />
              <Column
                width={300}
                label='Transmittal'
                dataKey='Transmittal'
              />
              <Column
                width={150}
                label='Recieved Date'
                dataKey='RecieveDate'

              />
              <Column
                width={100}
                label='Revision'
                dataKey='Revision'
              />
              <Column
                width={350}
                label='Latest'
                dataKey='Latest'
              />
            </Table>





)};


render(){
  return(
    <div>
        <div className="revisionTitle">
        {this.revisionTitle()}
        </div>
        <div>
          {this.renderRevision()}
        </div>

    </div>
  )
}
}

export default DrawingRevisions
