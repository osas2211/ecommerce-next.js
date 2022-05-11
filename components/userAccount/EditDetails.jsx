import { Modal, Form, Button, Alert } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { updatePassword, updateEmail } from "firebase/auth";
import { useSelector } from "react-redux";
import { db, auth } from "../../firebase/firebase";
import { useState } from "react";

export const EditDetails = ({onHide, show, accEdit, addressEdit, passwordEdit, setError, error})=>{
    const userEmail = useSelector(state => state.auth.email)
    const user = useSelector(state => state.auth.user)
    const [variant, setVariant] = useState()
    const [first, setFirst] = useState()
    const [last, setLast] = useState()
    const [email, setEmail] = useState(userEmail)
    const [pswd, setPswd] = useState()
    const [address, setAddress] = useState()
    const [landmark, setLandMark] = useState()
    const [city, setCity] = useState()
    const userRef = userEmail && doc(db, "users", user.uid)

    const EditDetails = async (e)=>{
        e.preventDefault()
        setError("")
        if (accEdit){
            try {
                await updateDoc(userRef, {
                    name: `${first} ${last}`,
                    email: email
                })
                await updateEmail(user, email)
                setVariant("success")
                setError("Details Updated Successfully")
                setFirst("")
                setLast("")
            } catch (error) {
                console.log(error.message)
                setVariant("danger")
                if (error.message.indexOf("auth/requires-recent-login") > -1){
                    setError("Email Reset requires a recent Log in. Please Log out and Log in and then change password")
                }
            }
        }

        else if (addressEdit){
            try {
                await updateDoc(userRef, {
                    address,
                    landmark,
                    city
                })
                setVariant("success")
                setError("Address Updated Successfully")
                setAddress("")
                setCity("")
                setLandMark("")
            } catch (error) {
                
            }
        }

        else if (passwordEdit){
            try {
                await updatePassword(user, pswd)
                setVariant("success")
                setError("Password Updated Successfully")
                setPswd("")
            } catch (error) {
                console.log(error.message)
                setVariant("warning")
                if (passwordEdit && error.message.indexOf("auth/weak-password") > -1){
                    setError("Weak Password: Password should be at least 6 characters")
                }
                else if (error.message.indexOf("auth/requires-recent-login") > -1){
                    setError("Password Reset requires a recent Log in Please Log out and Log in and then change password")
                }
            }
        }
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                Edit User Information
            </Modal.Header>
            <Modal.Body>
                { error && <span><Alert variant={variant}>{error}</Alert></span> }
                <Form onSubmit={EditDetails}>
                    {
                        accEdit && <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="name">Edit First Name</Form.Label>
                                <Form.Control id="name" type="name" required value={first} onChange= {(e)=> setFirst(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="name">Edit Last Name</Form.Label>
                                <Form.Control id="name" type="name" required value={last} onChange= {(e)=> setLast(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="email">Edit Email</Form.Label>
                                <Form.Control id="email" type="email" required value={email} onChange= {(e)=> setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                        </>
                    }

{
                        addressEdit && <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="address">Edit Address</Form.Label>
                                <Form.Control id="address" type="address" required value={address} onChange={e=>{
                                    setAddress(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="landmark">Edit Landmark</Form.Label>
                                <Form.Control id="landmark" type="text" required value={landmark} onChange={e=>{
                                    setLandMark(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="city">Edit City</Form.Label>
                                <Form.Control id="city" type="text" required value={city} onChange={e=>{
                                    setCity(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                        </>
                    }

{
                        passwordEdit && <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="password">Change Password</Form.Label>
                                <Form.Control id="password" type="text" required value={pswd} onChange={e=>{
                                    setPswd(e.target.value)
                                }}></Form.Control>
                            </Form.Group>
                        </>
                    }

                    <Button className="text-light" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}