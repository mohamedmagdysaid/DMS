import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import {Button} from 'react-bootstrap'

class ProgressByDiscipline extends React.Component{
  constructor(){
    super()
    this.state = {
      button : true,
      buttontext:"Remove Not Submitted Models"


    }
this.handleClick = this.handleClick.bind(this);

  }


    ProgressByDiscipline(){

      let button = this.state.button;
      let noexceptioncp = 0;
      let resubmitcp = 0;
      let rejectedcp = 0;
      let reviewnotrequiredcp = 0;
      let underreviewcp = 0;
      let notreceviedcp = 0;
      let notsubmittedcp = 0;
      let arrcp
      let noexceptionpfour = 0;
      let resubmitpfour = 0;
      let rejectedpfour = 0;
      let reviewnotrequiredpfour = 0;
      let underreviewpfour = 0;
      let notreceviedpfour = 0;
      let notsubmittedpfour = 0;
      let arrpfour
      let noexceptionpone = 0;
      let resubmitpone = 0;
      let rejectedpone = 0;
      let reviewnotrequiredpone = 0;
      let underreviewpone = 0;
      let notreceviedpone = 0;
      let notsubmittedpone = 0;
      let arrpone
      let noexceptionptwo = 0;
      let resubmitptwo = 0;
      let rejectedptwo = 0;
      let reviewnotrequiredptwo = 0;
      let underreviewptwo = 0;
      let notreceviedptwo = 0;
      let notsubmittedptwo = 0;
      let arrptwo
      let noexceptionpthree = 0;
      let resubmitpthree = 0;
      let rejectedpthree = 0;
      let reviewnotrequiredpthree = 0;
      let underreviewpthree = 0;
      let notreceviedpthree = 0;
      let notsubmittedpthree = 0;
      let arrpthree
      let noexceptiongh = 0;
      let resubmitgh = 0;
      let rejectedgh = 0;
      let reviewnotrequiredgh = 0;
      let underreviewgh = 0;
      let notreceviedgh = 0;
      let notsubmittedgh = 0;
      let arrgh
      let noexceptionho = 0;
      let resubmitho = 0;
      let rejectedho = 0;
      let reviewnotrequiredho = 0;
      let underreviewho = 0;
      let notreceviedho = 0;
      let notsubmittedho = 0;
      let arrho
      let noexceptionex = 0;
      let resubmitex = 0;
      let rejectedex = 0;
      let reviewnotrequiredex = 0;
      let underreviewex = 0;
      let notreceviedex = 0;
      let notsubmittedex = 0;
      let arrex
      let noexceptiontb = 0;
      let resubmittb = 0;
      let rejectedtb = 0;
      let reviewnotrequiredtb = 0;
      let underreviewtb = 0;
      let notreceviedtb = 0;
      let notsubmittedtb = 0;
      let arrtb
      let noexceptionst = 0;
      let resubmitst = 0;
      let rejectedst = 0;
      let reviewnotrequiredst = 0;
      let underreviewst = 0;
      let notreceviedst = 0;
      let notsubmittedst = 0;
      let arrst


      this.props.data.filter(function(item){
        if (item['LiveLink Transmittal'] !== "-" && item['Reply Comment'] === "-" ) {
          return item['Reply Comment'] = 'Submitted but not recieved by client'
        }
      })
      this.props.data.map(function(item){
           if (item.Discipline === "Architecture") {

              arrcp = [item['Reply Comment']]
              for (var i = 0; i < arrcp.length; i++) {
                if (arrcp[i] === "Submitted but not recieved by client") {
                  notreceviedcp++
                }
                if (arrcp[i] === "1 - No Exception Taken" || arrcp[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptioncp++
                }
                if (arrcp[i] === "3 - Revise & Resubmit" || arrcp[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitcp++
                }
                if (arrcp[i] === "4 - Rejected") {
                  rejectedcp++
                }
                if (arrcp[i] === "5 - Review Not Required") {
                  reviewnotrequiredcp++
                }
                if (arrcp[i] === "Under Review") {
                  underreviewcp++
                }
                if (arrcp[i] === "-" && button === true) {
                  notsubmittedcp++


                }
              }

           }
           if (item.Discipline === "Baggage Handling System") {
              arrpone = [item['Reply Comment']]
              for (var i = 0; i < arrpone.length; i++) {
                if (arrpone[i] === "Submitted but not recieved by client") {
                  notreceviedpone++
                }
                if (arrpone[i] === "1 - No Exception Taken" || arrpone[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionpone++
                }
                if (arrpone[i] === "3 - Revise & Resubmit" || arrpone[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitpone++
                }
                if (arrpone[i] === "4 - Rejected") {
                  rejectedpone++
                }
                if (arrpone[i] === "5 - Review Not Required") {
                  reviewnotrequiredpone++
                }
                if (arrpone[i] === "Under Review") {
                  underreviewpone++
                }
                if (arrpone[i] === "-" && button === true) {
                  notsubmittedpone++
                }
              }
           }
           if (item.Discipline === "Electrical") {
              arrptwo = [item['Reply Comment']]
              for (var i = 0; i < arrptwo.length; i++) {
                if (arrptwo[i] === "Submitted but not recieved by client") {
                  notreceviedptwo++
                }
                if (arrptwo[i] === "1 - No Exception Taken" || arrptwo[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionptwo++
                }
                if (arrptwo[i] === "3 - Revise & Resubmit" || arrptwo[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitptwo++
                }
                if (arrptwo[i] === "4 - Rejected") {
                  rejectedptwo++
                }
                if (arrptwo[i] === "5 - Review Not Required") {
                  reviewnotrequiredptwo++
                }
                if (arrptwo[i] === "Under Review") {
                  underreviewptwo++
                }
                if (arrptwo[i] === "-" && button === true) {
                  notsubmittedptwo++

                }
              }
           }
           if (item.Discipline === "Envelope") {
              arrpthree = [item['Reply Comment']]
              for (var i = 0; i < arrpthree.length; i++) {
                if (arrpthree[i] === "Submitted but not recieved by client") {
                  notreceviedpthree++
                }
                if (arrpthree[i] === "1 - No Exception Taken" || arrpthree[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionpthree++
                }
                if (arrpthree[i] === "3 - Revise & Resubmit" || arrpthree[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitpthree++
                }
                if (arrpthree[i] === "4 - Rejected") {
                  rejectedpthree++
                }
                if (arrpthree[i] === "5 - Review Not Required") {
                  reviewnotrequiredpthree++
                }
                if (arrpthree[i] === "Under Review") {
                  underreviewpthree++
                }
                if (arrpthree[i] === "-" && button === true) {
                  notsubmittedpthree++
                }
              }
           }
           if (item.Discipline === "Fire Zones") {
              arrpfour = [item['Reply Comment']]
              for (var i = 0; i < arrpfour.length; i++) {
                if (arrpfour[i] === "Submitted but not recieved by client") {
                  notreceviedpfour++
                }
                if (arrpfour[i] === "1 - No Exception Taken" || arrpfour[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionpfour++
                }
                if (arrpfour[i] === "3 - Revise & Resubmit" || arrpfour[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitpfour++
                }
                if (arrpfour[i] === "4 - Rejected") {
                  rejectedpfour++
                }
                if (arrpfour[i] === "5 - Review Not Required") {
                  reviewnotrequiredpfour++
                }
                if (arrpfour[i] === "Under Review" ) {
                  underreviewpfour++
                }
                if (arrpfour[i] === "-" && button === true) {
                  notsubmittedpfour++
                }
              }
           }
           if (item.Discipline === "Irrigation" ) {
              arrgh = [item['Reply Comment']]
              for (var i = 0; i < arrgh.length; i++) {
                if (arrgh[i] === "Submitted but not recieved by client") {
                  notreceviedgh++
                }
                if (arrgh[i] === "1 - No Exception Taken" || arrgh[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptiongh++
                }
                if (arrgh[i] === "3 - Revise & Resubmit" || arrgh[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitgh++
                }
                if (arrgh[i] === "4 - Rejected") {
                  rejectedgh++
                }
                if (arrgh[i] === "5 - Review Not Required") {
                  reviewnotrequiredgh++
                }
                if (arrgh[i] === "Under Review") {
                  underreviewgh++
                }
                if (arrgh[i] === "-" && button === true) {
                  notsubmittedgh++
                }
              }
           }
           if (item.Discipline === "Mechanical" ) {
              arrho = [item['Reply Comment']]
              for (var i = 0; i < arrho.length; i++) {
                if (arrho[i] === "Submitted but not recieved by client") {
                  notreceviedho++
                }
                if (arrho[i] === "1 - No Exception Taken" || arrho[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionho++
                }
                if (arrho[i] === "3 - Revise & Resubmit" || arrho[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitho++
                }
                if (arrho[i] === "4 - Rejected") {
                  rejectedho++
                }
                if (arrho[i] === "5 - Review Not Required") {
                  reviewnotrequiredho++
                }
                if (arrho[i] === "Under Review") {
                  underreviewho++
                }
                if (arrho[i] === "-" && button === true) {
                  notsubmittedho++
                }
              }
           }
           if (item.Discipline === "Special Airport Systems") {
              arrex = [item['Reply Comment']]
              for (var i = 0; i < arrex.length; i++) {
                if (arrex[i] === "Submitted but not recieved by client") {
                  notreceviedex++
                }
                if (arrex[i] === "1 - No Exception Taken" || arrex[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionex++
                }
                if (arrex[i] === "3 - Revise & Resubmit" || arrex[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitex++
                }
                if (arrex[i] === "4 - Rejected") {
                  rejectedex++
                }
                if (arrex[i] === "5 - Review Not Required") {
                  reviewnotrequiredex++
                }
                if (arrex[i] === "Under Review") {
                  underreviewex++
                }
                if (arrex[i] === "-" && button === true) {
                  notsubmittedex++
                }
              }
           }
           if (item.Discipline === "Special Systems") {
              arrtb = [item['Reply Comment']]
              for (var i = 0; i < arrtb.length; i++) {
                if (arrtb[i] === "Submitted but not recieved by client") {
                  notreceviedtb++
                }
                if (arrtb[i] === "1 - No EXception Taken" || arrtb[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptiontb++
                }
                if (arrtb[i] === "3 - Revise & Resubmit" || arrtb[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmittb++
                }
                if (arrtb[i] === "4 - Rejected") {
                  rejectedtb++
                }
                if (arrtb[i] === "5 - Review Not Required") {
                  reviewnotrequiredtb++
                }
                if (arrtb[i] === "Under Review") {
                  underreviewtb++
                }
                if (arrtb[i] === "-" && button === true) {
                  notsubmittedtb++
                }
              }
           }
           if (item.Discipline === "Structure Concrete" || item.Discipline === "Structure Steel") {
              arrst = [item['Reply Comment']]
              for (var i = 0; i < arrst.length; i++) {
                if (arrst[i] === "Submitted but not recieved by client") {
                  notreceviedst++
                }
                if (arrst[i] === "1 - No Exception Taken" || arrst[i] === '1 - No Exception Taken (Consultant)') {
                  noexceptionst++
                }
                if (arrst[i] === "3 - Revise & Resubmit" || arrst[i] === '3 - Revise & Resubmit (Consultant)') {
                  resubmitst++
                }
                if (arrst[i] === "4 - Rejected") {
                  rejectedst++
                }
                if (arrst[i] === "5 - Review Not Required") {
                  reviewnotrequiredst++
                }
                if (arrst[i] === "Under Review") {
                  underreviewst++
                }
                if (arrst[i] === "-" && button === true) {
                  notsubmittedst++
                }
              }
           }


      })


        if (noexceptioncp === 0) {

        }
        else
      return(
        <ResponsiveBar
         data={[
    {
      "Discipline": "Architecture",
      "1 - No Exception Taken": noexceptioncp,
      "1 - No Exception TakenColor": "hsl(2, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitcp,
      "3 - Revise & ResubmitColor": "hsl(308, 70%, 50%)",
      "4 - Rejected": rejectedcp,
      "4 - RejectedColor": "hsl(27, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredcp,
      "5 - Review Not RequiredColor": "hsl(127, 70%, 50%)",
      "Under Review": underreviewcp,
      "Under ReviewColor": "hsl(47, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedcp,
      "Submitted but not recieved by clientColor": "hsl(109, 70%, 50%)",
      "Not Submitted":notsubmittedcp,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Baggage Handling System",
      "1 - No Exception Taken": noexceptionpone,
      "1 - No Exception TakenColor": "hsl(20, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitpone,
      "3 - Revise & ResubmitColor": "hsl(278, 70%, 50%)",
      "4 - Rejected": rejectedpone,
      "4 - RejectedColor": "hsl(62, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredpone,
      "5 - Review Not RequiredColor": "hsl(320, 70%, 50%)",
      "Under Review": underreviewpone,
      "Under ReviewColor": "hsl(68, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedpone,
      "Submitted but not recieved by clientColor": "hsl(30, 70%, 50%)",
      "Not Submitted":notsubmittedpone,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Electrical",
      "1 - No Exception Taken": noexceptionptwo,
      "1 - No Exception TakenColor": "hsl(44, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitptwo,
      "3 - Revise & ResubmitColor": "hsl(243, 70%, 50%)",
      "4 - Rejected": rejectedptwo,
      "4 - RejectedColor": "hsl(289, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredptwo,
      "5 - Review Not RequiredColor": "hsl(334, 70%, 50%)",
      "Under Review": underreviewptwo,
      "Under ReviewColor": "hsl(37, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedptwo,
      "Submitted but not recieved by clientColor": "hsl(282, 70%, 50%)",
      "Not Submitted":notsubmittedptwo,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Envelope",
      "1 - No Exception Taken": noexceptionpthree,
      "1 - No Exception TakenColor": "hsl(329, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitpthree,
      "3 - Revise & ResubmitColor": "hsl(5, 70%, 50%)",
      "4 - Rejected": rejectedpthree,
      "4 - RejectedColor": "hsl(148, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredpthree,
      "5 - Review Not RequiredColor": "hsl(267, 70%, 50%)",
      "Under Review": underreviewpthree,
      "Under ReviewColor": "hsl(318, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedpthree,
      "Submitted but not recieved by clientColor": "hsl(70, 70%, 50%)",
      "Not Submitted":notsubmittedpthree,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Fire Zones",
      "1 - No Exception Taken": noexceptionpfour,
      "1 - No Exception TakenColor": "hsl(147, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitpfour,
      "3 - Revise & ResubmitColor": "hsl(199, 70%, 50%)",
      "4 - Rejected": rejectedpfour,
      "4 - RejectedColor": "hsl(69, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredpfour,
      "5 - Review Not RequiredColor": "hsl(58, 70%, 50%)",
      "Under Review": underreviewpfour,
      "Under ReviewColor": "hsl(239, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedpfour,
      "Submitted but not recieved by clientColor": "hsl(144, 70%, 50%)",
      "Not Submitted":notsubmittedpfour,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Irrigation",
      "1 - No Exception Taken": noexceptiongh,
      "1 - No Exception TakenColor": "hsl(323, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitgh,
      "3 - Revise & ResubmitColor": "hsl(201, 70%, 50%)",
      "4 - Rejected": rejectedgh,
      "4 - RejectedColor": "hsl(91, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredgh,
      "5 - Review Not RequiredColor": "hsl(136, 70%, 50%)",
      "Under Review": underreviewgh,
      "Under ReviewColor": "hsl(324, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedgh,
      "Submitted but not recieved by clientColor": "hsl(21, 70%, 50%)",
      "Not Submitted":notsubmittedgh,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Mechanical",
      "1 - No Exception Taken": noexceptionho,
      "1 - No Exception TakenColor": "hsl(313, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitho,
      "3 - Revise & ResubmitColor": "hsl(234, 70%, 50%)",
      "4 - Rejected": rejectedho,
      "4 - RejectedColor": "hsl(16, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredho,
      "5 - Review Not RequiredColor": "hsl(49, 70%, 50%)",
      "Under Review": underreviewho,
      "Under ReviewColor": "hsl(70, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedho,
      "Submitted but not recieved by clientColor": "hsl(165, 70%, 50%)",
      "Not Submitted":notsubmittedho,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Special Airport Systems",
      "1 - No Exception Taken": noexceptionex,
      "1 - No Exception TakenColor": "hsl(313, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitex,
      "3 - Revise & ResubmitColor": "hsl(234, 70%, 50%)",
      "4 - Rejected": rejectedex,
      "4 - RejectedColor": "hsl(16, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredex,
      "5 - Review Not RequiredColor": "hsl(49, 70%, 50%)",
      "Under Review": underreviewex,
      "Under ReviewColor": "hsl(70, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedex,
      "Submitted but not recieved by clientColor": "hsl(165, 70%, 50%)",
      "Not Submitted":notsubmittedex,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    },
    {
      "Discipline": "Special Systems",
      "1 - No Exception Taken": noexceptiontb,
      "1 - No Exception TakenColor": "hsl(313, 70%, 50%)",
      "3 - Revise & Resubmit": resubmittb,
      "3 - Revise & ResubmitColor": "hsl(234, 70%, 50%)",
      "4 - Rejected": rejectedtb,
      "4 - RejectedColor": "hsl(16, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredtb,
      "5 - Review Not RequiredColor": "hsl(49, 70%, 50%)",
      "Under Review": underreviewtb,
      "Under ReviewColor": "hsl(70, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedtb,
      "Submitted but not recieved by clientColor": "hsl(80, 70%, 50%)",
      "Not Submitted":notsubmittedtb,
      "Not SubmittedColor": "hsl(165, 70%, 50%)"
    },
    {
      "Discipline": "Str Concrete & Steel",
      "1 - No Exception Taken": noexceptionst,
      "1 - No Exception TakenColor": "hsl(313, 70%, 50%)",
      "3 - Revise & Resubmit": resubmitst,
      "3 - Revise & ResubmitColor": "hsl(234, 70%, 50%)",
      "4 - Rejected": rejectedst,
      "4 - RejectedColor": "hsl(16, 70%, 50%)",
      "5 - Review Not Required": reviewnotrequiredst,
      "5 - Review Not RequiredColor": "hsl(49, 70%, 50%)",
      "Under Review": underreviewst,
      "Under ReviewColor": "hsl(70, 70%, 50%)",
      "Submitted but not recieved by client": notreceviedst,
      "Submitted but not recieved by clientColor": "hsl(165, 70%, 50%)",
      "Not Submitted":notsubmittedst,
      "Not SubmittedColor": "hsl(80, 70%, 50%)"
    }
  ]}
         keys={[
             "1 - No Exception Taken",
             "3 - Revise & Resubmit",
             "4 - Rejected",
             "5 - Review Not Required",
             "Under Review",
             "Submitted but not recieved by client",
             "Not Submitted"
         ]}
         indexBy="Discipline"
         margin={{
             "top": 50,
             "right": 130,
             "bottom": 50,
             "left": 60
         }}
         minValue={0.5}
         padding={0.3}
         innerPadding={2}
         colors={"set2"}
         colorBy="id"
         defs={[
             {
                 "id": "dots",
                 "type": "patternDots",
                 "background": "inherit",
                 "color": "#38bcb2",
                 "size": 4,
                 "padding": 1,
                 "stagger": true
             },
             {
                 "id": "lines",
                 "type": "patternLines",
                 "background": "inherit",
                 "color": "#eed312",
                 "rotation": -45,
                 "lineWidth": 6,
                 "spacing": 10
             }
         ]}
         fill={[
             {
                 "match": {
                     "id": "fries"
                 },
                 "id": "dots"
             },
             {
                 "match": {
                     "id": "sandwich"
                 },
                 "id": "lines"
             }
         ]}


         axisBottom={{
             "tickSize": 5,
             "tickPadding": 5,
             "tickRotation": 0,
             "legend": "Building",
             "legendPosition": "middle",
             "legendOffset": 32
         }}
         axisLeft={{
             "tickSize": 5,
             "tickPadding": 5,
             "tickRotation": 0,
             "legend": "Number of Models",
             "legendPosition": "middle",
             "legendOffset": -40
         }}
         labelSkipWidth={12}
         labelSkipHeight={8}
         labelTextColor="inherit:darker(1.6)"
         animate={true}
         motionStiffness={105}
         motionDamping={17}
         legends={[
             {
                 "dataFrom": "keys",
                 "anchor": "bottom-right",
                 "direction": "column",
                 "justify": false,
                 "translateX": 120,
                 "translateY": 0,
                 "itemsSpacing": 2,
                 "itemWidth": 100,
                 "itemHeight": 20,
                 "itemDirection": "left-to-right",
                 "itemOpacity": 0.85,
                 "symbolSize": 20,
                 "effects": [
                     {
                         "on": "hover",
                         "style": {
                             "itemOpacity": 1
                         }
                     }
                 ]
             }
         ]}
     />
      )


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
      return(
        <div className='current-progress' >
        <Button bsStyle="warning" onClick={this.handleClick}>{this.state.buttontext}</Button>
        {this.ProgressByDiscipline()}
        </div>
      )
    }



  }

export default ProgressByDiscipline;
