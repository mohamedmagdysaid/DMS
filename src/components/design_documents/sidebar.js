import React from 'react';
import './sidebar.css'


class Sidebar extends React.Component{
    constructor(){
      super()

this.handleRfiIssuedClick=this.handleRfiIssuedClick.bind(this);
this.handleRfiRepliedClick = this.handleRfiRepliedClick.bind(this);
this.handleCompareToInti = this.handleCompareToInti.bind(this);
this.handleCompareToPrev =  this.handleCompareToPrev.bind(this);
    }


handleRfiIssuedClick(){


   if (this.props.RfiRef !=="") {
     window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+this.props.RfiRef+"&isWN=true&dMode=0&Number=00")
   }
   else{
     alert("Please select RFI")
   }

}

handleRfiRepliedClick(){
  if (this.props.RfiRef !=="" && this.props.RfiStatus==="YES") {
    window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+this.props.RfiRef+"&isWN=true&dMode=0&Number00%2EC")
  }
  else if (this.props.RfiStatus !== "YES" && this.props.RfiRef !==""){
      alert("RFI is not Responded Yet")
    }
    if (this.props.RfiRef === "") {
      alert("Please select RFI")
    }
}

handleCompareToInti(){
  if (this.props.compareToInti === "") {
    alert("Please select drawing")
  }
  else if (this.props.compareToInti ==="N/A" || this.props.compareToPrev === "New") {
    alert("Drawing is not available")
  }
  else {

    window.open(this.props.compareToInti.replace("X:\\1. Public\\Out","http://10.4.170.82:5005\\1. Public\\Out"));
  }
}


handleCompareToPrev(){
  if (this.props.compareToPrev === "") {
    alert("Please select drawing")
  }
  else if (this.props.compareToPrev ==="N/A" || this.props.compareToPrev === "New") {
    alert("Drawing is not available")
  }
  else {

    window.open(this.props.compareToPrev.replace("X:\\1. Public\\Out","http://10.4.170.82:5005\\1. Public\\Out"));
  }
}



render(){
  return(
    <div className="wrapper">

    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>DIMS</h3>
        </div>

        <ul className="list-unstyled components">
            <p className = "sidebartitle">Design Documents</p>

            <li>
                <p data-toggle="collapse" aria-expanded="false" className="RFI">Comparison</p>
            </li>
            <li>
                <a onClick={this.handleCompareToInti} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Compare to Intial</a>
            </li>
            <li>
                <a onClick={this.handleCompareToPrev} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Compare to previous</a>
            </li>
            <li>
                <p data-toggle="collapse" aria-expanded="false" className="RFI">RFIs</p>
            </li>
            <li>
                <a onClick={this.handleRfiIssuedClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Issued RFI</a>
            </li>
            <li>
                <a onClick={this.handleRfiRepliedClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Replied RFI</a>
            </li>
        </ul>
    </nav>

</div>



  )
}


}

export default Sidebar
