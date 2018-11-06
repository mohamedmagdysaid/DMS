import React from 'react'
import {FormGroup,FormControl} from 'react-bootstrap'
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';


class AbtModels extends React.Component{
      constructor(){
        super()
        this.state={
          data:[],
          searchAbt:'',
          list:''
        }

this.handleRowClick = this.handleRowClick.bind(this)
this.handleChange = this.handleChange.bind(this)
      }


fetchAbtData(){
  fetch('/abtmodels?modelname='+this.state.searchAbt)
 .then(function(result){
   return result.json();
   })
 .then(result => this.setState({
 data:result.recordset,
}))
}





handleChange(e){
//  let searchAbt = this.state.searchAbt
  this.setState({
    searchAbt  :  e.currentTarget.value,
    //data : this.state.data.filter(function(item){
    //  return (item.ModelName.toLowerCase().indexOf(searchAbt.toLowerCase())!== -1)
   //})
  })
}
componentDidUpdate(prevProp,prevState){
  if (prevState.searchAbt!==this.state.searchAbt) {
    console.log(prevState.searchAbt);
    this.fetchAbtData();
  }
}


componentDidMount() {
        this.fetchAbtData();
};


handleRowClick(e){
  console.log(e.rowData);
}


renderModels(){
  const list = this.state.data;
  let handleRowClick = this.handleRowClick;
  let searchAbt = this.state.searchAbt
  let handleChange = this.handleChange


  this.state.data.filter(function(item, pos, self){
    if(item.ABT_Model_TranNum === null){
      return item.ABT_Model_TranNum = "-"
    }
    else if (item.ABT_Model_TranNum !==null && item.ABT_Model_TranNum !=="-" && item.ABT_Model_TranNum_Prefix !==null && item.ABT_Model_TranNum.slice(0,3) !=="BIM") {
      return item.ABT_Model_TranNum = item.ABT_Model_TranNum_Prefix+"-"+item.ABT_Model_Discipline+"-"+item.ABT_Model_TranNum
    }
    if (item.ReplyStatus === null) {
      return item.ReplyStatus  = ""
    }
    else if (item.ReplyStatus.toString() == "?") {
      return item.ReplyStatus  = "Under Review"

    }

})

//for (var i = 0; i < this.state.data.length; i++) {
//  for (var j = 0; j < this.state.data.length; j++) {
//    if (this.state.data[i].ModelName==this.state.data[j].ModelName) {
//     console.log(this.state.data[j].ModelName);
//    }
//  }
//}



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
  label='Discipline'
  dataKey='Discipline'
/>
  <Column
    label='Model Name'
    dataKey='ModelName'
    width={500}
  />
  <Column
    width={350}
    label='Scope'
    dataKey='SCOPE'
  />
  <Column
    width={100}
    label='Area'
    dataKey='Area'

  />
  <Column
    width={100}
    label='Floor'
    dataKey='Floor'
  />
  <Column
    width={350}
    label='Transmittal Number'
    dataKey='ABT_Model_TranNum'
  />
  <Column
    width={150}
    label='Revision'
    dataKey='Rev'
  />
  <Column
    width={400}
    label='Comment'
    dataKey='ReplyStatus'
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
                        value={this.state.searchAbt}
                        placeholder="Search..."
                        onChange={this.handleChange}
                      />
                </FormGroup>
        </form>


        <div>
            {this.renderModels()}
        </div>


        </div>
  )
}


}





export default AbtModels
