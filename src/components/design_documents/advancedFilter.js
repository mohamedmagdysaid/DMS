import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class AdvancedFilter extends React.Component{
  constructor () {
  super()
  this.state = {
    selected: ''
  }
  this._onSelect = this._onSelect.bind(this)
}





  _onSelect (option) {
    this.setState({selected: option.label})
    let searchData = {Discipline : option.label}
    this.props.getSearchData(searchData);
  }

  render () {

  let filteredDiscpline =  this.props.data.map(function(item){
      return item.Discipline
    }).filter(function(item,index,self){

      if (self.indexOf(item) === index) {
          return(item);
      }
    })




    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <section>

        <h3>Discipline</h3>
        <Dropdown options={filteredDiscpline} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        <div className='result'>
          You selected
          <strong> {placeHolderValue} </strong>
        </div>


      </section>
    )
  }
}


export default AdvancedFilter;
