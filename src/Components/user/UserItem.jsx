import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import '/Jv/lowcost_avia/frontend/src/style/Item.css'

const UserItem = ({ user, remove }) => {

    return (
        <Container className='mt-3 item'>
            <Row>
                <Col className="mt-2">
                    <Container style={{ display: 'flex' }}><h3>User number: {user.number}</h3></Container>
                </Col>
                <Col>
                    <Container className='mr-2 mt-2' style={{ textAlign: 'right' }}>
                        <Button onClick={() => remove(user)} variant='danger'>Deny</Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default UserItem