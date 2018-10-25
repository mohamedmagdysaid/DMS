import React from 'react'
import {FormGroup,FormControl,Table} from 'react-bootstrap'



class AbtModels extends React.Component{
      constructor(){
        super()
        this.state={
          data:[],
        }
      }


fetchAbtData(){
  fetch('/abtmodels')
 .then(function(result){
   return result.json();
   })
 .then(result => this.setState({
 data:result.recordset,
}))
}


componentDidMount() {
        this.fetchAbtData();
};


renderModels(){

return(
this.state.data.filter(function(item){
  if(item.ABT_Model_TranNum===null){
    return item.ABT_Model_TranNum = "-"
  }
  else if (item.ABT_Model_TranNum !==null ) {
    return item.ABT_Model_TranNum = item.ABT_Model_TranNum_Prefix+"-"+item.ABT_Model_Discipline+"-"+item.ABT_Model_TranNum
  }
  if (item.ReplyStatus === "?") {
    return item.ReplyStatus  = "Under Review"
  }



}).map(function(item,index){


        return(
            <tr key={index} id={item.ID}>
              <th>{item.Discipline}</th>
              <th>{item.ModelName}</th>
              <th>{item.SCOPE}</th>
              <th>{item.Area}</th>
              <th>{item.Floor}</th>
              <th>{item.Owner}</th>
              <th>{item.Planned_Submission_Date}</th>
              <th>{item.ABT_Model_TranNum}</th>
              <th>{item.Rev}</th>
              <th>{item.SentDate}</th>
              <th>{item.ReplyDate}</th>
              <th>{item.ReplyStatus}</th>
            </tr>
          )
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
                        placeholder="Search..."
                        onChange={this.handleChange}
                      />
                </FormGroup>
        </form>


        <div id='drawings'>
        <Table bordered condensed hover responsive >
          <thead id='tableheader'>
              <tr className="designtable">
                <th>Discipline</th>
                <th>Model Name</th>
                <th>Scope</th>
                <th>Area</th>
                <th>Floor</th>
                <th>Owner</th>
                <th>Planned Submission Date</th>
                <th>Transmittal Number</th>
                <th>Revision</th>
                <th>LiveLink Submission Date</th>
                <th>LiveLink Reply Date</th>
                <th>Comment</th>
              </tr>
          </thead>
          <tbody>
              {this.renderModels()}
          </tbody>
        </Table>
        </div>

        </div>
  )
}


}





export default AbtModels
