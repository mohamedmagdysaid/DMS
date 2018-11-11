import React from 'react';
import './sidebar.css'


class Sidebar extends React.Component{
    constructor(){
      super()


    }





render(){
  return(
    <div className="wrapper">

    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>DIMS</h3>
        </div>

        <ul className="list-unstyled components">
            <p className = "sidebartitle">Progress</p>

            <li>
                <p data-toggle="collapse" aria-expanded="false" className="RFI"></p>
            </li>
            <li>
                <a onClick={this.handleCompareToInti} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"></a>
            </li>
            <li>
                <a onClick={this.handleCompareToPrev} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"></a>
            </li>
            <li>
                <p data-toggle="collapse" aria-expanded="false" className="RFI"></p>
            </li>
            <li>
                <a onClick={this.handleRfiIssuedClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"></a>
            </li>
            <li>
                <a onClick={this.handleRfiRepliedClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"></a>
            </li>
        </ul>
    </nav>

</div>



  )
}


}

export default Sidebar
