import React from 'react'
import {CardHeader, Table, Row, Col, Button} from 'reactstrap';
import { FaEdit } from "react-icons/fa";

export default function ClientDetails(props) {
  let { client } = props;
  return (
      <React.Fragment>
        <div className="text-center header">
                    <h2>{client.firstname} {' '} {client.lastname}</h2><FaEdit onClick={() => props.goToEdit(client.id)} />
                </div>
                <CardHeader className="bg-default w-25">Datos personales</CardHeader>
                <div className="section mb-4">
                    <Table hover>
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{client.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">Documento</th>
                                <td>{client.document === null ? '-' : client.document.number}</td>
                            </tr>
                            <tr>
                                <th scope="row">Celular</th>
                                <td>{client.cellphone}</td>
                            </tr>
                            <tr>
                                <th scope="row">Teléfono</th>
                                <td>{client.telephone === null ? '-' : client.telephone}</td>
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
                                        <td>{client.address === null ? '-' : client.address.street}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Altura</th>
                                        <td>{client.address === null ? '-' : client.address.number}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Piso</th>
                                        <td>{client.address === null ? '-' : client.address.floor}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Depto</th>
                                        <td>{client.address === null ? '-' : client.address.floor}</td>
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
                <div className="clearfix mb-3 mr-4">
                    <Button color="primary" className="float-right" onClick={() => props.cancel()}>Volver</Button>
                </div>
      </React.Fragment>
          
  )
}
