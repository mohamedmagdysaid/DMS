import React from 'react';
import './sidebar.css'


class Sidebar extends React.Component{
    constructor(){
      super()

this.handleRfiIssuedClick=this.handleRfiIssuedClick.bind(this);
this.handleRfiRepliedClick = this.handleRfiRepliedClick.bind(this);
    }


handleRfiIssuedClick(){


   if (this.props.RfiRef !="") {
     window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+this.props.RfiRef+"&isWN=true&dMode=0&Number=00")
   }

}

handleRfiRepliedClick(){
  if (this.props.RfiRef !="" && this.props.RfiStatus=="YES") {
    window.open("https://mtbvbc.tcajv.ae/MTB/?WorkID=DCG%20WORKSPACE&DocuNum="+this.props.RfiRef+"&isWN=true&dMode=0&Number00%2EC")
  }
  else if (this.props.RfiStatus !== "YES"){
      alert("RFI is not Responded Yet")
    }
}



render(){
  return(
    <div class="wrapper">

    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>DIMS</h3>
        </div>

        <ul class="list-unstyled components">
            <p className = "sidebartitle">Design Documents</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">---</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">---</a>
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
