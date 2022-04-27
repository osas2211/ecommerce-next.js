import React from 'react'
import { Login as LoginComponent } from '../../../components/auth/login'
import styles from "../../../styles/auth.module.css"
import { Button } from 'react-bootstrap'
import Link from "next/link"

export default function Login() {
  return (
    <>
        <div className='mt-5 pt-5'>
            <h2 className='mt-2 mb-5 display-6  text-center'>Customer Login</h2>
            <div className={ styles.login + ' container px-5 d-block d-lg-flex justify-content-between'}>
              <LoginComponent />
                <div className={styles.line + " d-none d-lg-block"}></div>
              <div className={ styles.login_createNew + " px-3"}>
                <p className='text-center text-primary fw-bold mb-5'>Create your EazyShop account</p>
                <p>Create your EazyShop customer account in just a few clicks! You can register either using your e-mail address or through your Facebook account.</p>

                <div>
                  <Link href={"/customer/account/signup"}><a><Button size='lg' className='w-100 my-5 text-light text-uppercase'>Create an account</Button></a></Link>
                </div>

              </div>
            </div>
        </div>
    </>
  )
}
