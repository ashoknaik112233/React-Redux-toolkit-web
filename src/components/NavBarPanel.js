//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


//craete nav bar page here  using bootstrap from reactboot
const NavBarPanel = () => {
    //useselector to read the state from the redux then get the no of counts for {bag cart}
    const cartProducts = useSelector(state => state.cart); // cart from cart slice,to return state


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Nav>
                    <Nav.Link to="/" as={Link}>Product</Nav.Link>


                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>

                    </Navbar.Text>
                </Navbar.Collapse>




            </Container>
        </Navbar>
    );



}
export default NavBarPanel;