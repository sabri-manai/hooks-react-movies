import React from 'react'
import{Navbar, Form, FormControl, Button} from 'react-bootstrap'

const NavBar = (props) => {

    return (
        <div>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Aflem</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      /> 
      <Button variant="outline-success" onChange={(e) => handleTitle(e)}>Search</Button>
    </Form>
    
  </Navbar.Collapse>
</Navbar> 
        </div>
    )
}

export default NavBar
