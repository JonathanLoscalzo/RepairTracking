import React from 'react';
import { Link, NavLink as NavLinkRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { NavbarBrand, Navbar, NavbarToggler, Collapse, Nav, NavLink, NavItem } from 'reactstrap';
import { MdHome, MdAccessibility, MdVpnKey} from 'react-icons/md'
import { FaHammer } from 'react-icons/fa'
//import './NavMenu.css';}


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {

        return (
            <Navbar className="navbar-expand-md navbar-dark bg-dark">
                <NavbarBrand tag={Link} to={'/'}>
                    Repair Tracking
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        {/* <LinkContainer to={'/'} exact>
                            <NavItem>
                                <NavLink>
                                    <MdHome /> Home
                                </NavLink>
                            </NavItem>
                        </LinkContainer> */}
                        <LinkContainer to={'/client'} exact>
                            <NavItem>
                                <NavLink>
                                    <MdAccessibility /> Clientes
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/repairs'} exact>
                            <NavItem>
                                <NavLink disabled>
                                    <FaHammer /> Reparaciones
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/element'} exact>
                            <NavItem>
                                <NavLink>
                                    <FaHammer /> Elementos Reparables
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/task'} exact>
                            <NavItem>
                                <NavLink>
                                    <FaHammer /> Tareas Genéricas
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <LinkContainer to={'/logout'} exact>
                            <NavItem>
                                <NavLink>
                                    <MdVpnKey /> Cerrar Sesión
                                </NavLink>
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Collapse>
            </Navbar>

            // <Navbar inverse fixedTop fluid >
            //   <Navbar.Header>
            //     <Navbar.Brand>
            //       <Link to={'/'}>RepairTracking.Web</Link>
            //     </Navbar.Brand>
            //     <Navbar.Toggle />
            //   </Navbar.Header>
            //   <Navbar.Collapse>
            //     <Nav>
            //       <LinkContainer to={'/'} exact>
            //         <NavItem>
            //           <Glyphicon glyph='home' /> Home
            //         </NavItem>
            //       </LinkContainer>
            //       <LinkContainer to={'/client'} exact>
            //         <NavItem>
            //           <Glyphicon glyph='book' /> Clientes
            //         </NavItem>
            //       </LinkContainer>
            //     </Nav>
            //   </Navbar.Collapse>
            // </Navbar>
        )
    }
}
