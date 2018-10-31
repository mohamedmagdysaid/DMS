import React from 'react'
import {FormGroup,FormControl} from 'react-bootstrap'
import ShopDrawingRevision from './shopdrawingrevision'
import './sdrevision.css'
import { Column, Table } from 'react-virtualized';

class ShopDrawings extends React.Component {
      constructor(){
        super()
        this.state={
          data:[],
          searchValueOfShopDrawings:'',
          SDID:'',
        }
this.handleChange=this.handleChange.bind(this);
this.handleRowClick=this.handleRowClick.bind(this);
      }

      //   Data fetched from drawings table database
fetchShopDrawing(){
  fetch('/shopdrawings?search='+this.state.searchValueOfShopDrawings)
 .then(function(result){
   return result.json();
 })
 .then(result => this.setState({
   data:result.recordset,
 }))
}

componentDidMount() {
            this.fetchShopDrawing()
};


componentDidUpdate(prevProp,prevState){
  if (prevState.searchValueOfShopDrawings!==this.state.searchValueOfShopDrawings) {
    this.fetchShopDrawing();
  }
}


handleChange(e){
  e.preventDefault();
  this.setState({
    searchValueOfShopDrawings : e.currentTarget.value
  })

}
handleRowClick(e){

  this.setState({
    SDID:e.currentTarget.id
  })

}



renderDrawing(){
  let handleRowClick = this.handleRowClick;
  return(
                <Table
                      width={1200}
                      height={300}
                      headerHeight={20}
                      rowHeight={30}
                      rowCount={this.state.data.length}
                      rowGetter={({ index }) => this.state.data[index]}
                      onRowClick= {handleRowClick}

                >
                <Column
                  width={250}
                  label='Drawing Number'
                  dataKey='DocumentID'
                />
                  <Column
                    label='Title'
                    dataKey='Title'
                    width={500}
                  />
                  <Column
                    width={100}
                    label='Level'
                    dataKey='Level'
                  />
                  <Column
                    width={100}
                    label='Sector'
                    dataKey='Sector'

                  />
                  <Column
                    width={150}
                    label='Originator'
                    dataKey='Originator'
                  />

                </Table>
)}





  render(){
    return(

        <div className='container-fluid maindesign'>
          <form>

                  <FormGroup>
                            <FormControl
                            type="text"
                            value={this.state.searchValueOfShopDrawings}
                            placeholder="Search Shop Drawings..."
                            onChange={this.handleChange}
                          />
                    </FormGroup>
            </form>
            <div>
                {this.renderDrawing()}
            </div>
            <div>
                <ShopDrawingRevision SD={this.state.SDID} />
            </div>
            </div>
    )
  }
}


export default ShopDrawings;
