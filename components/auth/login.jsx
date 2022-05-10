import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import Link from "next/link"
import styles from "../../styles/auth.module.css"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

export function Login() {
    const [error, setError] = useState()
    const router = useRouter()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    React.useEffect(()=> {
        if (isLoggedIn) {
            router.push("/customer/account/dashboard")
        }
    })
    const [showPassword, setShowPassword] = React.useState(false)
    const handlePasswordVisibitly = ()=>{
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

    const [email, setEmail] = useState()
    const [pswd, setPswd] = useState()

    const handleSignIn = async(e) => {
        e.preventDefault()
        setError("")
        try {
            await signInWithEmailAndPassword(auth, email, pswd)
            router.push("/customer/account/dashboard")
        }
        catch(error){
            if (error.message.indexOf("auth/wrong-password") > -1 || error.message.indexOf("auth/user-not-found" > -1)){
                setError("Wrong Email or Password")
            }

            if (error.message.indexOf("auth/network-request-failed") > -1){
                setError("Network Disconnected")
            }
        }
    }

  return (
    <div className={ styles.login_form + ' px-0 px-md-3'}>
        <p className='text-center text-uppercase text-primary fw-bold'>Login</p>
        <h5>Registered Customers</h5>
        <p>If you have an account, sign in with your email address.</p>
        { error && <span><Alert variant='warning'>{error}</Alert></span> }
        <Form onSubmit={handleSignIn}>
            <div className='mb-3'>
                <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                <Form.Control required type='email' value={email} onChange={ (e)=> setEmail(e.target.value)}></Form.Control>
            </div>

            <div className='mb-3'>
                <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                <Form.Control type={showPassword ? 'text' : "password"} required value={pswd} onChange={ (e)=> setPswd(e.target.value) }></Form.Control>
            </div>
            <div className='d-flex justify-content-between text-sm'>
                <div className={ styles.showPassword +' d-flex'}>
                    <Form.Check onChange={handlePasswordVisibitly} checked={showPassword}></Form.Check>
                    <span className='ms-1' onClick={handlePasswordVisibitly}>show password</span>
                </div>
                <div>
                    <Link href={"/customer/account/passwordreset"}><a>Forgot Your Password?</a></Link>
                </div>
            </div>
            <div className='mt-4'><Button type='submit' size='lg' className='text-light text-uppercase w-100'>Login</Button></div>
        </Form>
        <div className='mt-3 text-center d-md-none'>
            <Link href={"/customer/account/signup"}><a className='text-capitalize text-primary'>Create Account</a></Link>
        </div>
    </div>
  )
}
