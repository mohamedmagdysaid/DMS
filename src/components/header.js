import React from 'react';
import {Navbar, Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import '../App.css'

class Header extends React.Component{
  constructor(){
    super()
    this.state={
//define the inital value of handleClick
      valueofClick:null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
//function of handling click by taking current value and pass it to the state
  handleClick(e){
    e.preventDefault();
    if (e.currentTarget.text ==="Design Documents"){
    this.setState({valueofClick:"Design Documents"})
    this.props.getData("Design Documents")
  }
  /**
  else if (e.currentTarget.text==="Shop Drawings"){
    this.setState({valueofClick:"Shop Drawings"})
    this.props.getData("Shop Drawings")
  }
  **/
  }


  render(){
    return(
//Nav bar
      <Navbar fluid>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">DIMS</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#" onClick={this.handleClick}>
      Design Documents
    </NavItem>
    <NavItem eventKey={2} href="#" onClick={this.handleClick}>
      Shop Drawings
    </NavItem>
    <NavDropdown eventKey={3} title="LOD500 Model Submission" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>LOD500 Models</MenuItem>
      <MenuItem eventKey={3.2}>Progress</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>

    )
  }
};

export default Header;
