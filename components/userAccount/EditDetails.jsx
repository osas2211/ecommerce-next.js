import { Modal, Form, Button } from "react-bootstrap";

export const EditDetails = ({onHide, show, accEdit, addressEdit, passwordEdit})=>{

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                Edit User Information
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {
                        accEdit && <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="name">Edit Name</Form.Label>
                                <Form.Control id="name" type="name" required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="email">Edit Email</Form.Label>
                                <Form.Control id="email" type="email" required></Form.Control>
                            </Form.Group>
                        </>
                    }

{
                        addressEdit && <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="address">Edit Address</Form.Label>
                                <Form.Control id="address" type="address" required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="landmark">Edit Landmark</Form.Label>
                                <Form.Control id="landmark" type="text" required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="city">Edit City</Form.Label>
                                <Form.Control id="city" type="text" required></Form.Control>
                            </Form.Group>
                        </>
                    }

{
                        passwordEdit && <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="password">Change Password</Form.Label>
                                <Form.Control id="password" type="text" required></Form.Control>
                            </Form.Group>
                        </>
                    }

                    <Button className="text-light" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}