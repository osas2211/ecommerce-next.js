import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../../styles/auth.module.css"
import Link from "next/link"

export default function ResetPassword() {
  return (
    <div className='wrapper2 mt-5 px-3 px-md-5'>
        <p className='text-primary fw-bold h4 mb-4'>Password Assistance</p>
        <div className={styles.info}>
            <div className='text-primary me-4'><FontAwesomeIcon icon={faInfoCircle}/></div>
            <p>Please enter the e-mail address associated with your EazyShop account. A link will be sent to this e-mail address to reset your password.</p>
        </div>
        <Form>
            <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
            <Form.Control type='email' required></Form.Control>
            <Button className='w-100 mt-3 text-light' type='submit' size='lg'>Reset password</Button>
        </Form>
        <div className='text-center'>
            <Link href={"/customer/account/login"}><a className={ styles.info + ' rounded p-2 text-center mt-3 d-inline-block text-primary'}>Return To Login</a></Link>
        </div>
    </div>
  )
}
