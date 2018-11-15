import React from 'react';
import './sidebar.css'


class ProgressSidebar extends React.Component{
    constructor(){
      super()

this.handleClick = this.handleClick.bind(this)
    }

handleClick(e){
  e.preventDefault()
  console.log(e.currentTarget.text);
  if (e.currentTarget.text === "Progress by Package") {
    this.props.getData("Progress by Package")
  }
  if (e.currentTarget.text === "Progress by Area & Discipline") {
    this.props.getData("Progress by Area & Discipline")
  }
  if (e.currentTarget.text === "Progress") {
    this.props.getData("Progress")
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
            <p className = "sidebartitle"></p>

            <li>
                <a onClick={this.handleClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Progress</a>
            </li>
            <li>
                <a onClick={this.handleClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Progress by Area & Discipline</a>
            </li>
            <li>
                <a onClick={this.handleClick} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Progress by Package</a>
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

export default ProgressSidebar
