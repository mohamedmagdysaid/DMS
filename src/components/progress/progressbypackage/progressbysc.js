import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { ResponsivePie } from '@nivo/pie'


class ProgrssBySC extends React.Component{
  constructor(){
    super()
    this.state={
      packageData:[],
      selected: ''
    }
  this._onSelect = this._onSelect.bind(this)
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


_onSelect (option) {
  this.setState({selected: option.label})

}

renderProgress(){
  let noexception = 0;
  let resubmit = 0;
  let rejected = 0;
  let reviewnotrequired = 0;
  let underreview = 0;
  let notrecevied = 0;
  let arr

  this.state.packageData.filter(function(item){
    if (item['LiveLink Transmittal'] !== "-" && item['Reply Comment'] === "-" ) {
      return item['Reply Comment'] = 'Submitted but not recieved by client'
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

       }

  })

    if (noexception === 0) {

    }
    else
  return(
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
        colors="nivo"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.5)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
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
                "itemWidth": 170,
                "itemHeight": 18,
                "itemTextColor": "#999",
                "symbolSize": 18,
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
  )


}

render(){


  let filteredDiscpline =  this.props.data.map(function(item){
      return item.Package
    }).filter(function(item,index,self){

      if (self.indexOf(item) === index) {
          return(item);
      }
    })



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
    <div >
    {this.renderProgress()}
    </div>
    </div>
  )
}

}

export default ProgrssBySC;
