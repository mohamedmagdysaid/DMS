import React from 'react';
import { ResponsivePie } from '@nivo/pie'


class AbtModelProgress extends React.Component{
  constructor(){
    super()
  }



  AbtModelProgress(){
    let submitted = 0;
    let notSubmitted = 0;
    let arr
    this.props.data.map(function(item){
         arr = [item['LiveLink Transmittal']]
         for (var i = 0; i < arr.length; i++) {
           if (arr[i] === "-") {
             notSubmitted++
           }
           else {
             submitted++
           }
         }

    })
    console.log(submitted);
    console.log(notSubmitted);
      if (submitted === 0) {

      }
      else
    return(
      <ResponsivePie
          data={[{
            "id": "Submitted",
          "label": "Number of models submitted to the client   (" +Math.round((submitted/2637) * 100) + " %)   " ,
          "value": submitted,
          "color": "hsl(17, 70%, 50%)"
        },
        {
          "id": "Not Submitted",
          "label": "remaining models   ("+Math.round((notSubmitted/2637) * 100) + " %)   " ,
          "value": notSubmitted,
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
                  "type": "patternDots",
                  "background": "inherit",
                  "color": "rgba(255, 255, 255, 0.3)",
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
                      "id": "Submitted"
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
                  "itemWidth": 100,
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
      <div className='progress-ABT text-center' >
      {this.AbtModelProgress()}
      </div>
    )
  }



}


export default AbtModelProgress;
