import React from 'react';
import {Container, Card, CardHeader, CardBody, Table} from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { FaEdit } from "react-icons/fa";
import style from './styles/view.css';

const View = (props) => {
  return (
    <Container className="py-4 px-4">
        <Card>
            <CardHeader className="text-white bg-secondary"><b>Detalles del cliente</b></CardHeader>
            <CardBody className="py-0 px-0">
                <Nav tabs className="my-4">
                    <NavItem>
                       <NavLink className="active">
                            Detalles
                       </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Reparaciones
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className="text-center header">
                    <h2>Mariano Martinelli</h2><FaEdit onClick={() => props.goToEdit(1, 'edit')}/>
                </div>
                <CardHeader className="bg-default w-25">Datos personales</CardHeader>
                <div className="section mb-4">
                <Table hover>
                        <tbody>
                        <tr>
                            <th scope="row">Email</th>
                            <td>mariano_martinelli@yahoo.com.ar</td>
                        </tr>
                        <tr>
                            <th scope="row">Documento</th>
                            <td>40000000</td>
                        </tr>
                        <tr>
                            <th scope="row">Celular</th>
                            <td>221-6546897</td>
                        </tr>
                        <tr>
                            <th scope="row">Teléfono</th>
                            <td>221-4789900</td>
                        </tr>
                        
                        </tbody>
                    </Table>
                </div>
                <CardHeader className="bg-default w-25">Datos de domicilio</CardHeader>
                <div className="section">
                    <Row>
                        <Col md="6">
                            <Table hover>
                                <tbody>
                                    <tr>
                                        <th scope="row">Domicilio</th>
                                        <td>Calle 480</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Altura</th>
                                        <td>408</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Piso</th>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Depto</th>
                                        <td>3A</td>
                                    </tr>
                            
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="6">
                            <Table hover>
                                <tbody>
                                <tr>
                                    <th scope="row">Provincia</th>
                                    <td>Buenos Aires</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ciudad</th>
                                    <td>La Plata</td>
                                </tr>
                                <tr>
                                    <th scope="row">Código Postal</th>
                                    <td>1900</td>
                                </tr>
                                
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </CardBody>
            <div className="clearfix mb-3 mr-4">
                    <Button color="primary" className="float-right" onClick={() => props.cancel() }>Volver</Button>
                </div>
        </Card>
    </Container>
  )
}

export default View;
