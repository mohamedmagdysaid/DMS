import React from 'react';
import { ResponsivePie } from '@nivo/pie'


class CurrentProgress extends React.Component{
  constructor(){
    super()
  }



  CurrentProgress(){
    let noexception = 0;
    let resubmit = 0;
    let rejected = 0;
    let reviewnotrequired = 0;
    let underreview = 0;
    let notrecevied = 0;
    let arr
    this.props.data.map(function(item){
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
    return(
      <div className='current-progress' >
      {this.CurrentProgress()}
      </div>
    )
  }



}


export default CurrentProgress;
