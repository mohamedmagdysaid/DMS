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
          list:'',
          orginalData:'',
        }

this.handleRowClick = this.handleRowClick.bind(this)
this.handleChange = this.handleChange.bind(this)
      }


fetchAbtData(){
  fetch('/abtmodels')
 .then(function(result){
   return result.json();
   })
 .then(result => this.setState({
 data:result.recordset,
 orginalData : result.recordset,
}))
}

componentDidMount() {
      this.fetchAbtData();
 };




handleChange(e){


//  let searchAbt = this.state.searchAbt
  this.setState({
    searchAbt  :  e.currentTarget.value,

  })
  let searched = e.currentTarget.value;
  this.setState({
    data : this.state.data.filter(function(item){

      let filterData = item.ModelName.toLowerCase() + item.Package.toLowerCase() + item['Reply Comment'].toLowerCase() + item['Area Description'].toLowerCase()+ item['Floor Description'].toLowerCase() + item['LiveLink Transmittal'].toLowerCase() + item.Revision.toLowerCase()


      if (e.currentTarget.value.includes(" ")) {
          let newSearched = searched.split(" ")
          let finalQuery
          for (var i = 1; i < newSearched.length; i++) {
          let  firstQuery = filterData.indexOf(newSearched[0].toLowerCase()) !== -1
          let    itterated = filterData.indexOf(newSearched[i].toLowerCase()) !== -1


          if (i <= 1) {
            finalQuery = firstQuery & itterated
          }
            else {
                finalQuery = finalQuery & itterated;
              }
          }
          return finalQuery

      }

      else{
        return filterData.indexOf(searched.toLowerCase()) !== -1

      }
    })
  })

}


componentDidUpdate(prevProp,prevState){
    if (this.state.searchAbt.length == 0 && prevState.searchAbt.length > 0) {
      this.setState({
        data: this.state.orginalData,
      })
  }
}


handleRowClick(e){
  console.log(e.rowData);
}


renderModels(){
  const list = this.state.data;
  let handleRowClick = this.handleRowClick;
  let searchAbt = this.state.searchAbt
  let handleChange = this.handleChange



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
    label='Package'
    dataKey='Package'
  />
  <Column
    width={100}
    label='Area'
    dataKey='Area Description'

  />
  <Column
    width={100}
    label='Floor'
    dataKey='Floor Description'
  />
  <Column
    width={250}
    label='Transmittal Number'
    dataKey='LiveLink Transmittal'
  />
  <Column
    width={100}
    label='Revision'
    dataKey='Revision'
  />
  <Column
    width={400}
    label='Comment'
    dataKey='Reply Comment'
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
