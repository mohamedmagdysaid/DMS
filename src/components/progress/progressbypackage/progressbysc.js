import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { ResponsivePie } from '@nivo/pie'
import './../progress.css'
import {Button} from 'react-bootstrap'
import {FormControl,FormGroup} from 'react-bootstrap'
import Popup from 'reactjs-popup'
import ControlledPopup from './popupbox'

class ProgrssBySC extends React.Component{
  constructor(){
    super()
    this.state={
      packageData:[],
      selected: '',
      button : true,
      buttontext:"Remove Not Submitted Models",
      searchData:'',
      modelname:[],
      trigger:false,
    }
  this._onSelect = this._onSelect.bind(this)
  this.handleClick = this.handleClick.bind(this)
  this.handlePieClick = this.handlePieClick.bind(this)
  this.toggletrigger = this.toggletrigger.bind(this)
//this.handleChange = this.handleChange.bind(this);
  }
fetchPackageData(){
        fetch('/progess/package?packageID='+this.state.selected)
       .then(function(result){
         return result.json();
       })
       .then(result => this.setState({
         packageData:result.recordset,
       }))

  }

componentDidMount(){
  this.fetchPackageData();
}

componentDidUpdate(prevProp,prevState){
  if (prevState.selected !== this.state.selected) {
    this.fetchPackageData();
  }
}
/**
handleChange(e){
  e.preventDefault();
  this.setState({
    searchData : e.currentTarget.value
  })
  this.state.packageData.filter(function(item){
    return (item.Package.toLowerCase().indexOf(e.currentTarget.value.toLowerCase())!==-1)
  })
}
*/
_onSelect (option) {
  this.setState({selected: option.label})

}

handlePieClick(e){

  let arrModelName  = [];


this.setState({
  modelname : this.state.packageData.map(function(item){
    if (item['Reply Comment'].indexOf(e.id)!==-1) {
       return item.ModelName
    }
  }),
  trigger:true,
})


return(this.renderPopUp())
}

toggletrigger(){
  this.setState({
    trigger:false,
  })
}

renderProgress(){
  let noexception = 0;
  let resubmit = 0;
  let rejected = 0;
  let reviewnotrequired = 0;
  let underreview = 0;
  let notrecevied = 0;
  let notsubmitted = 0;
  let arr = [];
  let button  = this.state.button
  let numberModels = 0
  let numberofsubmitted = 0;


  this.state.packageData.filter(function(item){
    if (item['LiveLink Transmittal'] !== "-" && item['Reply Comment'] === "-" ) {
      return item['Reply Comment'] = 'Submitted but not recieved by client'
    }
    if (item['Reply Comment'] ==="-") {
      return item['Reply Comment']  = 'Not Submitted'
    }
  })

  this.state.packageData.map(function(item){

       arr = [item['Reply Comment']]
       for (var i = 0; i < arr.length; i++) {
         if (arr[i] === "1 - No Exception Taken" || arr[i] === '1 - No Exception Taken (Consultant)') {
           noexception++
         }
         if (arr[i] === "3 - Revise & Resubmit" || arr[i] === '3 - Revise & Resubmit (Consultant)') {
           resubmit++
         }
         if (arr[i] === "4 - Rejected") {
           rejected++
         }
         if (arr[i] === "5 - Review Not Required") {
           reviewnotrequired++
         }
         if (arr[i] === "Under Review") {
           underreview++
         }
         if (arr[i] === "Submitted but not recieved by client") {
           notrecevied++
         }
         if (arr[i] === "Not Submitted" && button === true) {
           notsubmitted++
         }
         if (arr[i] !==null) {
           numberModels++
         }
         if (arr[i] !== "Not Submitted") {
           numberofsubmitted++
         }

       }

  })


    if (arr.length === 0) {

    }
    else
  return(
    <div className="progress-ABT">
    <p>Total Number of Models : {numberModels} </p>
    <p>Total Number of Submitted Models : {numberofsubmitted} </p>
    <ResponsivePie
        data={[{
          "id": "1 - No Exception Taken",
        "label": "No Exception Taken",
        "value": noexception,
        "color": "hsl(17, 70%, 50%)"
      },
      {
        "id": "3 - Revise & Resubmit",
        "label": "Revise & Resubmit",
        "value": resubmit,
        "color": "hsl(322, 70%, 50%)"
      },
      {
        "id": "4 - Rejected",
        "label": "Rejected",
        "value": rejected,
        "color": "hsl(254, 100%, 50%, 1)"
      },
      {
        "id": "5 - Review Not Required",
        "label": "Review Not Required",
        "value": reviewnotrequired,
        "color": "hsl(322, 70%, 50%)"
      },
      {
        "id": "Under Review",
        "label": "Under Review",
        "value": underreview,
        "color": "hsl(322, 70%, 50%)"
      },
      {
        "id": "Submitted but not recieved by client",
        "label": "Submitted but not recieved by client",
        "value": notrecevied,
        "color": "hsl(12, 70%, 50%)"
      },
      {
        "id": "Not Submitted",
        "label": "Not Submitted",
        "value": notsubmitted,
        "color": "hsl(322, 70%, 50%)"
      }

        ]}
        margin={{
            "top": 40,
            "right": 80,
            "bottom": 80,
            "left": 80
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="set2"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.5)"
        radialLabelsSkipAngle={1}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={2}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        minValue = {1}
        onClick={this.handlePieClick}
        defs={[
            {
                "id": "dots",
                "type": "patternLines",
                "background": "inherit",
                "color": "rgb(247, 0, 37)",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "rgba(255, 255, 255, 0.3)",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "submitted"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "submitted"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "go"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "python"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "scala"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "lisp"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "elixir"
                },
                "id": "lines"
            },
            {
                "match": {
                    "id": "javascript"
                },
                "id": "lines"
            }
        ]}
        legends={[
            {
                "anchor": "bottom",
                "direction": "row",
                "translateY": 56,
                "itemWidth": 150,
                "itemHeight": 18,
                "itemTextColor": "#999",
                "symbolSize": 12,
                "symbolShape": "circle",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemTextColor": "#000"
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )


}

renderPopUp(){
  if (this.state.trigger === true) {
    return(
      <Popup
      open={this.state.trigger}
      modal
      closeOnDocumentClick
       onClose={this.toggletrigger}
       //onClose={this.toggletrigger()}
    >
      {this.state.modelname.map(function(item){
          if (item !== undefined) {
            return <span>
            {item}
            <br/>
          </span>
          }



      })}

    </Popup>
    )
  }

}


handleClick(){
      if (this.state.button === true) {
        this.setState({
          button:false,
          buttontext : "Add Not Submitted Models"
        })
      }
      else {
        this.setState({
          button:true,
          buttontext : "Remove Not Submitted Models"
        })
      }
}


render(){


  let filteredDiscpline =  this.props.data.map(function(item){
      return item.Package
    }).filter(function(item,index,self){

      if (self.indexOf(item) === index) {
          return(item);
      }
    }).sort()



  const defaultOption = this.state.selected
  const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

  return(
    <div>
    <section>

      <h3>Package</h3>
      <Dropdown options={filteredDiscpline} onChange={this._onSelect} value={defaultOption} placeholder="Select a Package" />
      <div className='result'>
        You selected
        <strong> {placeHolderValue} </strong>
      </div>


    </section>
    <div className='renderpopup'>
      {this.renderPopUp()}
    </div>
    <div className="progress-ABT">
    <Button bsStyle="warning" onClick={this.handleClick}>{this.state.buttontext}</Button>
    {this.renderProgress()}
    </div>

    </div>

  )
}

}

export default ProgrssBySC;
