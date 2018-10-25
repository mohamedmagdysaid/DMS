import React from 'react'
import {FormGroup,FormControl,Table} from 'react-bootstrap'
import ShopDrawingRevision from './shopdrawingrevision'
import './sdrevision.css'

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


componentDidMount() {
            fetch('/shopdrawings')
           .then(function(result){
             return result.json();
           })
           .then(result => this.setState({
             data:result.recordset,
           }))
};



handleChange(e){
  e.preventDefault();
  this.setState({
    searchValueOfShopDrawings : e.currentTarget.value
  })

}
handleRowClick(e){
  e.preventDefault();
  this.setState({
    SDID:e.currentTarget.id
  })
  if (e.currentTarget.id !==0) {
    e.currentTarget.style.backgroundColor = "lightblue";
  }
}



renderDrawing(){
  let searchedValue = this.state.searchValueOfShopDrawings
  let handleRowClick = this.handleRowClick;
  return(
      this.state.data.filter(function(item){
        if (item.Level ===null) {
          return item.Level ="";
        }
        if (item.Originator === null) {
          return item.Originator = "";
        }

        else
        return (item.DocumentID.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1 || item.Title.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1 ||item.Level.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1 || item.Originator.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1)
      }).map(function(item,index){
        if (index <= 300) {
          return (
            <tr key={index} id={item.DocumentID} onClick={handleRowClick}>
            <td>{item.DocumentID}</td>
            <td>{item.Title}</td>
            <td>{item.Level}</td>
            <td>{item.Sector}</td>
            <td>{item.Originator}</td>
            </tr>

          )
        }
      })
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
            <div id='drawings'>
            <Table bordered condensed hover responsive >
              <thead id='tableheader'>
                  <tr className="designtable">
                    <th>Drawing Number</th>
                    <th>Title</th>
                    <th>Level</th>
                    <th>Sector</th>
                    <th>Originator</th>
                  </tr>
              </thead>
              <tbody>
              {this.renderDrawing()}
              </tbody>
            </Table>
            </div>
            <div>
                {console.log(this.state.SDID)}
                <ShopDrawingRevision SD={this.state.SDID} />
            </div>
            </div>
    )
  }
}


export default ShopDrawings;
