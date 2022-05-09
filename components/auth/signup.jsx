import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Link from "next/link"
import styles from "../../styles/auth.module.css"
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export function SignUp() {
    const route = useRouter()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    React.useEffect(()=> {
        if (isLoggedIn) {
            route.push("/customer/account/dashboard")
        }
    })


    const [showPassword, setShowPassword] = React.useState(false)
    const handlePasswordVisibitly = ()=>{
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

    const [first, setFirst] = useState()
    const [last, setlast] = useState()
    const [email, setemail] = useState()
    const [pswd, setPswd] = useState()

    const handleSignUp = async (e)=> {
        e.preventDefault()
        const response = await createUserWithEmailAndPassword(auth, email, pswd)
        const user = response.user.email
        console.log(user)
        route.push("/customer/account/dashboard")
    }

  return (
    <div className={ 'container pt-5 p-5'}>
        <p className='text-center text-uppercase text-primary fw-bold mt-5 mb-5'>Create Account</p>
        <Form onSubmit={handleSignUp}>
            <div className='d-block d-md-flex justify-content-between'>
                <div className='mb-3 w-100'>
                    <Form.Label>First Name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control name='first_name' required value={first} onChange={ (e)=> setFirst(e.target.value) }></Form.Control>
                </div>

                <div className='mb-3 ms-0 ms-md-5 w-100'>
                    <Form.Label>Last Name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control name='last_name' required value={last} onChange={ (e)=> setlast(e.target.value) }></Form.Control>
                </div>
            </div>
            <div className='d-block d-md-flex justify-content-between'>
                <div className='mb-3 w-100'>
                    <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type='email' required value={email} onChange={ (e)=> setemail(e.target.value) }></Form.Control>
                </div>

                <div className='mb-3 ms-0 ms-md-5 w-100'>
                    <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                    <Form.Control type={showPassword ? 'text' : "password"} required value={pswd} onChange={ (e)=> setPswd(e.target.value) }></Form.Control>
                </div>
            </div>
            <div className='d-flex justify-content-between text-sm'>
                <div>
                    <Link href={"/customer/account/login"}><a>Have an account?</a></Link>
                </div>
                <div className={ styles.showPassword +' d-flex'}>
                    <Form.Check onClick={handlePasswordVisibitly} checked={showPassword}></Form.Check>
                    <span className='ms-1' onClick={handlePasswordVisibitly}>show password</span>
                </div>
            </div>
            <div className='mt-4'><Button type='submit' size='lg' className='text-light text-uppercase w-100'>Create account</Button></div>
        </Form>
    </div>
  )
}
