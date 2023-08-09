import { Navbar,Nav, Container, NavDropdown, Badge, Form, Dropdown,Button,
        InputGroup} from 'react-bootstrap';


import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

const HeaderComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container>
         <LinkContainer to='/'>
         <Navbar.Brand href="/">Ella's Stylish Shop</Navbar.Brand>
         </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
    <InputGroup>

            {/*Dropdown*/}
          <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
           אפשרויות
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item >שירותי הסטיילינג</Dropdown.Item>
          <Dropdown.Item >קניות עם סטייליסט</Dropdown.Item>
          <Dropdown.Item >סידור הארון</Dropdown.Item>
          <Dropdown.Item >הצעות מיוחדות</Dropdown.Item>
          <Dropdown.Item >Second Hand</Dropdown.Item>

          </Dropdown.Menu>
          </Dropdown>

          <Form.Control type="text" placeholder="Search in shop..." />

            {/*button*/}
          <Button variant="dark">
          <i className="bi bi-search"></i>
          </Button>
    </InputGroup>
            </Nav>

            <Nav>
             {/*NavMenu*/}
             <LinkContainer to='/admin/AdminOrdersPage'>
               <Nav.Link >
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
               </Nav.Link>
            </LinkContainer>

            <NavDropdown title="Elian Levitzki" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/UserOrdersPage" as ={Link} to="/user/UserOrdersPage">הקניות שלי</NavDropdown.Item>
              <NavDropdown.Item eventKey="/user/UserProfilePage" as ={Link} to="/user/UserProfilePage">פרופיל שלי</NavDropdown.Item>
              <NavDropdown.Item >התנתק</NavDropdown.Item>

            </NavDropdown>
            
            <LinkContainer to='/LoginPage'>
               <Nav.Link >התחבר</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/RegisterPage'>
               <Nav.Link >רישום לאתר</Nav.Link>
            </LinkContainer>


            <LinkContainer to='/CartPage'>
               <Nav.Link >
               <Badge pill bg="danger">
                   2
               </Badge>
               <i className="bi bi-cart-check"></i>
                <span className="ms-1">סל קניות</span>
                
               </Nav.Link>
            </LinkContainer>



          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default HeaderComponent;