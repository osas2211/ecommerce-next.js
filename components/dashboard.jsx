import React from 'react'
import styles from "../styles/dashboard.module.css"
import AccountMain from './userAccount/accountMain'
import AccountNav from './userAccount/accountNav'
import { useSelector } from 'react-redux'
import useRouter from "next/router"


export default function AccountOverview() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  React.useEffect(()=>{
    if (!isLoggedIn){
      useRouter.push("/customer/account/login")
    }
  })
  return (
    <div className={styles.dashboard + " d-md-flex justify-content-between align-items-start"}>
        <AccountNav />
        <AccountMain />
    </div>
  )
}
