import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../../styles/auth.module.css"
import Link from "next/link"
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

export default function ResetPassword() {
  const [error, setError] = useState()
  const [variant, setVariant] = useState()
  const [email, setEmail] = useState()
  const resetEmail = async(e)=>{
    e.preventDefault();
    setError("")
    try{
      await sendPasswordResetEmail(auth, email)
      setVariant("success")
      setError("Password Reset Link has been sent to this email")
    }catch(error){
      setVariant("warning")
      if (error.message.indexOf("auth/network-request-failed") > -1){
        setError("Network Disconnected")
      }
      else if (error.message.indexOf("auth/user-not-found") > -1){
        setError("Email has not been registered yet")
    }
    }
  }
  return (
    <div className='wrapper2 mt-5 px-3 px-md-5'>
        <p className='text-primary fw-bold h4 mb-4'>Password Assistance</p>
        <div className={styles.info}>
            <div className='text-primary me-4'><FontAwesomeIcon icon={faInfoCircle}/></div>
            <p>Please enter the e-mail address associated with your EazyShop account. A link will be sent to this e-mail address to reset your password.</p>
        </div>
        { error && <span><Alert variant={variant}>{error}</Alert></span> }
        <Form onSubmit={resetEmail}>
            <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
            <Form.Control type='email' required value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
            <Button className='w-100 mt-3 text-light' type='submit' size='lg'>Reset password</Button>
        </Form>
        <div className='text-center'>
            <Link href={"/customer/account/login"}><a className={ styles.info + ' rounded p-2 text-center mt-3 d-inline-block text-primary'}>Return To Login</a></Link>
        </div>
    </div>
  )
}
