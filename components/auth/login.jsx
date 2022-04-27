import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Link from "next/link"
import styles from "../../styles/auth.module.css"

export function Login() {
    const [showPassword, setShowPassword] = React.useState(false)
    const handlePasswordVisibitly = ()=>{
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

  return (
    <div className={ styles.login_form + ' px-0 px-md-3'}>
        <p className='text-center text-uppercase text-primary fw-bold'>Login</p>
        <h5>Registered Customers</h5>
        <p>If you have an account, sign in with your email address.</p>
        <Form>
            <div className='mb-3'>
                <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                <Form.Control></Form.Control>
            </div>

            <div className='mb-3'>
                <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                <Form.Control type={showPassword ? 'text' : "password"}></Form.Control>
            </div>
            <div className='d-flex justify-content-between text-sm'>
                <div className={ styles.showPassword +' d-flex'}>
                    <Form.Check onClick={handlePasswordVisibitly} checked={showPassword}></Form.Check>
                    <span className='ms-1' onClick={handlePasswordVisibitly}>show password</span>
                </div>
                <div>
                    <Link href={"/customer/account/passwordreset"}><a>Forgot Your Password?</a></Link>
                </div>
            </div>
            <div className='mt-4'><Button type='submit' size='lg' className='text-light text-uppercase w-100'>Login</Button></div>
        </Form>
    </div>
  )
}
