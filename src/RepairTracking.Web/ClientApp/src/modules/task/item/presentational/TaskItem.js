import React from 'react'
import { Wrapper } from '../../../common/page'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import ItemView from '../../presentational/ItemView';

export default props => {
    return (
        <Wrapper>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Tarea</ModalHeader>
                <ModalBody>
                    <ItemView {...props} />

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.goBack}>Volver</Button>{' '}
                </ModalFooter>
            </Modal>
        </Wrapper >
    )
}